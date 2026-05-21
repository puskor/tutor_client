import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0B2E52] text-white">
            <div className="max-w-7xl mx-auto px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & About */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">LearnHub</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Empowering students with quality learning, expert tutors,
                            and interactive educational services.
                        </p>
                    </div>

                    {/* Learning Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Learning Services
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <a href="#" className="hover:text-blue-300 transition">
                                    Online Courses
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-300 transition">
                                    Private Tutoring
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-300 transition">
                                    Skill Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-300 transition">
                                    Study Materials
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Contact
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li>Email: support@learnhub.com</li>
                            <li>Phone: +880 1234-567890</li>
                            <li>Location: Dhaka, Bangladesh</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition"
                            >
                                Facebook
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 transition"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-300 text-sm">
                    © 2026 LearnHub. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;