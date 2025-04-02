import { connectDB } from "@/config/mongoose-connection";
import Product from "@/models/equipment-model"


export async function GET(req){

    const data  = await Product.find({});
    return new Response(
        JSON.stringify(data),
            { status: 200, headers: { "Content-Type": "application/json" } }
    )

}