import React from 'react';
import Tutor_card from './Tutor_card';
import { TutorData } from '@/lib/data';
import EmptyCard from '../share/Empty';

const All_tutors = async () => {
    const data = await TutorData();
    return (
        <div className='container mx-auto my-10'>
            {
                data.length > 0 ? <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {(data.map((item) => {
                        return <Tutor_card key={item._id} item={item} />
                    }))}
                </div> : (<EmptyCard />)
            }

        </div>
    );
};

export default All_tutors;

