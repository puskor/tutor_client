"use client"
import Link from 'next/link';
import React from 'react';

const Not_found = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0B2E52] via-[#123B68] to-[#0B2E52] flex items-center justify-center px-6">

            <div className="text-center max-w-2xl">

                {/* 404 */}
                <h1 className="text-7xl md:text-9xl font-extrabold text-white drop-shadow-lg">
                    404
                </h1>
                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-200 text-lg leading-relaxed">
                    Sorry, the page you are looking for doesn’t exist or may
                    have been moved.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <button className="bg-white text-[#0B2E52] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
                            Go Home
                        </button>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Decorative Blur */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-300/20 blur-3xl rounded-full"></div>

            </div>
        </div>
    );
};

export default Not_found;