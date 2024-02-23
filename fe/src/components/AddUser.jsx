import { data } from "autoprefixer";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function AddUser(props) {
  const { userDelete } = props.userDelete;
  // console.log("prot", props.userDelete);
  console.log("products", props.products);
  console.log("user", props?.datas);

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

  const newUsersList = (user_id) => {};

  return (
    <main className="flex justify-center items-center container mx-auto gap-10 mt-[50px] w-[900px] flex-wrap">
      <div className="flex gap-10">
        <form action="" onSubmit={handleSubmitUser}>
          <div className="flex w-[350px] h-[200px] rounded-[12px] gap-5 border-[#0098BD] border flex-col p-4 justify-center">
            <div className="flex gap-2">
              <label htmlFor="name">User Name:</label>
              <input
                type="text"
                placeholder="Enter user name"
                id="username"
                className="border rounded-[5px] p-[2px] outline-none"
                name="username"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="age">User Age:</label>
              <input
                type="text"
                placeholder="Enter user age"
                id="userage"
                className="border rounded-[5px] p-[2px] outline-none"
                name="userage"
              />
            </div>
            <div className="flex justify-center">
              <input
                className="flex justify-center items-center rounded-[5px] border bg-[#0098BD] text-white w-[100px] outline-none "
                type="submit"
                name="Add Users"
              />
            </div>
          </div>
        </form>
        <form action="" onSubmit={handleSubmitProduct}>
          <div className="flex w-[350px] h-[200px] rounded-[12px] gap-5 border border-[#0098BD] flex-col p-4 justify-center">
            <div className="flex gap-2">
              <label htmlFor="productname">Product Name:</label>
              <input
                type="text"
                placeholder="Enter product name"
                id="productname"
                className="border rounded-[5px] p-[2px] outline-none"
                name="productname"
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="productprice">Product Price:</label>
              <input
                type="text"
                placeholder="Enter product price"
                id="productprice"
                className="border rounded-[5px] p-[2px] outline-none"
                name="productprice"
              />
            </div>
            <div className="flex justify-center">
              <input
                className="flex justify-center items-center rounded-[5px] border bg-[#0098BD] w-[100px] outline-none text-white"
                type="submit"
                name="Add Product"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex gap-10">
        <div className="flex w-[350px] h-auto rounded-[12px] gap-5 border border-[#0098BD] flex-col p-4">
          <div className="flex justify-center p-1 border-b border-[#0098BD]">
            <h1 className="text-[20px] font-bold">Users</h1>
          </div>
          <div className="flex gap-[115px]">
            <span className="font-bold">Name</span>
            <span className="font-bold">Age</span>
          </div>
          {props?.datas?.users?.map((user, index) => (
            <div className="flex gap-2" key={index}>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={user.name}
                  className="w-[140px] outline-none"
                />
                <input
                  type="text"
                  value={user.age}
                  className="w-[50px] outline-none"
                />
              </div>
              <button className="flex justify-center items-center rounded-[50%] border bg-[#0098BD] text-white w-[25px]">
                E
              </button>
              <button
                className="flex justify-center items-center rounded-[50%] border bg-[#0098BD] text-white w-[25px]"
                onClick={() => {
                  props.userDelete(user.id);
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="flex w-[350px] h-auto rounded-[12px] gap-5 border border-[#0098BD] flex-col p-4">
          <div className="flex justify-center p-1 border-b border-[#0098BD]">
            <h1 className="text-[20px] font-bold">Products</h1>
          </div>
          <div className="flex gap-[115px]">
            <span className="font-bold">Name</span>
            <span className="font-bold">Price</span>
          </div>
          {props?.products?.products?.map((product, index) => (
            <div className="flex gap-2" key={index}>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={product.name}
                  className="w-[140px] outline-none"
                />
                <input
                  type="text"
                  value={product.price}
                  className="w-[50px] outline-none"
                />
              </div>
              <button className="flex justify-center items-center rounded-[50%] border bg-[#0098BD] text-white w-[25px]">
                E
              </button>
              <button
                className="flex justify-center items-center rounded-[50%] border bg-[#0098BD] text-white w-[25px]"
                onClick={() => {
                  props.productDelete(product.id);
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
