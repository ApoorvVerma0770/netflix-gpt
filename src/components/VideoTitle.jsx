import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" absolute aspect-video text-white w-screen pt-[15%] bg-gradient-to-r from-black px-12">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="w-1/4 py-6">{overview}</p>
        <div>
            <button className="bg-white px-12 py-2 rounded-lg text-black hover:opacity-80">▶️ Play</button>
            <button className="bg-gray-100 mx-2  px-10 py-2 rounded-lg text-black hover:opacity-90">❕More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle