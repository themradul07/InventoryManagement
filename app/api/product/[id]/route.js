

import { connectDB } from "@/config/mongoose-connection";
import Product from "@/models/equipment-model"
import mongoose from "mongoose"
const { ObjectId } = mongoose.Types;


export async function POST(req){
    await connectDB();
    const body  = await req.json();
    
    try{
        // console.log(body);
    let newProduct = await Product.create(body);
    
    return new Response(
        JSON.stringify({ failure: false, msg: "Product Added Successfully" , body: newProduct}),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
    }catch{
        return new Response(
            JSON.stringify({ failure: true, msg: "Product Added Unsuccessfully" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );

    }    
    
}

// import { connectDB } from "@/config/mongoose-connection";
// import Product from "@/models/equipment-model";

export async function GET(req, { params }) {
    await connectDB();
    const id = params.id;

    try {
        const newProduct = await Product.findOne({ _id: new ObjectId(id) });

        return new Response(
            JSON.stringify({
                failure: false,
                msg: "Product fetched successfully",
                body: newProduct,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error fetching product:", error);

        return new Response(
            JSON.stringify({
                failure: true,
                msg: "Failed to fetch product",
            }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
