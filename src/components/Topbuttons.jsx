import React from 'react'

function Topbuttons({setQuery}) {
 const cities = [
    {
        id:1,
        title:"Delhi"
    },
    {
        id:2,
        title:"Mumbai"
    },
    {
        id:3,
        title:"Kolkata"
    },
    {
        id:4,
        title:"Lucknow"
    },
    {
        id:5,
        title:"Patna"
    },

 ]



  return (
    <div className="flex items-center justify-around my-6">
        {cities.map((city)=>(
            <button key={city.id} onClick={()=>setQuery({q: city.title})} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
        </div>
  )
}

export default Topbuttons