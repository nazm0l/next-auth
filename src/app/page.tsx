import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen grid place-items-center">
      <div>
        <h2>Welcome</h2>
        {session?.user ? (
          <h2>{session?.user?.email}</h2>
        ) : (
          <h2 className="text-red-400">Unauthorized User</h2>
        )}
        {session?.user ? (
          <Link href="/dashboard">Go to Dashboard</Link>
        ) : (
          <Link href="/login">Login Here</Link>
        )}
      </div>
    </div>
  );
}
