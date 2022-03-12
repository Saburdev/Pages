import React from 'react'

export const Home = ({posts}) => {

    
  return (
    <div className='container mx-auto mt-10'>
        <Mainposts post={posts[0]}/>
        <Mainposts post={posts[1]}/>
        <Mainposts post={posts[2]}/>
    </div>
  )
}
