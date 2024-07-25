"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const AdminPage = () => {
  const [password, setPassword] = useState<any>();

  const [messages, setMessages] = useState<any>();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password == process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthenticated(true);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/contact");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Parse JSON here
      console.log("Data received:", data);
      setMessages(data.messages); // Return parsed data
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error to handle it in the caller
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!authenticated)
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
        />
      </form>
    );

  return (
    <div>
      <h1 className="text-center text-xl font-bold">Messages</h1>
      {messages?.map((message: any, index: number) => (
        <div key={index}>
          {" "}
          <p>
            {index + 1}. {message.firstName} {message.lastName}{" "}
          </p>{" "}
          <p>{message.email}</p>
          <p>Message: {message.message}</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
