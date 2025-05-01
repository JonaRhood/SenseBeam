import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    
    // const url = request.nextUrl.clone()
    // const pacientId = url.searchParams.get('pacientes')

    // let cookie = request.cookies.get('isModalOpen')

    // if (pacientId && cookie?.value == "false") {
    //     return NextResponse.redirect(new URL(`/pacientes/${pacientId}`, request.url))
    // } else {
    //     console.log(false)
    // }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}