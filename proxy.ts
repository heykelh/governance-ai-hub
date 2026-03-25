export { auth as proxy } from "@/auth";

export const config = {
  matcher: [
    "/learn/:path*",
    "/audit-simulator/:path*",
    "/resources/:path*",
    "/tutorials/:path*",
  ],
};