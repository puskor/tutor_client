"use client";

import { motion } from "framer-motion";
import { BiSupport } from "react-icons/bi";
import { FaAtom, FaBalanceScale, FaBattleNet } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
    return (
        <section className="py-16 px-6 m-3 border-2 container mx-auto rounded-2xl bg-gray-50 dark:bg-blue-950">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-10"
            >
                Why Choose Us
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-4 gap-6 text-center"
            >
                <motion.div variants={item} className="border-2 p-2 rounded-sm bg-gray-100 dark:text-black">
                    <FaBattleNet className="w-3xs text-7xl text-green-600 my-2"/>
                    <h3 className="font-semibold text-xl">Expert Tutors</h3>
                    <p>Learn from industry-level experienced mentors.</p>
                </motion.div>

                <motion.div variants={item} className="border-2 p-2 rounded-sm bg-gray-100 dark:text-black">
                    <FaBalanceScale className="w-3xs text-7xl text-green-600 my-2"/>
                    <h3 className="font-semibold text-xl">Affordable</h3>
                    <p>High-quality learning at low cost.</p>
                </motion.div>

                <motion.div variants={item} className="border-2 p-2 rounded-sm bg-gray-100 dark:text-black">
                    <MdAccessTime className="w-3xs text-7xl text-green-600 my-2"/>
                    <h3 className="font-semibold text-xl">Flexible Time</h3>
                    <p>Study anytime, anywhere.</p>
                </motion.div>

                <motion.div variants={item} className="border-2 p-2 rounded-sm bg-gray-100 dark:text-black">
                    <BiSupport className="w-3xs text-7xl text-green-600 my-2"/>
                    <h3 className="font-semibold text-xl">Support</h3>
                    <p>We help you even after classes.</p>
                </motion.div>
            </motion.div>
        </section>
    );
}