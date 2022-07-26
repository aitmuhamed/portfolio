import Image from "next/image";
// import movies from "../public/img/movies.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function Movies() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh]  z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={movies}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 bg-black/50">Netflix Clone</h2>
            <h3>Movies Webpage</h3>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="">Overview</h2>
          <p>
            Netflix Clone is a webpage that has API movies data, you can add
            your comments to each movie, and you can also add it to your
            favorite list.
          </p>
          <a href="">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default Movies;
