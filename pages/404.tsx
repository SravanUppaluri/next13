import Link from "next/link";
import React, { useEffect } from "react";
import "../app/globals.css";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="text-center p-16">
      <div className="bg-slate-500 text-8xl p-8 text-center">
        ⚠️ Error-404 ⚠️
      </div>
      <p className="p-20 font-bold text-3xl">
        The page you are trying to access is either not available or this is
        still under development
      </p>
      <button className="hover:bg-slate-400 text-4xl border-solid border-2 border-pink-500 p-8">
        <Link href="/">Please click here to Go back to Home Page</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
