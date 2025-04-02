import User from "@/models/user-model";
import { connectDB } from "@/config/mongoose-connection";
import { generatetoken } from "@/utils/jwt";
import { generatePass } from "@/utils/bcrypt";
import { cookies } from "next/headers";
// import { generatetoken } from "@/utils/jwt";


export async function POST(request) {
    await connectDB();
    const cookieStore = await cookies();
    const body = await request.json();
    console.log(body);
    let exist = await User.findOne({ email: body.email });

    //if no user exist
    if (!exist) {
        body.password = await generatePass(body.password);

        let user = await User.create(body);
        console.log(user);

        return new Response(
            JSON.stringify({ failure: false, msg: "User Created Succesfully" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    }

    //if user exist
    else {

        return new Response(
            JSON.stringify({ failure: true, msg: "user already exist" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        )
    }
}