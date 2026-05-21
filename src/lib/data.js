

export const TutorData = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor`)
    const data = await res.json();
    return data;
}


export const Booking = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`)
    const data = await res.json();
    return data;
}


