import React, { useEffect, useMemo, useState } from "react";

/**
 * LeetCodeHeatmap
 * ----------------
 * Drop-in component that shows a GitHub-style submission heatmap
 * plus a small stats summary, sourced from:
 *   https://leetcode-stats.tashif.codes/<username>
 *
 * Usage:
 *   <LeetCodeHeatmap username="your-leetcode-username" />
 *
 * Props:
 *   username   (string, required) - your LeetCode username
 *   weeks      (number, optional) - how many weeks back to show (default 52)
 *   accent     (string, optional) - hex color for the "active" heatmap cells
 */

const API_URL = (username) => `https://leetcode-stats.tashif.codes/${username}`;

async function fetchStats(username) {
  const res = await fetch(API_URL(username));
  if (!res.ok) {
    throw new Error(`Request failed (${res.status})`);
  }
  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error("API returned an unreadable response");
  }
  if (data && data.status === "error") {
    throw new Error(data.message || "User not found");
  }
  return data || {};
}

function safeNumber(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function buildWeeks(rawCalendar, weekCount) {
  let calendar = rawCalendar;
  if (typeof calendar === "string") {
    try {
      calendar = JSON.parse(calendar);
    } catch {
      calendar = {};
    }
  }
  if (!calendar || typeof calendar !== "object") calendar = {};

  const dayMs = 24 * 60 * 60 * 1000;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const counts = {};
  Object.entries(calendar).forEach(([ts, count]) => {
    const tsNum = Number(ts);
    if (!Number.isFinite(tsNum)) return;
    const d = new Date(tsNum * 1000);
    if (Number.isNaN(d.getTime())) return;
    d.setHours(0, 0, 0, 0);
    const key = d.toISOString().slice(0, 10);
    counts[key] = (counts[key] || 0) + safeNumber(count);
  });

  const totalDays = weekCount * 7;
  const start = new Date(today.getTime() - (totalDays - 1) * dayMs);
  const startDow = start.getDay();
  start.setTime(start.getTime() - startDow * dayMs);

  const days = [];
  for (let i = 0; i < totalDays + startDow; i++) {
    const d = new Date(start.getTime() + i * dayMs);
    const key = d.toISOString().slice(0, 10);
    days.push({ date: key, count: counts[key] || 0 });
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function levelForCount(count, max) {
  if (!count) return 0;
  if (max <= 1) return 4;
  const ratio = count / max;
  if (ratio > 0.75) return 4;
  if (ratio > 0.5) return 3;
  if (ratio > 0.25) return 2;
  return 1;
}

export default function LeetCodeHeatmap({
  username,
  weeks = 52,
  accent = "#2f9e44",
}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (!username) {
      setError("No username provided");
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchStats(username)
      .then((res) => {
        if (!cancelled) setData(res);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Failed to load LeetCode stats");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  const weekGrid = useMemo(() => {
    if (!data) return [];
    return buildWeeks(data.submissionCalendar, weeks);
  }, [data, weeks]);

  const maxCount = useMemo(() => {
    let max = 0;
    weekGrid.forEach((w) => w.forEach((d) => (max = Math.max(max, d.count))));
    return max;
  }, [weekGrid]);

  const monthLabels = useMemo(() => {
    const labels = [];
    let lastMonth = null;
    weekGrid.forEach((week, i) => {
      const firstDay = week && week[0];
      if (!firstDay) return;
      const month = new Date(firstDay.date).getMonth();
      if (month !== lastMonth) {
        labels.push({
          index: i,
          label: new Date(firstDay.date).toLocaleString("en-US", { month: "short" }),
        });
        lastMonth = month;
      }
    });
    return labels;
  }, [weekGrid]);

  if (loading) {
    return (
      <div style={styles.card}>
        <div style={styles.skeleton} />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={styles.card}>
        <p style={styles.errorText}>
          Couldn't load LeetCode stats{error ? `: ${error}` : ""}.
        </p>
      </div>
    );
  }

  const totalSolved = safeNumber(data.totalSolved);
  const totalQuestions = safeNumber(data.totalQuestions);
  const easySolved = safeNumber(data.easySolved);
  const mediumSolved = safeNumber(data.mediumSolved);
  const hardSolved = safeNumber(data.hardSolved);
  const acceptanceRate = safeNumber(data.acceptanceRate);

  const cellSize = 11;
  const cellGap = 3;

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3 style={styles.title}>LeetCode Activity</h3>
        <a
          href={`https://leetcode.com/${username}/`}
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          @{username}
        </a>
      </div>

      <div style={styles.statsRow}>
        <Stat label="Solved" value={`${totalSolved}/${totalQuestions}`} />
        <Stat label="Easy" value={easySolved} color="#2f9e44" />
        <Stat label="Medium" value={mediumSolved} color="#e0a800" />
        <Stat label="Hard" value={hardSolved} color="#d9480f" />
        <Stat label="Acceptance" value={`${acceptanceRate.toFixed(1)}%`} />
      </div>

      {weekGrid.length === 0 ? (
        <p style={styles.errorText}>No submission activity to show yet.</p>
      ) : (
        <div style={styles.heatmapScroll}>
          <div style={{ position: "relative", paddingLeft: 4 }}>
            <div style={{ position: "relative", height: 14, marginLeft: 2 }}>
              {monthLabels.map((m) => (
                <span
                  key={`${m.label}-${m.index}`}
                  style={{
                    position: "absolute",
                    left: m.index * (cellSize + cellGap),
                    fontSize: 10,
                    color: "#8b949e",
                  }}
                >
                  {m.label}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: cellGap, marginTop: 4 }}>
              {weekGrid.map((week, wi) => (
                <div key={wi} style={{ display: "flex", flexDirection: "column", gap: cellGap }}>
                  {week.map((day, di) => {
                    const level = levelForCount(day.count, maxCount);
                    return (
                      <div
                        key={di}
                        onMouseEnter={() => setHovered(day)}
                        onMouseLeave={() => setHovered(null)}
                        title={`${day.count} submission${day.count === 1 ? "" : "s"} on ${day.date}`}
                        style={{
                          width: cellSize,
                          height: cellSize,
                          borderRadius: 2,
                          background: level === 0 ? "#1b1f24" : accent,
                          opacity: level === 0 ? 1 : 0.22 * level + 0.12,
                          cursor: "pointer",
                          transition: "opacity 0.15s ease",
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {hovered && (
        <p style={styles.hoverText}>
          {hovered.count} submission{hovered.count === 1 ? "" : "s"} · {hovered.date}
        </p>
      )}
    </div>
  );
}

function Stat({ label, value, color }) {
  return (
    <div style={styles.stat}>
      <span style={{ ...styles.statValue, color: color || "#e6edf3" }}>{value}</span>
      <span style={styles.statLabel}>{label}</span>
    </div>
  );
}

const styles = {
  card: {
    background: "#0d1117",
    border: "1px solid #21262d",
    borderRadius: 12,
    padding: "20px 22px",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#e6edf3",
    maxWidth: 720,
  },
  header: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  title: { fontSize: 15, fontWeight: 600, margin: 0 },
  link: { fontSize: 12, color: "#58a6ff", textDecoration: "none" },
  statsRow: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
    marginBottom: 18,
  },
  stat: { display: "flex", flexDirection: "column" },
  statValue: { fontSize: 16, fontWeight: 700, lineHeight: 1.2 },
  statLabel: { fontSize: 11, color: "#8b949e", marginTop: 2 },
  heatmapScroll: { overflowX: "auto", paddingBottom: 4 },
  hoverText: { fontSize: 12, color: "#8b949e", marginTop: 10, marginBottom: 0 },
  errorText: { fontSize: 13, color: "#f85149", margin: 0 },
  skeleton: {
    height: 140,
    borderRadius: 8,
    background: "#161b22",
  },
};