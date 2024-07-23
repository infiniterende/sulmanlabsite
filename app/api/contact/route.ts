// app/api/route.js 👈🏽

import { NextResponse } from "next/server";

// To handle a POST request to /api
export async function GET(request: Request) {
  let response = NextResponse.next();
  let data = response.cookies.getAll();
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  // Do whatever you want
  console.log(request);
  const body = await request.json();
  console.log(body);

  const { email, firstName, lastName, message } = body;

  const json = JSON.stringify({ email, firstName, lastName, message });
  console.log(json);
  return NextResponse.json({ res: json }, { status: 200 });
}

// Same logic to add a `PATCH`, `DELETE`...
