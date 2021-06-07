import React from 'react'
import Tag from './Tag'
 
interface Props {
  
}

const BlogCard = (props: Props) => {
  return (
    <div className="container max-w-md mx-auto mt-10">
      <div className="overflow-hidden rounded shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <Tag tagName={"photography"} />
          <Tag tagName={"travel"} />
          <Tag tagName={"winter"} />
        </div>
      </div>
    </div>
  )
}

export default BlogCard
