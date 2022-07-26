import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
// import logo from "../../public/assets/logo.png";

function About() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/Movies" || router.asPath === "/AiTraffic") {
      setNavBg("#1f2937");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl shadow-teal-500 ease-in duration-300  z-[100]"
          : "fixed w-full h-20 shadow-xl"
      }
    >
      <div className="flex items-center justify-between w-full h-full px-10 2xl:px-16">
        IT
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase border-teal-200 hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-50 p-5 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-5 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between w-full">
            IT
            <div
              onClick={handleNav}
              className="p-2 duration-300 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-110"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="flex flex-col py-10">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-5 text-sm border-teal-200 hover:border-b"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-5 text-sm border-teal-200 hover:border-b"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-5 text-sm border-teal-200 hover:border-b"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-5 text-sm border-teal-200 hover:border-b"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-5 text-sm border-teal-200 hover:border-b"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="py-10">
              <p className="py-3 tracking-widest text-teal-600 uppercase">
                Let's Connect!
              </p>
              <div className="flex items-center justify-between my-full w-full sm:w-[80%]">
                <div className="p-3 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-110">
                  <a href="https://www.linkedin.com/in/dialaabulkhail/">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="p-3 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-110">
                  <a href="https://github.com/dialaabulkhail">
                    <FaGithub />
                  </a>
                </div>
                <div className="p-3 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-110">
                  <a href="mailto:diala.sh.98@gmail.com">
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="p-3 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-110">
                  <a href="https://dialabk.hashnode.dev/">
                    <BsFillPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
