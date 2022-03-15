import React from 'react'
import { MainPost } from '../components/Mainpost'
import { Posts } from './Posts'

export const Home = ({posts}) => {
  const post1 = posts[0]
  const post2 = posts[1]
  const post3 = posts[2]    
  return (
    <div className='container mx-auto mt-10'>
        <MainPost post={posts[0]}/>
        <MainPost post={posts[1]}/>
        <MainPost post={posts[2]}/>
    </div>
  )
}
