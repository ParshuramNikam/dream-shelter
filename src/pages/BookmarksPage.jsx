import { BellIcon, BookmarkAltIcon } from '@heroicons/react/outline'
import React from 'react'
import PostCard from '../components/home/PostCard'
import PostsContainer from '../components/home/PostsContainer'

// Code written by Parshuram :

const BookmarksPage = () => {
  return (
    <section className='p-1'>
      <h1 className="py-2 mx-3 font-semibold text-lg">
        <BookmarkAltIcon className="mr-1 h-7 w-7 fill-gray-300 stroke stroke-indigo-80 inline-block relative bottom-0.5" />
        BookMark Questions : 
      </h1>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mx-auto">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  )
}

export default BookmarksPage