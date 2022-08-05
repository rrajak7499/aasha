import React from "react";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Aasha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex w-full justify-between bg-slate-600  text-white font-bold">
        <ul className="flex flex-row ml-10 my-5 cursor-pointer">
          <ol className="px-2 mx-5">Icon</ol>
        </ul>
        <ul className="hidden md:flex flex-row mx-10 my-5 cursor-pointer">
          <ol className="px-2 mx-5">Blog</ol>
          <ol className="px-2 mx-5">Register As A Professional</ol>
          <ol className="px-2 mx-5">Login/Sign Up</ol>
        </ul>
        <ul className="md:hidden ml-10 my-5 cursor-pointer">
          <ol className="px-2 mx-5">Menu</ol>
        </ul>
      </div>
      <div className="search">
        <div className="flex flex-wrap m-5">
          <h2>Darbhanga, Bihar</h2>
          <div>
            <input className="outline-dashed" type="text" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
