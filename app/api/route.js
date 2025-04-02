import { cookies } from "next/headers";


export async function GET(request) {

    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("token");
    const token = tokenCookie ? tokenCookie.value : null;
    if(token){
    return new Response(JSON.stringify({ message: 'Logout' }))}else{
        return new Response(JSON.stringify({ message: 'Login' }))

    }
}