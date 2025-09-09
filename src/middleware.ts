import { NextResponse } from "next/server";
import { auth } from "./auth";
import { ROOT, LOGIN, PUBLIC_ROUTES } from "@/lib/routes";

export async function middleware(request) {
  const { nextUrl } = request;
  const session = await auth();

  const isAuthenticated = !!session?.user;

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === ROOT;

  console.log("isPublicRoute");
  console.log(isAuthenticated);
  console.log(isPublicRoute);

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(LOGIN, nextUrl));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
