import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  return (
    <>
      <aside className="w-[15%] bg-[color:var(--color6)] h-screen">
        <div className="h-28 w-100 pt-10 text-center text-2xl font-bold text-[color:var(--color3)]">
          Welcome {"`USER`"}
        </div>
        <div className="w-[100%]  font-light flex-col flex gap-1 pl-2 justify-items-center pt-10 border-t-4 border-[color:var(--color7)]">
          <Link
            to="/dashboard"
            className={
              active
                ? "bg-[color:var(--color2)] text-[color:var(--color6)] font-bold text-lg py-3  mr-3 px-1 rounded-full text-center"
                : "text-center text-[color:var(--color2)] font-bold text-lg  py-3 px-1"
            }
            onClick={() => {
              setActive(true);
              setActive1(false);
              setActive2(false);
              setActive3(false);
            }}
          >
            <h1>Dashboard</h1>
          </Link>
          <Link
            to="/products"
            className={
              active1
                ? "bg-[color:var(--color2)] text-[color:var(--color6)] font-bold text-lg py-3  mr-3 px-1 rounded-full text-center"
                : "text-center text-[color:var(--color2)] font-bold text-lg  py-3 px-1"
            }
            onClick={() => {
              setActive1(true);
              setActive(false);
              setActive2(false);
              setActive3(false);
            }}
          >
            <h1>Live Products</h1>
          </Link>
          <Link
            to="/orders"
            className={
              active2
                ? "bg-[color:var(--color2)] text-[color:var(--color6)] font-bold text-lg py-3  mr-3 px-1 rounded-full text-center"
                : "text-center text-[color:var(--color2)] font-bold text-lg  py-3 px-1"
            }
            onClick={() => {
              setActive2(true);
              setActive(false);
              setActive1(false);
              setActive3(false);
            }}
          >
            <h1>Orders</h1>
          </Link>
          <Link
            to="/additem"
            className={
              active3
                ? "bg-[color:var(--color2)] text-[color:var(--color6)] font-bold text-lg py-3  mr-3 px-1 rounded-full text-center"
                : "text-center text-[color:var(--color2)] font-bold text-lg  py-3 px-1"
            }
            onClick={() => {
              setActive3(true);
              setActive(false);
              setActive1(false);
              setActive2(false);
            }}
          >
            <h1>Add new Item</h1>
          </Link>
        </div>
        <div className="flex flex-col justify-around gap-0 mt-48">
          <div className="text-center text-[color:var(--color3)] ">
            <p>
              <h1>Help</h1>
              <h1>
                contact us <br />
              </h1>
              <h1>FAQs</h1>
              <h1 className="cursor">
                Log out <br />
              </h1>
            </p>
          </div>
          <div className="text-center text-[color:var(--color3)] font-bold text-sm pt-4 flex flex-col justify-end">
            <h1>© 2024 Ecom-Partner</h1>
          </div>
        </div>
      </aside>
    </>
  );
};
export default SideBar;
