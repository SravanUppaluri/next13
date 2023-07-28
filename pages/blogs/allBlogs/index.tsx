// import React from "react";
// import Layout from "./layout";
// import "../../../app/globals.css";

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (!res.ok) {
//     throw new Error("Failed to get data");
//   }
//   const users = await res.json();
//   return {
//     props: { users },
//   };
// }

// function index({ users }: any) {
//   console.log(users);
//   return (
//     <Layout>
//       <div className="h-96">
//         <div className="h-full overflow-auto p-3 text-xl">
//           <p>All blogs can be displayed here</p>
//           <div>
//             {users.map((user: any) => {
//               return (
//                 <div
//                   key={user.id}
//                   onClick={(e) => console.log(user.id)}
//                   className="border-2 border-solid border-indigo-600 m-8 p-4 hover:bg-yellow-100 hover:border-dotted"
//                 >
//                   {user.id} -{" "}
//                   <span>
//                     {user.name} - {user.username}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default index;

import React from "react";
import Layout from "./layout";
import "../../../app/globals.css";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  const users = await res.json();
  return {
    props: { users },
  };
}

function index({ users }: any) {
  console.log(users);
  return (
    <Layout>
      <div className="h-96">
        <div className="h-full overflow-auto p-3 text-xl">
          <p>All blogs can be displayed here</p>
          <div>
            {users.map((user: any) => {
              return (
                <div className="m-12">
                  <Link
                    href={`/blogs/allBlogs/${user.id}`}
                    key={user.id}
                    onClick={(e) => console.log(user.id)}
                    className="border-2 border-solid border-indigo-600 m-8 p-4 hover:bg-yellow-100 hover:border-dotted"
                  >
                    {user.id} -{" "}
                    <span>
                      {user.name} - {user.username}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
