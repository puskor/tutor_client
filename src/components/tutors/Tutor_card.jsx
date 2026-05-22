"use client"
import { authClient, useSession } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Rocket } from "@gravity-ui/icons";
import Link from "next/link";

const Tutor_card = ({ item, goTutor }) => {
    // console.log(item)
    const [studentName, setStudentName] = useState("");
    const [phone, setPhone] = useState("");

    const router = useRouter();
    const { data: session, error } = authClient.useSession()
    const user_id = session?.user?.id;




    const handelBooking = async () => {
        const bookingData = {
            image: item.image,
            teaching_mode: item.teaching_mode,
            name: item.name,
            subject: item.subject,
            location: item.location,
            start_time: item.start_time,
            end_time: item.end_time,
            fee: item.fee,
            slot: item.slot,
            tutor_id: item._id,
            user_id: user_id,
            student_name: studentName,
            phone: phone,
            email: session?.user?.email,
        }
        {
            user_id
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json()

        if (data.acknowledged) {
            toast.success("Tutor added successfully")
        }
        else {
            toast.error("Something wrong....")
        }
        redirect("/tutors/booking")
        // console.log(bookingData);
    }

    const handelRoute = () => {
        redirect("/tutors")
    }




    const valid = () => {
        if (!session) {
            toast.error("Please login first");
            router.push("/login");
            return;
        }

        handelBooking();
    };



    return (
        <div className="max-w-80 mx-auto w-full rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">

            {/* Image */}
            <div className="relative">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                />

                <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full capitalize">
                    {item.teaching_mode}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">

                <h2 className="text-xl font-bold text-gray-900 ">{item.name.toUpperCase()}</h2>

                <p className="text-sm text-gray-500 capitalize">
                    {item.subject} Tutor
                </p>

                {/* Info badges */}
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                        📍 {item.location}
                    </span>

                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                        ⏰ {item.start_time} - {item.end_time}
                    </span>
                </div>

                {/* Fee + Slot */}
                <div className="mt-4 flex justify-between items-center">

                    <div>
                        <p className="text-sm text-gray-500">Fee</p>
                        <p className="text-lg font-bold text-green-600">
                            ৳{item.fee} <span className="text-black">/hr</span>
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Slots</p>
                        <p className="text-lg font-bold">{item.slot > 0 ? item.slot : <span>Not available slot</span>}</p>
                    </div>

                </div>


                {
                    goTutor ? <div>
                        <Link href={"/tutors"}>
                            <Button className="mt-2 w-full bg-black text-white py-2.5 rounded-xl hover:bg-gray-800 transition">Book Now</Button>
                        </Link>

                    </div> :
                        <Modal>
                            {
                                ! session ? <Link href={"/login"}>
                                    <Button isDisabled={item.slot <= 0} className="mt-2 w-full bg-black text-white py-2.5 rounded-xl hover:bg-gray-800 transition">Book Now</Button>
                                </Link> :
                                    <Button isDisabled={item.slot <= 0} className="mt-2 w-full bg-black text-white py-2.5 rounded-xl hover:bg-gray-800 transition">Book Now</Button>
                            }

                            {/* <Button isDisabled={item.slot <= 0} className="mt-2 w-full bg-black text-white py-2.5 rounded-xl hover:bg-gray-800 transition">Book Now</Button> */}
                            <Modal.Backdrop>
                                <Modal.Container>
                                    <Modal.Dialog className="sm:max-w-[340px] md:max-w-[500px]">
                                        <Modal.CloseTrigger />
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                            handelBooking();
                                        }} className="max-w-3xl mx-auto  space-y-2">
                                            <h2 className="text-xl font-bold">Booking Form</h2>

                                            {/* Student Name */}
                                            <div>
                                                <label className="block ">Student Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="studentName"
                                                    onChange={(e) => setStudentName(e.target.value)}
                                                    placeholder="Enter student name"
                                                    className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="block mb-1 ">Phone</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    placeholder="Enter phone number"
                                                    className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            

                                            {/* Tutor ID Auto Filled */}
                                            <div>
                                                <label className="block mb-1 ">Tutor ID</label>
                                                <input
                                                    type="text"
                                                    name="tutorId"
                                                    value={item._id}
                                                    readOnly
                                                    className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
                                                />
                                            </div>

                                            {/* Tutor Name Auto Filled */}
                                            <div>
                                                <label className="block mb-1 ">Tutor Name</label>
                                                <input
                                                    type="text"
                                                    name="tutorName"
                                                    value={item.name}
                                                    readOnly
                                                    className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
                                                />
                                            </div>

                                            {/* Student Email Auto Filled */}
                                            <div>
                                                <label className="block mb-1 ">Student Email</label>
                                                <input
                                                    type="email"
                                                    name="studentEmail"
                                                    value={session?.user?.email}
                                                    readOnly
                                                    className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
                                                />
                                            </div>

                                            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                                                Submit
                                            </button>
                                        </form>
                                    </Modal.Dialog>
                                </Modal.Container>
                            </Modal.Backdrop>
                        </Modal>

                }



            </div>
        </div >
    );
};

export default Tutor_card;