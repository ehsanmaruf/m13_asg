import { NextResponse } from "next/server";

//GET request to read JSON Data
export async function GET(req,res){
    return NextResponse.json({
        "message": "Welcome to our API!", 
        "version": "1.0"    
      });
}

export async function POST(req,res){
    return NextResponse.redirect(new URL("/",req.url ))
}
