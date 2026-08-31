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
        <div>
          <div className='border border-light-green rounded-4xl flex items-center justify-center flex-wrap p-15 mt-5 border-4 italic md:not-italic'>
            <h2 className='flex items-center font-bold text-2xl opacity-100 hover:opacity-90'><a href='https://my-first-blog-of-redux.hashnode.dev/a-practical-guide-to-redux-redux-toolkit-react-redux'>Redux-Toolkit</a></h2>
            <p style = {{fontFamily:"'Pacifico',cursive"}}>"A deep dive into managing complex application state efficiently. 
              Explores slices, immutability under the hood (Immer integration), and seamlessly binding global stores to React components."

            </p>
          </div>
        </div>
        <div>
          <div className='border border-light-green rounded-4xl flex items-center justify-center flex-wrap p-15 mt-5 border-4 italic md:not-italic'>
            <h2 className='flex items-center font-bold text-2xl pb-2 opacity-100 hover:opacity-90'><a href='https://my-first-blog-of-redux.hashnode.dev/understanding-grpc-the-fast-way-microservices-talk-to-each-other'>gRPC</a></h2>
            <p style = {{fontFamily:"'Pacifico',cursive"}}className='font-pacifico'>"An architectural breakdown of API design patterns. Features low-level flow diagrams comparing HTTP/1.1 JSON requests against binary Protobuf over HTTP/2, detailing latency metrics, serialization overhead, and network transport mechanics."

            </p>
          </div>
        </div>
    </div>
  );
};

export default Blog;