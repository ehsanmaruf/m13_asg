import { NextResponse } from "next/server";

//GET request to read a cookie
export async function GET(req,res){
    let token = req.cookies.get('language');
    return NextResponse.json({ token });
}


//POST request to set a cookie!
export async function POST(req,res){
    // let token = req.cookies.set("preference","dark");

    return NextResponse.json({},{
        status:200,
        headers:{
            "Set-Cookie":"language=en;Path=/;"
        }
    });
}