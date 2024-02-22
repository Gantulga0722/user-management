import Image from "next/image";
import { Inter } from "next/font/google";
import AddUser from "@/components/AddUser";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState();
  // const [product, setProduct] = useState();
  console.log("my data:", data);

  useEffect(() => {
    async function fet() {
      const result = await fetch("http://localhost:3001/users");
      const allData = await result.json();
      console.log(allData);
      setData(allData);
    }
    fet();
  }, []);

  const userDelete = (user_id) => {
    let new_data = data?.allData?.users.filter((user) => {
      console.log(user.id);
      return user.id != user_id;
    });
    setData(new_data);
  };

  return (
    <main className="flex justify-center items-center container mx-auto gap-10 mt-[100px]">
      <AddUser datas={data} userDelete={userDelete} />
    </main>
  );
}
