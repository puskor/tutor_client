"use client";


import { authClient } from "@/lib/auth-client";
import { userToken } from "@/lib/data";
import { Button, Description, Dropdown, FieldError, Form, Header, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Add_tutor = () => {

    const { data: session } = authClient.useSession();



    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const tutorData = Object.fromEntries(formData.entries())
        const user_id = session?.user?.id;


        const adding_data = {
            ...tutorData,
            user_id: user_id
        }

        const { data: tokenData } = await authClient.token()
        // console.log(tokenData,"-------------");


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authentication: `Bearer ${tokenData.token}`
            },
            body: JSON.stringify(adding_data),
        })

        const data = await res.json()
        console.log(data, "adding tutor data");

        if (data.acknowledged) {
            toast.success("Tutor added successfully")
            redirect("/tutors")
        }
        else {
            toast.error("Something wrong....")
        }


    };

    return (
        <div className="max-w-6xl mx-auto my-10 card ">
            <h1 className="text-center font-bold text-2xl">ADD TUTOR</h1>
            <hr />
            <Form className="flex w-90 md:w-3xl flex-col gap-4 mx-auto" onSubmit={onSubmit}>
                <div className="md:flex gap-4">
                    <TextField
                        className={"w-full"}
                        isRequired
                        minLength={3}
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Password must be at least 8 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter tutor name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        type="text"
                        className={"w-full"}
                    >
                        <Label>Teaching method</Label>
                        {/* <Input placeholder="Enter Tutor Location" /> */}
                        <select className="bg-gray-100 p-2 rounded-2xl text-blue-700 text-center" name="subject" id="">
                            <option value="mathematics">Mathematics</option>
                            <option value="english">English</option>
                            <option value="physics">Physics</option>
                            <option value="ICT">ICT</option>
                        </select>
                        <FieldError />
                    </TextField>
                </div>

                <div className="flex gap-4">
                    <TextField
                        className={"w-full"}
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Tutor Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        className={"w-full"}

                        isRequired
                        name="image"
                        type="text"
                    >
                        <Label>image url</Label>
                        <Input placeholder="Give tutor  image_url" />
                        <FieldError />
                    </TextField>


                </div>


                <div className="md:flex gap-4">
                    <TextField
                        isRequired
                        name="fee"
                        type="number"
                        className={"w-full"}
                    >
                        <Label>Hourly fee</Label>
                        <Input placeholder="Enter tutor Hourly fee" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="slot"
                        type="number"
                        className={"w-full"}
                    >
                        <Label>Total slot</Label>
                        <Input placeholder="Enter  Total slot" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="location"
                        type="text"
                        className={"w-full"}
                    >
                        <Label>Location</Label>
                        <Input placeholder="Enter Tutor Location" />
                        <FieldError />
                    </TextField>
                </div>


                <div className="md:flex gap-4">
                    <TextField
                        isRequired
                        name="start_time"
                        type="time"
                        className={"w-full"}
                    >
                        <Label>Start time</Label>
                        <Input placeholder="Enter start time" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="end_time"
                        type="time"
                        className={"w-full"}
                    >
                        <Label>End time</Label>
                        <Input placeholder="Enter  End time" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        type="text"
                        className={"w-full"}
                    >
                        <Label>Teaching method</Label>
                        {/* <Input placeholder="Enter Tutor Location" /> */}
                        <select className="bg-gray-100 p-2 rounded-2xl text-center text-blue-700" name="teaching_mode" id="">
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                            <option value="both">Both</option>

                        </select>
                        <FieldError />
                    </TextField>
                </div>

                <Button type="submit" className={"w-full bg-[#0b2e52]"}>
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Add_tutor;