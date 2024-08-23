// import { NextRequest, NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { isTokenExpired } from "./libs/token";

// // Typing the request parameter with the NextRequest type
// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const url = new URL(request.url);

//   // Handling cookie retrieval with proper typing
//   const token = cookies().get("token");
//   const role = cookies().get("role");
//   const tokenValue = token?.value;

//   // Defining the redirectTo function with a string path parameter and returning a NextResponse
//   const redirectTo = (path: string): NextResponse =>
//     NextResponse.redirect(new URL(path, url));

//   // Handle login and register redirects
//   if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
//     if (tokenValue && !isTokenExpired(tokenValue)) {
//       return redirectTo("/");
//     }
//     return NextResponse.next();
//   }

//   // Handle profile and change-password redirects
//   if (pathname.startsWith("/profile")) {
//     if (tokenValue && !isTokenExpired(tokenValue)) {
//       return NextResponse.next();
//     }
//     return redirectTo("/");
//   }

//   // Handle dashboard redirects
//   if (pathname.startsWith("/dashboard")) {
//     if (!tokenValue || isTokenExpired(tokenValue)) {
//       return redirectTo("/login");
//     }

//     const roleValue = role?.value;
//     if (!roleValue || roleValue !== "admin") {
//       return redirectTo("/");
//     }

//     return NextResponse.next();
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//     "/profile",
//     "/change-password",
//     "/login",
//     "/register",
//     "/contact-me",
//   ],
// };
