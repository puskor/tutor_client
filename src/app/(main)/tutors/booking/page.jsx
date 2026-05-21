import EmptyCard from '@/components/share/Empty';
import BookingCard from '@/components/tutors/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

export const metadata = {
    title: "tutor booking",
    description: "Welcome to my website",
};


const Booking = async () => {

    const path = "booking"

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token, "token------")



    const user_id = session?.user?.id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user_id}`, {
        headers: {
            authentication: `Bearer ${token}`
        }
    })
    const data = await res.json();
    return (
        <div className='container mx-auto my-5 space-y-4'>
            <h1 className='text-3xl font-bold text-center border-b-2 pb-3 text-green-500'>My Booking Tutors - <span className='text-black'>{data.length}</span></h1>
            {
                data.length > 0 ? (data.map((item) => {
                    return <BookingCard key={item._id} path={path} item={item} />
                })) : <EmptyCard />
            }
        </div>
    );
};

export default Booking;