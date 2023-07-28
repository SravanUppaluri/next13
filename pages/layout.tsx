import "../app/globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-blue-300 p-6 text-3xl font-bold text-center text-white">
        <span className="me-7 p-2 pe-4 bg-red-200 rounded">
          This is Home Page
        </span>{" "}
        Blogs
      </div>
      {children}
      <div className="bg-blue-300 p-6 text-3xl font-bold text-center text-white">
        Footer Goes Here
      </div>
    </>
  );
};

export default Layout;
