import { FC } from "react";

interface pageProps {
  params: { eachBlog: string };
}

const Page: FC<pageProps> = ({ params }) => {
  console.log(params);
  return <div>My Post: {}</div>;
};

export default Page;
