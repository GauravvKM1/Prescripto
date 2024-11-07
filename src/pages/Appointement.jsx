import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; // Make sure you import AppContext
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams(); // Get the doctor's ID from the URL
  const { doctors } = useContext(AppContext); // Get the doctors from context
  const [docInfo, setDocInfo] = useState(null); // State to hold doctor info

  // Function to fetch doctor information based on docId
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId); // Find the doctor
    setDocInfo(docInfo); // Set the doctor info
    console.log(docInfo); // Log the found doctor info
  };

  useEffect(() => {
    fetchDocInfo() // Fetch doctor info when doctors or docId change
  }, [doctors, docId]);

  return docInfo &&(
    <div className="p-4">
      {/* doc details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt='' />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px]  sm:mt-0   '>
           {/* docInfo name,degree,experinece ......*/}
           <p className='flex items-center gap-2 text-2xl font-medium  text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt=''/>
           </p>

           <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree}-{docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
           </div>
           <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
            About<img src={assets.info_icon} alt='' />
           </p>
           <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
        </div>
      </div>
    </div>
  );
};

export default Appointment;