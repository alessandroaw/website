import Image from "next/image";
import { motion } from "framer-motion";
import Transparentpfp from "@images/ninja-logo.png";
const IntroCard = ({ section }) => {
  return (
    <motion.div
      className="col-span-3 md:col-span-2 bg-white dark:bg-gray-900
			 rounded-3xl text-gray-600 dark:text-gray-300 aspect-2/1 pb-4 md:pb-0"
      whileHover="groupHover"
      animate={{ opacity: ["all"].includes(section) ? 1 : 1 }}
      variants={{
        groupHover: {
          scale: 1.01,
          transition: {
            duration: 0.1,
            ease: "easeInOut",
          },
        },
      }}
    >
      <div className="relative overflow-hidden">
        <div className="md:hidden absolute top-8 right-10 rotate-180 -mt-10 w-[100px]">
          <Image className="dark:brightness-75" src={Transparentpfp} />
        </div>
        <div className="">
          <motion.div
            variants={{ groupHover: { y: 220 } }}
            style={{ rotate: 180, zIndex: 20 }}
            className="hidden 2xl:block absolute -top-32 2xl:-top-52 right-10 rotate-180
						-mt-10 w-32 2xl:w-60"
          >
            <Image className="dark:brightness-90" src={Transparentpfp} />{" "}
          </motion.div>
        </div>
        <div>
          <motion.div
            variants={{ groupHover: { y: 150 } }}
            style={{ rotate: 180, zIndex: 20 }}
            className="2xl:hidden absolute -top-32 2xl:-top-52 right-10 rotate-180 -mt-10 w-32 2xl:w-60"
          >
            <Image className="dark:brightness-90" src={Transparentpfp} />{" "}
          </motion.div>
          <div className="text-3xl md:text-4xl 2xl:text-4xl 2xl:mt-16 m-6 md:mx-6 mx-5 md:m-8 font-nunito font-bold">
            Hi, I&apos;m Sandro!
          </div>
        </div>
        <div className="flex flex-col mx-5 justify-center 2xl:mt-10 sm:-mt-6 sm:ml-8 md:ml-6">
          <div className="lg:text-xl xl:text-2xl 2xl:mr-20 font-nunito dark:text-gray-300">
            {" "}
            I&apos;m software engineering currently specializing in web3 and
            blockchain technology, hoping to be a true master in the space 🥷
          </div>
          <div className="flex lg:text-xl xl:text-2xl 2xl:text-2xl font-base dark:text-gray-300 mt-5">
            I&apos;m interested in defi, web, and zelda!!
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroCard;
