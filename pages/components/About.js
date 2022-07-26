import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-10 tracking-widest text-teal-700 uppercase">
            About
          </h2>
          <h4 className="p-2 animate-pulse">Education</h4>
          <p className="py-1">
            I have completed my Bachelor degree in Software Engineering in 2021
            at Natioanal University of Monngolia. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
          <h4 className="pt-4 animate-pulse">Experience</h4>
          <p className="py-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          {/* <p className="py-4 text-center text-teal-500 ">
              Paying attention to details is the key for my passion in frontend development.
            </p> */}
          <Link href="/#projects">
            <p className="py-10 underline cursor-pointer">
              Check out some of my projects..
            </p>
          </Link>
        </div>
        <div>
          <Image
            src={"/assets/images.png"}
            className="duration-200 ease-in rounded-full"
            width={400}
            height={400}
            alt="me"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
