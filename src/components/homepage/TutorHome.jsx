import React from 'react';
import Tutor_card from '../tutors/Tutor_card';

const TutorHome = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor_home`)
    const data = await res.json();

    const goTutor = "goTutor";

    return (
        <div className='p-5'>
            <h1 className="text-center font-bold text-2xl bg-[#1c4874] text-white  p-2 border-4 mb-4">MOST POPULAR</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
                {
                    data.map((item) => {
                        return <Tutor_card key={item._id} item={item} goTutor={goTutor}/>
                    })
                }
            </div>
        </div>
    );
};

export default TutorHome;