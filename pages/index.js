import React from "react";
import Head from "next/head";
import Image from "next/image";

function Home() {
  return (
    <>
      <Head>
        <title>Aasha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="homebody">
        <div className="flex w-full justify-between text-black sm:text-white font-bold z-10">
          <ul className="flex flex-row ml-10 my-5 cursor-pointer">
            <ol className="px-2 mx-5">Icon</ol>
          </ul>
          <ul className="hidden sm:flex flex-row mx-10 my-5 cursor-pointer">
            <ol className="px-2 mx-5">Blog</ol>
            <ol className="px-2 mx-5">Register As A Professional</ol>
            <ol className="px-2 mx-5">Login/Sign Up</ol>
          </ul>
          <ul className="sm:hidden ml-10 my-5 cursor-pointer">
            <ol className="px-2 mx-5">Menu</ol>
          </ul>
        </div>
        <div className="sm:mt-[10%] sm:mx-[15%]">
          <h1 className="hidden sm:block text-center text-6xl font-semibold text-white">
            Home services, on demand.
          </h1>
          <div className="flex flex-col search my-5 mx-7 sm:flex-row ">
            <div className="flex sm:hidden flex-row p-1">
              <img className="h-6 w-6" src="..\gps.png" alt="gps_icon" />
              <h2 className="ml-2 text-base">Darbhanga, Bihar</h2>
            </div>
            <button
              type="submit"
              className="hidden sm:flex text-white items-center pl-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <img className="h-6 w-6" src="..\gps.png" alt="gps_icon" />
              <h2 className="text-base">Darbhanga</h2>
            </button>
            <div className="p-2 sm:w-full">
              <form>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full text-sm rounded-lg border"
                    placeholder="Search for Services"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-[10%]">
          <div className="flex flex-row justify-center mx-[20%] px-4 space-b bg-white h-40 rounded-md drop-shadow-xl">
            <div className="flex flex-col hover:bg-slate-100 my-5 mx-2 w-1/5 rounded-md justify-center hover:shadow-sm">
              <div className="justify-center text-center items-center ">
                <Image
                  loader={() =>
                    "https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  }
                  src="https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="p-2 text-sm text-center">Salon For Women</p>
              </div>
            </div>
            <div className="flex flex-col hover:bg-slate-100 my-5 mx-2 w-1/5 rounded-md justify-center hover:shadow-sm">
              <div className="justify-center text-center items-center ">
                <Image
                  loader={() =>
                    "https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  }
                  src="https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="p-2 text-sm text-center">Salon For Women</p>
              </div>
            </div>
            <div className="flex flex-col hover:bg-slate-100 my-5 mx-2 w-1/5 rounded-md justify-center hover:shadow-sm">
              <div className="justify-center text-center items-center ">
                <Image
                  loader={() =>
                    "https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  }
                  src="https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="p-2 text-sm text-center">Salon For Women</p>
              </div>
            </div>
            <div className="flex flex-col hover:bg-slate-100 my-5 mx-2 w-1/5 rounded-md justify-center hover:shadow-sm">
              <div className="justify-center text-center items-center ">
                <Image
                  loader={() =>
                    "https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  }
                  src="https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="p-2 text-sm text-center">Salon For Women</p>
              </div>
            </div>
            <div className="flex flex-col hover:bg-slate-100 my-5 mx-2 w-1/5 rounded-md justify-center hover:shadow-sm">
              <div className="justify-center text-center items-center ">
                <Image
                  loader={() =>
                    "https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  }
                  src="https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="p-2 text-sm text-center">Salon For Women</p>
              </div>
            </div>
          </div>
        </div>
        <div className="title my-[5%] text-center font-bold text-5xl">
          <h1>Home Service</h1>
        </div>
        <div>
          <div className="flex flex-row justify-center mx-[20%] mb-20 px-4 space-b bg-white h-40 rounded-md drop-shadow-xl">
            <div className="flex flex-col hover:bg-slate-100 my-5 mx-2 w-1/5 rounded-md justify-center hover:shadow-sm ">
              <div className="justify-center text-center items-center ">
                <Image
                  loader={() =>
                    "https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  }
                  src="https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="p-2 text-sm text-center">Salon For Women</p>
              </div>
            </div>
            <div className="flex flex-col hover:bg-slate-100 my-5 mx-2 w-1/5 rounded-md justify-center hover:shadow-sm">
              <div className="justify-center text-center items-center ">
                <Image
                  loader={() =>
                    "https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  }
                  src="https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="p-2 text-sm text-center">Salon For Women</p>
              </div>
            </div>
            <div className="flex flex-col hover:bg-slate-100 my-5 mx-2 w-1/5 rounded-md justify-center hover:shadow-sm">
              <div className="justify-center text-center items-center ">
                <Image
                  loader={() =>
                    "https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  }
                  src="https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="p-2 text-sm text-center">Salon For Women</p>
              </div>
            </div>
            <div className="flex flex-col hover:bg-slate-100 my-5 mx-2 w-1/5 rounded-md justify-center hover:shadow-sm">
              <div className="justify-center text-center items-center ">
                <Image
                  loader={() =>
                    "https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  }
                  src="https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="p-2 text-sm text-center">Salon For Women</p>
              </div>
            </div>
            <div className="flex flex-col hover:bg-slate-100 my-5 mx-2 w-1/5 rounded-md justify-center hover:shadow-sm">
              <div className="justify-center text-center items-center ">
                <Image
                  loader={() =>
                    "https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  }
                  src="https://cdn-icons.flaticon.com/png/512/1005/premium/1005786.png?token=exp=1659710648~hmac=13f9ec2ddc64447915cefa6cf0a06eff"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="p-2 text-sm text-center">Salon For Women</p>
              </div>
            </div>
            {/* <ul>Hair, Skin & Nails</ul>
          <ul>Women Therapies</ul>
          <ul>Salon For Men</ul>
          <ul>Men's Therapies</ul> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
