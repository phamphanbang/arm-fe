import { useLoaderData } from "react-router";

export default function Home() {
  const data = useLoaderData() as { message: string };

  return (
    <div>
      <h1>Home Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
