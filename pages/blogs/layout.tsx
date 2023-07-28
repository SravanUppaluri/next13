import BackButton from "@/shared/components/backbutton";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-teal-300 p-6 text-3xl font-bold text-center text-white">
        <span className="me-7 p-2 pe-4 bg-red-200 rounded">
          <BackButton />
        </span>
        Title
      </div>
      {children}
      <div className="bg-yellow-300 p-6 text-3xl font-bold text-center text-white">
        Footer
      </div>
    </>
  );
};

export default Layout;
