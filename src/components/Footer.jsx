import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
      <div className='screen-max-width '>

        <div className='bg-nutral-700 my-5 h-[1px] w-full' />
        <div className='flex md:flex-row flex-col md:items-center justify-between'>
          <p className='font-semibold text-gray text-xs'>
            Copyright © 2026 Apple-By-Unity11 Inc. All rights reserved.
          </p>
          <div className='flex flex-wrap'>
            {
              footerLinks.map((link, i) => (
                <p key={link} className='font-semibold text-gray text-xs'>
                  {link}{' '}
                  {i !== footerLinks.length - 1 && <span className='mx-2'> | </span>}
                </p>
              ))
            }
          </div>
        </div>

        {/* Unity Logo Footer */}
        <div className='flex flex-col justify-center items-center mt-10 pb-5 gap-2'>
          <a href="https://www.unity11solutions.com" target="_blank" rel="noopener noreferrer" className='flex items-center cursor-pointer'>
            <img
              src="/assets/unity/uity11-logo.png"
              alt="Unity Logo"
              className="unity-rotate-logo"
            />
            <img
              src="/assets/unity/unity11-txt-logo.png"
              alt="Unity Text Logo"
              className="unity-text-logo ml-1"
            />
          </a>
          <span className='text-gray text-xs font-semibold uppercase tracking-wider'>
            Designed & Developed by
          </span>
        </div>

      </div>

    </footer>
  )
}

export default Footer
