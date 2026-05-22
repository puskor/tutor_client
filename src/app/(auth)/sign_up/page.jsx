"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Sign_up = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image
        })

        if (data) {
            toast.success("Sign up Successfully")
            redirect("/")
        }
        if (error) {
            toast.error(`${error.message}`)
        }
        // console.log(data);
        // console.log(user);
    };
    const HandelSignInGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    const [show, setShow] = useState(true);

    return (
        <div className="max-w-6xl mx-auto my-20 card ">
            <h1 className="text-center font-bold text-2xl">Sign up</h1>
            <hr />
            <Form className="flex w-96 flex-col gap-4 " onSubmit={onSubmit}>

                <TextField
                    isRequired
                    minLength={3}
                    name="name"
                    type="text"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>

                <TextField
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
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="image"
                    type="text"
                >
                    <Label>image url</Label>
                    <Input placeholder="Give your image_url" />
                    <FieldError />
                </TextField>


                <TextField
                    className={"relative"}
                    isRequired
                    minLength={8}
                    name="password"
                    // type="password"
                    type={show ? "password" : "text"}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <button type="button" className="absolute left-88 top-9" onClick={() => setShow(!show)}>{!show ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>

                <Button type="submit " className={"w-full bg-[#0b2e52]"}>
                    Sign up
                </Button>
            </Form>
            <div className="flex justify-center items-center gap-3">
                <Separator />
                <div className="whitespace-nowrap"> Or sign up with </div>
                <Separator />
            </div>
            <div>
                <Button
                    onClick={HandelSignInGoogle}
                    variant="outline"
                    className={"w-full rounded-none"}
                >
                    <FcGoogle /> Sign up with Google
                </Button>
            </div>
            <div className="flex justify-center items-center gap-3">
                <Separator />
                <div className="whitespace-nowrap">  </div>
                <Separator />
            </div>
            <ul className="text-center flex justify-center gap-2">
                <h2>If you have an account</h2><Link href={"/login"} className="text-blue-400">Login</Link>
            </ul>
        </div>
    );
};

export default Sign_up;