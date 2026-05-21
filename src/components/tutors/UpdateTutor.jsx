"use client";

import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { AlertDialog } from "@heroui/react";
import { error } from "better-auth/api";
import toast from "react-hot-toast";

export function UpdateTutor({ item }) {

    const handelUpdateTutor = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const updatedTutor = Object.fromEntries(formData.entries())

        console.log(updatedTutor);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/${item?._id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedTutor),
          }
        );

        const data = await res.json();
        window.location.reload();
        if(data ) toast.success("Tutor data update successfully")
        if(error) toast.error("Something is wrong")
    };

    return (
        <AlertDialog>
            <Button
                className="text-green-500 border-green-500 px-8 font-bold rounded-sm"
                variant="outline"
            >
                Edit
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="w-[90vw] md:mt-5 max-w-4xl">
                        <AlertDialog.CloseTrigger />
                        <h1 className="text-center text-2xl">Update Tutor Data</h1>
                        <Form
                            className="flex w-90 md:w-3xl flex-col gap-4 mx-auto"
                            onSubmit={handelUpdateTutor}
                        >

                            {/* Name + Subject */}
                            <div className="md:flex gap-4">
                                <TextField
                                    className="w-full"
                                    isRequired
                                    name="name"
                                    defaultValue={item?.name}
                                >
                                    <Label>Name</Label>
                                    <Input placeholder="Enter tutor name" />
                                    <FieldError />
                                </TextField>

                                <div className="w-full">
                                    <Label>Subject</Label>
                                    <select
                                        name="subject"
                                        defaultValue={item?.subject}
                                        className="bg-gray-100 p-2 rounded-2xl text-blue-700 text-center w-full"
                                    >
                                        <option value="mathematics">Mathematics</option>
                                        <option value="english">English</option>
                                        <option value="physics">Physics</option>
                                        <option value="ICT">ICT</option>
                                    </select>
                                </div>
                            </div>

                            {/* Email + Image */}
                            <div className="md:flex gap-4">
                                <TextField
                                    className="w-full"
                                    isRequired
                                    name="email"
                                    type="email"
                                    defaultValue={item?.email}
                                >
                                    <Label>Tutor Email</Label>
                                    <Input />
                                    <FieldError />
                                </TextField>

                                <TextField
                                    className="w-full"
                                    isRequired
                                    name="image"
                                    defaultValue={item?.image}
                                >
                                    <Label>Image URL</Label>
                                    <Input placeholder="Image url" />
                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Fee + Slot + Location */}
                            <div className="md:flex gap-4">
                                <TextField
                                    className="w-full"
                                    isRequired
                                    name="fee"
                                    type="number"
                                    defaultValue={String(item?.fee)}
                                >
                                    <Label>Hourly Fee</Label>
                                    <Input />
                                    <FieldError />
                                </TextField>

                                <TextField
                                    className="w-full"
                                    isRequired
                                    name="slot"
                                    type="number"
                                    defaultValue={String(item?.slot)}
                                >
                                    <Label>Total Slot</Label>
                                    <Input />
                                    <FieldError />
                                </TextField>

                                <TextField
                                    className="w-full"
                                    isRequired
                                    name="location"
                                    defaultValue={item?.location}
                                >
                                    <Label>Location</Label>
                                    <Input />
                                    <FieldError />
                                </TextField>
                            </div>

                            {/* Time + Teaching mode */}
                            <div className="md:flex gap-4">
                                <TextField
                                    className="w-full"
                                    isRequired
                                    name="start_time"
                                    type="time"
                                    defaultValue={item?.start_time}
                                >
                                    <Label>Start Time</Label>
                                    <Input />
                                    <FieldError />
                                </TextField>

                                <TextField
                                    className="w-full"
                                    isRequired
                                    name="end_time"
                                    type="time"
                                    defaultValue={item?.end_time}
                                >
                                    <Label>End Time</Label>
                                    <Input />
                                    <FieldError />
                                </TextField>

                                <div className="w-full">
                                    <Label>Teaching Mode</Label>
                                    <select
                                        name="teaching_mode"
                                        defaultValue={item?.teaching_mode}
                                        className="bg-gray-100 p-2 rounded-2xl text-center text-blue-700 w-full"
                                    >
                                        <option value="online">Online</option>
                                        <option value="offline">Offline</option>
                                        <option value="both">Both</option>
                                    </select>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#0b2e52]"
                            >
                                Update Tutor
                            </Button>
                        </Form>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}