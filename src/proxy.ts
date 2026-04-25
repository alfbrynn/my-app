import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import withAuth from "./Middleware/withAuth";

const requireAuth = [
  "/dashboard",
  "/profile", 
  "/admin",
  "/editor",
];

export default withAuth(
  async function proxy(req: NextRequest, next: NextFetchEvent) {
    return NextResponse.next();
  },
  requireAuth
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|auth).*)",
  ],
};