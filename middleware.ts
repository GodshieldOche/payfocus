// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const { cookies } = request

    const jwt = cookies.get('jwt')

    let user

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',  Authorization: `Bearer ${jwt}`},
    };

    if (jwt) {
        const res = await fetch(`https://api.payfocuss.com/account/info`, requestOptions )
        user = await res.json()
    }

    if (user) {
        if (request.nextUrl.pathname.includes('/auth')) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    if(request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!user) {
            return NextResponse.redirect(new URL('/auth/signin', request.url))
        }
    }

}


// See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/auth/:path*',
// }