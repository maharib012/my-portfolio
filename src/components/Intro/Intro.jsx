import "./Intro.css"
import intro_img from "../../assets/intro-img.webp"
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Intro = () => {
    return (
        <section id="home" className="w-full pt-11 lg:pt-16 py-10 flex flex-col items-center justify-center gap-8 intro">
            <img
                className="w-52 h-auto aspect-square rounded-full mx-auto intro-img"
                src={intro_img}
                alt="intro-photo"
            />
            <div className="w-full px-5">
                <h1 className="w-full text-4xl md:text-5xl tracking-tighter font-medium text-center break-words">
                    <span className="style-h1 w-full">{"I'M"} MAHARIB,</span> MERN DEVELOPER
                </h1>
            </div>
            <p className="w-full px-5 text-lg text-center break-words">
                Hi, {"I'am"} Maharib Shafiqee Aion, MERN stack developer skilled in React/Next.js, Node.js, Express.js, and MongoDB. Committed to creating seamless web experiences with a focus on clean code and user-centric design. Ready to bring technical expertise and innovation to your team.
            </p>
            <div className="w-full flex justify-center items-center gap-5 flex-wrap">
                <button className="w-40 py-3 rounded-3xl intro-btn-1">Connect With Me</button>
                <button className="w-40 py-3 rounded-3xl flex items-center justify-center gap-1 intro-btn-2">
                    My Resume <MdOutlineFileDownload className="text-2xl" />
                </button>
            </div>
            <div className="w-full flex justify-center items-center gap-5 flex-wrap">
                <a href="#">
                    <button className="w-8 h-8 rounded-full bg-black relative social-btn">
                        <FaLinkedinIn className="mx-auto" />
                    </button>
                </a>
                <a href="#">
                    <button className="w-8 h-8 rounded-full bg-black relative social-btn">
                        <FaGithub className="mx-auto" />
                    </button>
                </a>
                <a href="#">
                    <button className="w-8 h-8 rounded-full bg-black relative social-btn">
                        <FaDiscord className="mx-auto" />
                    </button>
                </a>
                <a href="#">
                    <button className="w-8 h-8 rounded-full bg-black relative social-btn">
                        <FaTwitter className="mx-auto" />
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Intro;