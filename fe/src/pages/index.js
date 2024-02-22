import Image from "next/image";
import { Inter } from "next/font/google";
import AddUser from "@/components/AddUser";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState();
  // const [product, setProduct] = useState();

  useEffect(() => {
    async function fet() {
      const result = await fetch("http://localhost:3001/users");
      const allData = await result.json();
      console.log(allData);
      setData(allData);
    }
    fet();
  }, []);
  return (
    <main className="flex justify-center items-center container mx-auto gap-10 mt-[100px]">
      <AddUser data={data} />
    </main>
  );
}
