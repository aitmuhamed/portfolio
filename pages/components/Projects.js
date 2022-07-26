import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="p-10 tracking-widest text-teal-700 uppercase">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative flex items-center justify-center w-full h-auto p-4 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-teal-600 to-teal-800">
            {/* <Image
              className="group-hover:opacity-10"
              src={simple}
              width="550"
              height="300"
              alt="/"
            /> */}
            <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">Simple</h3>
              <p className="pt-2 pb-4 text-center">NextJS</p>
              <Link href="/Simple">
                <p className="py-3 text-lg font-bold text-center text-teal-700 bg-white rounded-lg cursor-pointer ">
                  More
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full h-auto p-4 shadow-xl group rounded-xl hover:animate-pulse hover:bg-gradient-to-r from-teal-600 to-teal-800">
            {/* <Image
              className="group-hover:opacity-10"
              src={movie}
              width="550"
              height="300"
              alt="/"
            /> */}
            <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                Movies Library
              </h3>
              <p className="pt-2 pb-4 text-center">JavaScript</p>
              <Link href="/Movies">
                <p className="py-3 text-lg font-bold text-center text-teal-700 bg-white rounded-lg cursor-pointer ">
                  More
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full h-auto p-4 shadow-xl group rounded-xl hover:animate-pulse hover:bg-gradient-to-r from-teal-600 to-teal-800">
            {/* <Image
              className="group-hover:opacity-10"
              src={mbank}
              width="550"
              height="300"
              alt="/"
            /> */}
            <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">Newep</h3>
              <p className="pt-2 pb-4 text-center">NextJS</p>
              <Link href="/Newep">
                <p className="py-3 text-lg font-bold text-center text-teal-700 bg-white rounded-lg cursor-pointer ">
                  More
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full h-auto p-4 shadow-xl group rounded-xl hover:animate-pulse hover:bg-gradient-to-r from-teal-600 to-teal-800">
            {/* <Image
              className="group-hover:opacity-10"
              src={demo}
              width="550"
              height="300"
              alt="/"
            /> */}
            <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">Demo</h3>
              <p className="pt-2 pb-4 text-center">NextJS</p>
              <Link href="/Demo">
                <p className="py-3 text-lg font-bold text-center text-teal-700 bg-white rounded-lg cursor-pointer ">
                  More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
