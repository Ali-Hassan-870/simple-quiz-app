import Image from "next/image";
import Button from "./components/common/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FAFAFA] p-4">
      {/* Main Container */}
      <div className="relative w-[60vw] h-[85vh] border rounded-md flex justify-center items-center">
        {/* Background Image */}
        <Image
          src="/countries-in-the-world.webp"
          alt="Background"
          fill
          className="object-cover rounded-md"
        />

        {/* Centered Div using parent flex */}
        <div className="w-2/5 h-2/5 bg-white flex flex-col justify-between items-center z-10 rounded-md p-5">
          <h1 className="font-[Georgia,serif] text-black text-3xl">Guess the Country by hint</h1>
          <Link href={"/quiz"} className="w-full h-2/6">
            <Button name="Start" />
          </Link>
          <p className="font-['Segoe UI'] text-black text-[14] font-bold">10 Questions</p>
        </div>
      </div>
    </div>
  );
}
