
import { connectDB } from "@/config/mongoose-connection";
import Product from "@/models/equipment-model"

export async function POST(req){
    await connectDB();
    const body  = await req.json();
    
    try{
        console.log(body);
    let newProduct = await Product.create(body);
    
    return new Response(
        JSON.stringify({ failure: false, msg: "Product Added Successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
    }catch{
        return new Response(
            JSON.stringify({ failure: true, msg: "Product Added Unsuccessfully" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );

    }
    
    
    
    
}