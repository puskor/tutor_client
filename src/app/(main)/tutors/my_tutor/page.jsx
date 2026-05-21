import EmptyCard from '@/components/share/Empty';
import BookingCard from '@/components/tutors/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

export const metadata = {
    title: "all tutor",
    description: "Welcome to my website",
};


const MyTutor = async () => {

    const path = "tutor";
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user_id = session?.user?.id;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    // console.log(token)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/${user_id}`, {
        headers: {
            authentication: `Bearer ${token}`
        }
    })
    const data = await res.json();

    return (
        <div className='container mx-auto my-4 space-y-4'>
            <h1 className='text-3xl font-bold pb-3 text-center border-b-2 text-green-500'>My Added Tutors - <span className='text-black'>{data.length}</span></h1>
            {
                data.length > 0 ? (data.map((item) => {
                    return <BookingCard key={item._id} path={path} item={item} />
                })) : <EmptyCard />
            }
        </div>
    );
};

export default MyTutor;