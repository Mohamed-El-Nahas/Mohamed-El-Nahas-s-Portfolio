import React from 'react'

import { BsGithub, BsLinkedin } from "react-icons/bs"

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/Mohamed-El-Nahas?tab=repositories">
            <BsGithub />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/mohamed-el-nahas-87b224248">
            <BsLinkedin />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia