// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from 'axios'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const { cookies } = request

    const jwt = cookies.get('jwt')

    let user

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${jwt}`},
    };

    if(jwt) {
        const res = await fetch(`https://api.payfocuss.com/account/info`, requestOptions )
        user = await res.json()

       }


    if (request.nextUrl.pathname.includes('/auth')) {
        if (user) {
            return NextResponse.redirect(new URL('/home', request.url))
        }

    }

    if (request.nextUrl.pathname.startsWith('/home')){
        if (!user) {
            return NextResponse.redirect(new URL('/auth/signin', request.url))
        }
    }



}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/:path*',
}