import { LoginForm } from "@/components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Nex Login Page",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-r from-red-100 to-blue-100">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
