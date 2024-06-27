import { auth } from "@/auth";
import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

/*export async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    if (path === '/') {
        return NextResponse.next()
    }
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token && path !== '/admin') {
        return NextResponse.redirect(new URL('/login', req.url))
    } else if (token && path === '/login') {
        return NextResponse.redirect(new URL('/login', req.url))
    }
    return NextResponse.next()
}*/

const protectedRoutes=['/admin']
export default async function middleware(request: NextRequest) {

    const session = await auth()

    const isProtected = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    )

    if (!session && isProtected) {
        const absoluteURL = new URL ('/', request.url)
        return NextResponse.redirect(absoluteURL.toString())
    }

    return NextResponse.next()
}
export const config = { matcher: ['/admin/:path*'] }