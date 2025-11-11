import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex px-8 md:px-0 flex-col justify-center items-center h-[44vh] gap-3">
      <div className="flex items-center">
      <h1 className="font-bold text-2xl">Welcome to GetMeAChai!</h1>
        <Image src={"/tea.gif"} alt="teaimg" width={50} height={50}></Image>
        </div>
        <p>A crowdfunding platform for tea enthusiasts to support their favorite teas</p>
        <div className="flex gap-4 mt-4">
        <Link href="/login"><button className="custbtn">Start Now</button></Link>
        <button className="custbtn">Read More</button>
        </div>
    </div>
    <div className="bg-linear-to-br from-purple-600 to-blue-500 h-1 opacity-8"></div>
    <div className="container mx-auto md:h-[44vh] my-12">
      <h2 className="font-bold text-2xl text-center mb-14">Your Fan can buy a chai</h2>
    <div className="flex-col md:flex-row space-y-4 md:space-y-0 md:flex md:gap-5 md:justify-around px-8 md:px-0 text-center items-center">
      <div className="md:w-[20vw] space-y-2 mb-10 flex flex-col justify-center items-center text-center"><Image className='bg-slate-500 rounded-full p-2' src={"/man.gif"} alt="man" width={88} height={88}></Image><h3 className="font-bold text-xl">Support your Creator</h3>
      <p>Your fan can buy a chai for your favorite creator and support their work</p>
      </div>
      <div className="md:w-[20vw] space-y-2 mb-10 flex flex-col justify-center items-center text-center"><Image className='bg-slate-500 rounded-full p-2' src={"/coin.gif"} alt="man" width={88} height={88}></Image><h3 className="font-bold text-xl">Fund Yourself</h3>
      <p>Your fan can buy a chai for themselves and support their work</p>
      </div>
      <div className="md:w-[20vw] space-y-2 mb-10 flex flex-col justify-center items-center text-center"><Image className='bg-slate-500 rounded-full p-2' src={"/group.gif"} alt="man" width={88} height={88}></Image><h3 className="font-bold text-xl">Fans want to help</h3>
      <p>Fans instantly want to help their favorite creators</p>
      </div>
    </div>
    </div>
    </>
  );
}
