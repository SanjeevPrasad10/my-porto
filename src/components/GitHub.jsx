import { memo } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
// imort GitHubCalendar

const GitHub = () => {
  return (
    <div className='bg-light-green border-light-green rounded-2xl'>
        <GitHubCalendar
          username="SanjeevPrasad10" 
          colorScheme="dark"
          fontSize={12}
          blockSize={11}
          blockMargin={3}
        />
    </div>
  );
};

export default GitHub