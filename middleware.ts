import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const match = pathname.match(/^\/pacientes\/(\d+)/);
    const datachartPath = pathname.includes("datachart");

    if (datachartPath) {
        console.log("HOLA");

        const res = NextResponse.next();
        res.cookies.set("patientTab", "2", {
            path: "/",
            maxAge: 3600,
        });

        return res;
    }

    // if (match) {
    //     const patientId = match[1];
    //     console.log(`Paciente ID: ${patientId}`);

    //     const res = NextResponse.next();
    //     res.cookies.set("patientId", patientId, {
    //         path: "/",
    //         maxAge: 3600,
    //     });

    //     return res;
    // }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};
