import { data } from "autoprefixer";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function AddUser() {
  const newid = nanoid();

  const BE_URL = "http://localhost:3001/add-user";
  const BE_URLP = "http://localhost:3001/add-product";

  const handleSubmitUser = async (e) => {
    // e.preventDefault();
    const data = {
      name: e.target.username.value,
      age: Number(e.target.userage.value),
      id: newid,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.text();

    console.log(data);
  };

  const handleSubmitProduct = async (e) => {
    // e.preventDefault();
    const data = {
      name: e.target.productname.value,
      price: Number(e.target.productprice.value),
      id: newid,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(BE_URLP, options);
    const FETCHED_JSON = await FETCHED_DATA.text();

    console.log(data);
  };

  return (
    <main className="flex justify-center items-center container mx-auto gap-10 mt-[100px]">
      <form action="" onSubmit={handleSubmitUser}>
        <div className="flex w-[350px] h-[200px] rounded-[12px] gap-5 border flex-col p-4 justify-center">
          <div className="flex gap-2">
            <label htmlFor="name">User Name:</label>
            <input
              type="text"
              placeholder="enter user name"
              id="username"
              className="border rounded-[5px] p-[2px]"
              name="username"
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="age">User Age:</label>
            <input
              type="text"
              placeholder="enter user age"
              id="userage"
              className="border rounded-[5px] p-[2px]"
              name="userage"
            />
          </div>

          <input
            className="flex justify-center items-center rounded-[5px] border bg-[#9494d2] w-[100px]"
            type="submit"
            name="Add User"
          />
        </div>
      </form>
      <form action="" onSubmit={handleSubmitProduct}>
        <div className="flex w-[350px] h-[200px] rounded-[12px] gap-5 border flex-col p-4 justify-center">
          <div className="flex gap-2">
            <label htmlFor="productname">Product Name:</label>
            <input
              type="text"
              placeholder="enter product name"
              id="productname"
              className="border rounded-[5px] p-[2px]"
              name="productname"
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="productprice">Product Price:</label>
            <input
              type="text"
              placeholder="enter product price"
              id="productprice"
              className="border rounded-[5px] p-[2px]"
              name="productprice"
            />
          </div>

          <input
            className="flex justify-center items-center rounded-[5px] border bg-[#9494d2] w-[100px]"
            type="submit"
            name="Add Product"
          />
        </div>
      </form>
    </main>
  );
}
