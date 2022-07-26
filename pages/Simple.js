import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function Simple() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={"/assets/Neobank.webp"}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2"></div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="">Overview</h2>
          <p className="pt-4 pb-4">
            Simple бол сүүлийн үеийн технологи, ухаалаг шийдлийг ашиглан цаг,
            энерги, мөнгийг чинь хэмнэхэд зориулсан хэрэгсэл.
          </p>
          <a href="">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a href="https://simple.mn/">
            <button className="px-8 py-2 mt-4">Link</button>
          </a>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                NextJS
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Tailwindcss
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                headless
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                React-Markdown
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back To Projects</p>
        </Link>
      </div>
    </div>
  );
}

export default Simple;
