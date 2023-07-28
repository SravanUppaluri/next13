import React from "react";
import "@/app/globals.css";
import Link from "next/link";
import RootLayout from "./layout";

export default function index() {
  return (
    <RootLayout>
      <div className="text-center text-3xl font-bold">
        <pre>
          '''this will be considered as the main page <br /> ---pages/index.tsx{" "}
          <br /> if this file is not found there will be a page at <br />{" "}
          ---app/page.tsx <br /> which is considered as main page'''
        </pre>
        <div className="p-12 text-green-500">
          <Link href="blogs">Click Here to go to the blogs</Link>
        </div>
      </div>
    </RootLayout>
  );
}
