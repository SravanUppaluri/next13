import { useRouter } from "next/router";

export async function getStaticProps() {
  const router = useRouter();
  const blogNumber = router.query.blogNum;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${blogNumber}`
  );
  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  const userData = await res.json();
  return {
    props: { userData },
  };
}

// const getData = (req: any, res: any) => {
//   const router = useRouter();
//   const blogNumber = router.query.blogNum;
//   res = fetch(`https://jsonplaceholder.typicode.com/users/${blogNumber}`).then(
//     (res) => res.json
//   );
// };

export async function getStaticPaths() {
  return {
    paths: [
      "/blogs/allBlogs/[blogNum]",
      { params: { blogNum: String(blogNum) } },
    ],
    fallback: false,
  };
}

function blogNum({ userData }: any) {
  console.log(userData);
  return <div>[blogNum] :</div>;
}

export default blogNum;
