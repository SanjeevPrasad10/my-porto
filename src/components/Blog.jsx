import { memo } from 'react';

import { BiArrowFromLeft } from 'react-icons/bi';
const Blog = () => {
  return (
    <div>
        <div>
            <p className='text-center font-bold text-2xl'>My Writings</p>
            <p className='text-center font-bold'>Thoughts on software that i have my own uderstanding of</p>
            <a href='https://hashnode.com/drafts?tab=published'> 
                <span className='opacity-80 hover:opacity-50 hover:underline-offset-8'>My Blogs</span> 
            </a>
        </div>
    </div>
  );
};

export default Blog;