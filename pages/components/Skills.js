import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-10 tracking-widest text-teal-700 uppercase">
          Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="p-5 duration-200 ease-in rounded-full shadow-xl ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/laravel.png"}
                  width={64}
                  height={64}
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Laravel</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/css.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/html.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/javascript.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/github1.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/node.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="
                  https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/react.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/angular.png"}
                  width="110px"
                  height="70px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Angular</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src={"/assets/markdown.png"}
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Markdown</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://img.icons8.com/color/480/tensorflow.png"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tensorflow</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full shadow-xl ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/tailwind.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
