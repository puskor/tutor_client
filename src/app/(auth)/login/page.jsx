"use client";

import { authClient, signIn } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const [show,setShow] = useState(true);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await signIn.email({
            email: user.email,
            password: user.password
        })


        if (data) {
            toast.success("login successfully")
            redirect("/")
        }
        if (error) {
            toast.error(`${error.message}`)
        }
        // console.log(data);
        console.log(error.message);
        // console.log(user);
    };

    const HandelSignInGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="max-w-6xl mx-auto my-20 card ">
            <h1 className="text-center font-bold text-2xl">Login</h1>
            <hr />
            <Form className="flex w-96 flex-col gap-4 " onSubmit={onSubmit}>
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
                    minLength={8}
                    name="password"
                    className={"relative"}
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
                    <Input placeholder="Enter your password"  />
                    <button type="button" className="absolute left-88 top-9" onClick={()=>setShow(!show)}>{show ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button className={"bg-[#0b2e52] w-full"} type="submit ">
                        Login
                    </Button>
                    <Button variant="secondary">
                        Forget Password
                    </Button>
                </div>
            </Form>
            <div className="flex justify-center items-center gap-3">
                <Separator />
                <div className="whitespace-nowrap"> Or sign in with </div>
                <Separator />
            </div>
            <div>
                <Button
                    onClick={HandelSignInGoogle}
                    variant="outline"
                    className={"w-full rounded-none"}
                >
                    <FcGoogle /> Sign in with Google
                </Button>
            </div>
            <div className="flex justify-center items-center gap-3">
                <Separator />
                <div className="whitespace-nowrap">  </div>
                <Separator />
            </div>
            <ul className="text-center flex justify-center gap-2">
                <h2>If you have no account</h2><Link href={"/sign_up"} className="text-blue-400">Register</Link>
            </ul>
        </div>
    );
};

export default Login;