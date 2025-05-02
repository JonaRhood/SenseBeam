import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // const pathname = request.nextUrl.pathname;
    // const isRoot = pathname === '/';
    // const dataOverviewTab = /^\/pacientes\/\d+\/?$/.test(pathname);
    // const datachartTab = /^\/pacientes\/\d+\/datachart\/?$/.test(pathname);
  
    // if (isRoot || dataOverviewTab) {
    //   console.log("Ruta exacta de dataOverview");
    //   const res = NextResponse.next();
    //   res.cookies.set("patientTab", "1", {
    //     path: "/",
    //     maxAge: 3600,
    //   });
    //   return res;
    // }

    // if (datachartTab) {
    //   console.log("Ruta exacta de datachart");
    //   const res = NextResponse.next();
    //   res.cookies.set("patientTab", "2", {
    //     path: "/",
    //     maxAge: 3600,
    //   });
    //   return res;
    // }
  
    // return NextResponse.next();
  }
  

export const config = {
    matcher: '/:path*',
};
