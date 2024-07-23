"use client";

import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/contact");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Parse JSON here
      console.log("Data received:", data.res);
      setData(data); // Return parsed data
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error to handle it in the caller
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Messages</h1>
    </div>
  );
};

export default AdminPage;
