import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black items-center justify-center">
      <div className="text-white flex flex-col gap-2 p-5 max-w-xs bg-slate-800 w-full rounded-lg">
        <div><h1 className="text-center my-4">Stings</h1></div>
        <div><Link href="/signin" className="bg-slate-900 my-4 p-3 rounded-lg block">Sign in</Link></div>
        <div><Link href="/signup" className="bg-slate-900 my-4 p-3 rounded-lg block">Sign up</Link></div>
      </div>
    </main>
  );
}
