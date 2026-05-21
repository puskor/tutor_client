import Link from 'next/link';
import React from 'react';

const EmptyCard = () => {
    return (
        <div className="h-[70vh] w-full flex rounded-2xl items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 ">

            <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl rounded-3xl p-10 max-w-xl text-center">

                <h1 className="text-4xl font-bold text-gray-900">
                    Nothing In Hear
                </h1>

                <p className="mt-3 text-gray-700">
                    Big think , Big success
                </p>

                <Link href={"/"}>
                    <button className="mt-6 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-700 transition">
                        GO Home
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default EmptyCard;