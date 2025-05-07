import React from 'react';
import { FaArrowUpRightDots } from "react-icons/fa6";

const Blog = () => {
  const blogs = [
    {
      date: 'May 27, 2024',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      author: 'Martinez',
      title: 'How Pro-Grade Gaming Gear Can Elevate Your Gameplay',
      description: 'Delve into the performance benefits of using high-end gaming mice, keyboards, headsets...',
      link: '#'
    },
    {
      date: 'Jan 16, 2024',
      image: 'https://img.myipadbox.com/upload/store/detail_l/TBD06036866_4.jpg',
      author: 'Musser',
      title: 'Elevate Your Gaming Experience with Modern Equipment',
      description: 'Delve into the performance benefits of using high-end gaming mice, keyboards, headsets...',
      link: '#'
    },
    {
      date: 'Apr 08, 2024',
      image: 'https://assets2.razerzone.com/images/pnx.assets/392d2ff1497385d9db4575e709d058ac/500x500-basilisklinepg-productline-basiliskv3pro.webp',
      author: 'Marilyn',
      title: 'The Emerging Trend of Sleek and Stylish Gaming Gear Designs',
      description: 'Delve into the performance benefits of using high-end gaming mice, keyboards, headsets...',
      link: '#'
    },
    {
      date: 'Jun 17, 2024',
      image: 'https://assets2.razerzone.com/images/pnx.assets/57c2af30b5d9a2b699b3e896b788e00f/headset-landingpg-500x500-blacksharkv2pro2023.jpg',
      author: 'Kristina',
      title: 'Essential Gear for Aspiring Content Creators',
      description: 'Delve into the performance benefits of using high-end gaming mice, keyboards, headsets...',
      link: '#'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-black h-full">
      {/* <h1 className="text-4xl font-bold text-center mb-4 text-white font-mono p-12">Experience real world<span className='bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'>  gaming with santics </span></h1> */}
    
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10">
  {blogs.map((blog, index) => (
    <div
      key={index}
      className="bg-blue-50 rounded-xl overflow-hidden shadow-lg relative flex flex-col md:flex-row"
    >
      <div className="w-full md:w-1/2">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-60 md:h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between p-4 bg-black/90">
        <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold px-3 py-2 rounded-full mb-2 w-max absolute top-4 left-4 z-30">
          {blog.date}
        </span>
        <div className="flex flex-col items-center md:items-start justify-center mt-10 md:mt-12">
          <p className="text-sm text-gray-400 space font-mono">By {blog.author}</p>
          <h2 className="text-sm font-light mb-2 game text-center md:text-start mt-8 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">{blog.title}</h2>
          <p className="text-gray-300 text-sm mb-4 text-center md:text-start mt-8 space font-mono">{blog.description}</p>
        </div>
       <div className='flex items-center justify-end '>
       <a
          href={blog.link}
          className="text-white font-semibold hover:underline flex items-center justify-center mt-4 rounded-full h-20 text-xs w-20 bg-gradient-to-r from-purple-600 to-pink-500 animate-ping"
        >
          <FaArrowUpRightDots />
        </a>
       </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Blog;
