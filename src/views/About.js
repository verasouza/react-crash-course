import React, { useState } from 'react';

function About() {
  return (
    <div className="box-content p-4 border-4 border-gray-400 ">
      <div className="h-full w-full">
        <h1 className="font-bold text-2xt mb-3">React-Crash-Course</h1>

        <p>
          Learning how to create a react-app, using the resources below:
      </p>
        <ul className="list-disc p-3">
          <li>Hooks</li>
          <li>Mockapi - to create a fake API of a list of products</li>
          <li>Axios - to connect to the API via http protocols</li>
          <li>Tailwind - to customize CSS</li>
          <li>Fontawesome - icons</li>
          <li>React-spring - to animation</li>

        </ul>

      </div>



    </div>
  )
}

export default About;