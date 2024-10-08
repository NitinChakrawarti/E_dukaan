import React from "react";
import { useState } from "react";
import Dash from "./dash.js";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [credentials, setcredentials] = useState('')
    const admin = [

        {
            user: "prerit",
            pass: "p1234"
        },
        {
            user: "nitin",
            pass: "n1234",
        },
        {
            user: "sen",
            pass: "s1234"
        }
    ];


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (username === admin[0].user && password === admin[0].pass) {
    //         setIsLogged(true);
    //     } else {
    //         alert("Invalid Credentials try again ");
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        admin.map((users) => {
            if (username === users.user && password === users.pass) {
                setIsLogged(true);
            }
            else {
                setUsername('')
                setPassword('')
            }
        });


        if(!isLogged){
            // alert("Invalid Credentials try again ");
            setUsername('')
            setPassword('')
            setcredentials("*Invalid Credentials try again ")
        }
    };

    return (
        // Login Page
        <>
            {isLogged === false ? <div className="flex flex-row">
                <div className="flex justify-center w-full">
                    <div className="right w-[45%]  ">
                        <div className="flex flex-col items-center h-screen">
                            <div className="heading text-4xl font-bold pt-24 pb-24">
                                <h1>Admin Login</h1>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="pb-6">
                                    <label className="text-lg font-bold flex pb-3">Username</label>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        className="w-[300px] h-[40px] border-2 border-gray-300 rounded-md pl-2 required:"
                                    />
                                </div>
                                <div className="pt-4">
                                    <label className="text-lg font-bold flex pb-3">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-[300px] h-[40px] border-2 border-gray-300 rounded-md pl-2 required:"
                                    />
                                </div>
                                <div> <p className="text-red-700">{credentials}</p></div>


                                <button
                                    type="submit"
                                    className="w-[300px] h-[40px] bg-blue-500 text-white rounded-md mt-6"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                : <Dash />}

        </>
    );
};
