import React from "react";

import { UpdateTutor } from "./UpdateTutor";
import { TutorDelete } from "./TutorDelete";

const BookingCard = ({ path, item }) => {
    // console.log(item)


    return (
        <div className="w-full max-w-2xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex">

            {/* Left Image */}
            <div className="w-[140px] h-full">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Middle Content */}
            <div className="flex-1 p-4 flex flex-col justify-between">

                {/* Top Info */}
                <div>
                    <h2 className="text-xl font-bold text-gray-900 uppercase">
                        {item.name}
                    </h2>

                    <p className="text-sm text-gray-500 capitalize">
                        {item.subject} • {item.teaching_mode}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                        📍 {item.location}
                    </p>

                    <p className="text-xs text-gray-400">
                        ⏰ {item.start_time} - {item.end_time}
                    </p>
                </div>

                {/* Bottom Info */}
                <div className="flex gap-6 mt-3">
                    <div>
                        <p className="text-xs text-gray-500">Fee</p>
                        <p className="font-bold text-green-600">৳{item.fee}</p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">Slot</p>
                        <p className="font-bold">{item.slot}</p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="text-xs text-gray-700">{item.email}</p>
                    </div>
                </div>
            </div>

            {/* Right Action Buttons */}
            <div className="w-[110px] bg-gray-50 border-l flex flex-col justify-center items-center gap-2 p-3">
                {
                    path != "booking" &&  <UpdateTutor item={item}/>


                }
                <TutorDelete path={path} tutorId={item._id}/>

            </div>

        </div>
    );
};

export default BookingCard;