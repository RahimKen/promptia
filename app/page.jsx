import Feed from '@components/Feed'
import React from 'react'


const Home = () => {
    console.log(process.env.GOOGLE_ID , process.env.GOOGLE_CLIENT_SECRET)

  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover & Share
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'>
                AI-Powered Prompts
            </span>
        </h1>
        <p className='desc text-center'>
            Promptia is an open-source AI prompting 
            tool for modern world to discover, create 
            and share creative prompts
        </p>

        <Feed/>
    </section>
  )
}

export default Home
