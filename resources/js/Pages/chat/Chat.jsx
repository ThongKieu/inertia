import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function Chat(auth) {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState("");
    const [chatContent, setChatContent] = useState([]);

    useEffect(() => {

        const ip_address = window.location.host;
		console.log(window.location.host);
        const socket_port = "3000";
        const newSocket = io(ip_address + ":" + socket_port);
        setSocket(newSocket, {secure: true});
        console.log(newSocket, ip_address, socket_port);
        return () => {
            newSocket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on("sendChatToClient", (message) => {
                setChatContent((prevChat) => [...prevChat, message]);
            });
        }
    }, [socket]);

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (socket) {
                socket.emit("sendChatToServer", message);
                setMessage("");
            }
        }
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="chat" />
            <div className="w-[80%] mx-auto mt-2 ">

                <div className="flex flex-col justify-between flex-1 h-[91vh] border border-gray-800 p:2 sm:p-6 rounded-md">
                    <div className="flex justify-between py-3 border-b-2 border-gray-200 sm:items-center">
                        <div className="relative flex items-center space-x-4">
                            <div className="relative">
                                <span className="absolute bottom-0 right-0 text-green-500">
                                    <svg width={20} height={20}>
                                        <circle
                                            cx={8}
                                            cy={8}
                                            r={8}
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                                <img
                                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                    alt="test"
                                    className="w-10 h-10 rounded-full sm:w-16 sm:h-16"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <div className="flex items-center mt-1 text-2xl">
                                    <span className="mr-3 text-gray-700">
                                        Tài Khoản Test
                                    </span>
                                </div>
                                <span className="text-lg text-gray-600">
                                    Junior Developer
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center w-10 h-10 text-gray-500 transition duration-500 ease-in-out border rounded-lg hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center w-10 h-10 text-gray-500 transition duration-500 ease-in-out border rounded-lg hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center w-10 h-10 text-gray-500 transition duration-500 ease-in-out border rounded-lg hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        id="messages"
                        className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2"
                    >
                        <div className="chat-message">
                            <div className="flex items-end">
                                <div className="flex flex-col items-start order-2 max-w-xs mx-2 space-y-2 text-xs">
                                    <div>
                                        <ul className=" chat-content">
                                            {chatContent.map((msg, index) => (
                                                <li className="px-4 py-2 mt-1 text-gray-600 bg-gray-300 rounded-lg rounded-bl-none " key={index}>{msg}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                    alt="My profile"
                                    className="order-1 w-6 h-6 rounded-full"
                                />
                            </div>
                        </div>
                        <div className="chat-message">
                            <div className="flex items-end justify-end">
                                <div className="flex flex-col items-end order-1 max-w-xs mx-2 space-y-2 text-xs">
                                    <div>
                                        <span className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg rounded-br-none ">
                                            Your error message says permission
                                            denied, npm global installs must be
                                            given root privileges.
                                        </span>
                                    </div>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
                                    alt="My profile"
                                    className="order-2 w-6 h-6 rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 pt-4 mb-2 border-t-2 border-gray-200 sm:mb-0">
                        <div className="relative flex">
                            <input
                                type="text"
                                placeholder="Nhập nội dung!"
                                className="w-full py-3 pl-12 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md focus:outline-none focus:placeholder-gray-400"
                                id="chatInput"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <div className="absolute inset-y-0 right-0 items-center hidden sm:flex">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center px-4 py-3 text-white transition duration-500 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none"
                                    onClick={handleKeyPress}
                                >
                                    <span className="font-bold">Gửi</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-6 h-6 ml-2 transform rotate-90"
                                    >
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    );
}

export default Chat;
