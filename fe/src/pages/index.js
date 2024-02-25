import Image from "next/image";
import { Inter } from "next/font/google";
import AddUser from "@/components/AddUser";
import { useEffect, useState } from "react";
import axios from "axios";
import { RedirectType } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const BE_URLD = "http://localhost:3001/delete-user";
  const BE_URLDP = "http://localhost:3001/delete-product";
  const BE_URLU = "http://localhost:3001/update-user";

  const [data, setData] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fet() {
      const result = await fetch("http://localhost:3001/users");
      const allData = await result.json();

      const productRes = await fetch("http://localhost:3001/products");
      const allProds = await productRes.json();

      setData(allData);
      setProduct(allProds);
    }
    fet();
  }, []);

  const userDelete = async (user_id) => {
    console.log("BE_URLD: ", BE_URLD);
    let new_data = data?.users.filter((user) => {
      return user.id != user_id;
    });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_data),
    };
    const FETCHED_DATA = await fetch(BE_URLD, options);
    const FETCHED_JSON = await FETCHED_DATA.text();
  };

  const productDelete = async (product_id) => {
    console.log("BE_URLD: ", BE_URLD);
    let new_data = product?.products.filter((product) => {
      return product.id != product_id;
    });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_data),
    };
    const FETCHED_DATA = await fetch(BE_URLDP, options);
    const FETCHED_JSON = await FETCHED_DATA.text();
  };

  const updateData = async (id, updData) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:3001/update-user", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updData),
    })
      .then((res) => {
        if (res.ok) {
          console.log("PUT request seccessful");
        } else {
          console.log("PUT request unsuccessful");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((error) => console.log(error));
  };

  return (
    <main className="flex justify-center items-center container mx-auto gap-10 mt-[100px]">
      <AddUser
        datas={data}
        userDelete={userDelete}
        products={product}
        productDelete={productDelete}
        updateData={updateData}
      />
    </main>
  );
}
