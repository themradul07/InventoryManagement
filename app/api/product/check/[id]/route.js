
import { connectDB } from "@/config/mongoose-connection";
import Product from "@/models/equipment-model"
import { ObjectId } from "mongodb";


export async function POST(req){
    await connectDB();
    const body  = await req.json();
    
    try{
        console.log(body);
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

export async function GET(req, param ){
    await connectDB();
    const { params } = await param; 
    const id = params.id;
    
    
    try{
        // console.log(id)
        let newProduct = await Product.findOne({_id:new ObjectId(id)}); 

        console.log(newProduct);
        // console.log("executed");

       
    return new Response(
        JSON.stringify({ failure: false, msg: "Product Added Successfully",body : newProduct }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
    }catch{
        
        return new Response(
            JSON.stringify({ failure: true, msg: "Product Added Unsuccessfully" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );

    }    
    
}