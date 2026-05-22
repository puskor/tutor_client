"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Review() {
    return (
        <section className="py-16 px-6 border-2 container mx-auto m-5 rounded-2xl bg-gray-50 dark:bg-blue-950">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-10 dark:text-white"
            >
                WHAT STUDENTS SAY
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { text: "Best learning experience! I improved a lot.", name: "Rahim" },
                    { text: "Very affordable and helpful tutors.", name: "Sumi" },
                    { text: "Got confidence in coding after joining.", name: "Arif" },
                ].map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="p-4 border rounded-lg shadow-sm flex gap-2 items-center text-black bg-gray-100"
                    >
                        <Image alt="review" width={150} height={150} src={"/assets/undraw_text-messages_p6bk.svg"}></Image>
                        <div>
                            <p>"{t.text}"</p>
                            <h4 className="mt-2 font-semibold">— {t.name}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}