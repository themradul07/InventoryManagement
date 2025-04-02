"use server"
import { connectDB } from "@/config/mongoose-connection";
import User from "@/models/user-model";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { generatetoken } from "@/utils/jwt";




export async function POST(request) {
    await connectDB();
    const body = await request.json();
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("token");
    const token = tokenCookie ? tokenCookie.value : null;
    console.log("Here is the token" , token);


    // Check if the user exists
    const user = await User.findOne({ email: body.email });
    if (!user) {
        return new Response(
            JSON.stringify({ success: false, msg: "User not found" }),
            { status: 404, headers: { "Content-Type": "application/json" } }
        );
    }

    // Compare password securely
    const isMatch = await bcrypt.compare(body.password, user.password);

    if (isMatch) {

        cookieStore.set("token", generatetoken({ email: user.email, id: user._id }), {
            httpOnly: true, // Prevents JavaScript access (for security)
            // Expires in 1 hour
            path: "/",      // Available throughout the site
        });


        return new Response(


            JSON.stringify({ success: true, msg: "Login Successful" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } else {
        return new Response(
            JSON.stringify({ success: false, msg: "Invalid Credentials" }),
            { status: 401, headers: { "Content-Type": "application/json" } }
        );
    }
}
