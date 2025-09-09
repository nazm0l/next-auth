"use server";

import { signIn, signOut } from "@/auth";

export async function doLogin(formData: FormData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function doSignOut() {
  await signOut({ redirectTo: "/login" });
}
