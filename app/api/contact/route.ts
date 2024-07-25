// app/api/route.js 👈🏽

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

// To handle a POST request to /api
export async function GET() {
  const messages = await prisma.message.findMany();
  return NextResponse.json({ messages });
}

export async function POST(request: NextRequest) {
  // Do whatever you want
  const body = await request.json();
  console.log(body);

  const { email, firstName, lastName, message } = body;

  const newMessage = await prisma.message.create({
    data: {
      email: email,
      firstName: firstName,
      lastName: lastName,
      message: message,
    },
  });
  return NextResponse.json(newMessage, { status: 200 });
}

// Same logic to add a `PATCH`, `DELETE`...
