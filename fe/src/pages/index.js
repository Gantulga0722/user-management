import Image from "next/image";
import { Inter } from "next/font/google";
import AddUser from "@/components/AddUser";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center items-center container mx-auto gap-10 mt-[100px]">
      <AddUser />
    </main>
  );
}
