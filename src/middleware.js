import { NextResponse } from "next/server"

export function middleware (req){
    const authorization = req.headers.get('authorization');
    const Authorization = `Bearer ${authorization}`;

    return NextResponse.next({
        headers: { 'Authorization': Authorization },
    })
}

export const config={
    matcher: ['/api/header']
}