import React, { ReactNode } from "react";
import BackButton from "@/shared/components/backbutton";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-blue-300 p-6 text-3xl font-bold text-center flex justify-evenly text-white">
        <span className="me-7 p-2 pe-4 bg-red-200 rounded">
          <BackButton />
        </span>
        You can find List of all Blogs Here
      </div>
      {children}
      <div className="bg-blue-300 p-6 text-3xl font-bold text-center text-white">
        * Click on any blog to get a detailed view
      </div>
    </>
  );
};

export default Layout;
