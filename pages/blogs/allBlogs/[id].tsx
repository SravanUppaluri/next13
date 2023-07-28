import "@/app/globals.css";
import BackButton from "@/shared/components/backbutton";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((detail: any) => {
    return {
      params: { id: detail.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { detail: data },
  };
};

const Details = ({ detail }: any) => {
  console.log(detail);
  return (
    <div className="text-center bg-yellow-100 p-24 m-12">
      <div className="text-5xl font-bold">Full Details of {detail.name} : </div>
      <div className="text-justify bg-blue-200 p-8 font-bold text-2xl">
        <div>{detail.id} - ID</div>
        <div>{detail.name} - Name </div>
        <div>{detail.username} - Username</div>
        <div>{detail.email} - Email</div>
        <div>{detail.phone} - Phone</div>
        <div>{detail.website} - Website</div>
        <div>Address:</div>
        <pre className="ps-20">
          {detail.address.street} <br />
          {detail.address.suite} <br />
          {detail.address.city} <br />
          {detail.address.zipcode} <br />
        </pre>
        <div>{detail.company.name}</div>
        <div>{detail.company.catchPhrase}</div>
        <div>{detail.company.bs}</div>
      </div>
      <BackButton />
    </div>
  );
};

export default Details;
