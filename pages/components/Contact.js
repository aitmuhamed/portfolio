import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsChevronDoubleLeft, BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";

// to handle the form
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();
  const router = useRouter();

  // console.log(errors)

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        reset();
        router.push("/");
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h2 className="p-10 tracking-widest text-teal-700 uppercase">
          Contact
        </h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                {/* <Image
                  width={500}
                  height={300}
                  className="rounded-xl"
                  src="https://img.freepik.com/free-vector/happy-women-sitting-talking-each-other-dialog-psychologist-tablet-flat-illustration_74855-14078.jpg?t=st=1655518257~exp=1655518857~hmac=a0300273195172e7cf2174814efede3112d07709efde352d507adddd596f4c05&w=740"
                /> */}
                <Image
                  src={"/assets/Neobank.webp"}
                  layout={"responsive"}
                  className="rounded-xl"
                  width={500}
                  height={300}
                  objectFit={"contain"}
                  alt={"Neobank cityscape illustration 1"}
                />
              </div>
              <div>
                <h2 className="text-teal-700 pt-7">Aitmukhmyed Almasbyek</h2>
                <h3 className="text-gray-400">Frond End Developer</h3>
                <p className="pt-3">
                  I am not available for freelance or full-time positions.
                </p>
              </div>
              <div>
                <p className="pt-24 text-center uppercas">get in touch!</p>

                <div className="flex items-center justify-between py-4 ">
                  <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                    <a href="https://www.linkedin.com/in/aitmukhamyed-almasbyek-1a05a9221/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                    <a href="https://github.com/aitmuhamed">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                    <a href="mailto:aitmukhamyed@gmail.com">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="p-4 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-125">
                    <a href="https://hashnode.com/@Apitok">
                      <BsFillPersonLinesFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-3 border-2 border-gray-200 rounded-lg caret-teal-200"
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                        },
                      })}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-200 rounded-lg caret-teal-200"
                      type="text"
                      name="phone"
                      {...register("phone", {
                        required: {
                          value: false,
                        },
                      })}
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-3 border-2 border-gray-200 rounded-lg caret-teal-200"
                    type="email"
                    name="email"
                    {...register("email", {
                      required: {
                        value: true,
                      },
                    })}
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-3 border-2 border-gray-200 rounded-lg caret-teal-200"
                    type="text"
                    name="subject"
                    {...register("subject", {
                      required: {
                        value: true,
                      },
                    })}
                  />
                  <span>{errors?.subject?.message}</span>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">message</label>
                  <textarea
                    className="p-3 border-2 border-gray-300 rounded-lg caret-teal-200"
                    rows="10"
                    name="message"
                    {...register("message", {
                      required: {
                        value: false,
                      },
                    })}
                  ></textarea>
                </div>

                <button type="submit" className="w-full p-3 mt-4 bg-teal-400">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="p-3 duration-200 ease-in rounded-full shadow-md cursor-pointer shadow-teal-200 hover:scale-110">
              <HiOutlineChevronDoubleUp
                className="m-auto text-teal-700"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
