import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  gap-14 my-10 mt-10 text-sm'>
            {/* first col */}
            <div>
              <img className='mb-5 w-40' src={assets.logo}  alt=''/>
              <p className='w-full md:w-2/3 text-gray-600 leading-6'>Our platform makes booking medical appointments easy, connecting you with trusted healthcare professionals. Whether for routine check-ups or specialist care, our user-friendly interface lets you schedule appointments effortlessly, ensuring your health is in good hands.
</p>
            </div>

             {/* 2nd col */}

                <div>
                 <p className='text-xl font-medium mb-5'>COMPANY</p>
                 <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                 </ul>
                </div>

                {/* 3rd col */}

                <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-9582341073</li>
                    <li>gm3186126@gmail.com</li>
                </ul>
                </div>
        </div>

        {/*Cpyright text  */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024 @ Gaurav.dev - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer