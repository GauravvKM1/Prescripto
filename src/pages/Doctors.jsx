import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams(); // Get the speciality from URL
  const [filterDoc, setFilterDoc] = useState([]); // State to hold filtered doctors
  const navigate = useNavigate(); // Navigation hook
  const { doctors } = useContext(AppContext); // Context to get doctors

  // Function to filter doctors based on speciality
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality)); // Filter if speciality exists
    } else {
      setFilterDoc(doctors); // Otherwise show all doctors
    }
  };

  useEffect(() => {
    applyFilter(); // Apply filter whenever doctors or speciality change
  }, [doctors, speciality]);

  return (
    <div className="flex">
      {/* Filter Bar */}
      <div className="flex flex-col gap-4 text-sm text-gray-600 w-1/4 p-4 border-r border-gray-300">       <p className='text-gray-600'>Browse through the doctors specialist.</p>
        <p
          onClick={()=>speciality==='General physician'? navigate('/doctors'):navigate('/doctors/General physician')}
          className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer }"
        >
          General Physician
        </p>
        <p
          onClick={()=>speciality==='Gynacologist'? navigate('/doctors'):navigate('/doctors/Gynecologist')}
          className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
        >
          Gynecologist
        </p>
        <p
          onClick={()=>speciality==='Dermatologist'? navigate('/doctors'):navigate('/doctors/Dermatologist')}
          className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
        >
          Dermatologist
        </p>
        <p
         onClick={()=>speciality==='Pediatrician'? navigate('/doctors'):navigate('/doctors/Pediatrician')}
          className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
        >
          Pediatrician
        </p>
        <p
          onClick={()=>speciality==='Neurologist'? navigate('/doctors'):navigate('/doctors/Neurologist')}
          className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
        >
          Neurologist
        </p>
        <p
          onClick={()=>speciality==='Gastroenterologist'? navigate('/doctors'):navigate('/doctors/Gastroenterologist ')}
          className="w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
        >
          Gastroenterologist
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="w-3/4 p-4 grid grid-cols-auto gap-4 gap-y-6">
        {/* Mapping through filtered doctors and displaying them */}
        {filterDoc.map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-blue-50 w-full h-48 object-cover" src={item.image} alt={item.name} />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
