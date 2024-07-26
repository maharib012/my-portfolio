import "./About.css"
import aboutImg from "../../../src/assets/intro-img.webp"
import AboutWork from "./AboutWork/AboutWork";

const About = () => {
    return (
        <section id="about" className="w-full pt-6 pb-10">
            <h1 className="w-full text-center text-4xl font-semibold tracking-tighter break-words mb-2">
                About Me
            </h1>
            <div className="w-full py-12 px-5 lg:px-16 xl:px-4 flex flex-col lg:flex-row justify-between items-center">
                <div className="flex-1 flex lg:justify-start justify-center">
                    <div className="sm:w-3/5 lg:w-3/4 h-auto rounded-lg relative about-image-container">
                        <img src={aboutImg} alt="my image" className="w-full h-auto rounded-lg about-img" />
                    </div>
                </div>
                <div className="flex-1">
                    {/* <h1 className="hidden lg:block w-full text-left text-4xl font-semibold tracking-tighter break-words mb-10">
                        Introduction
                    </h1> */}
                    <p className="w-full leading-8 mt-10 text-justify">
                        Hello, {"I'm"} Maharib, a skilled MERN stack web developer. With a passion for creating seamless digital experiences, I specialize in crafting efficient and user-friendly applications. My expertise spans MongoDB, Express.js, React, and Node.js, allowing me to deliver end-to-end solutions. I thrive on challenges, continuously learn, and am committed to turning your ideas into powerful online realities. {"Let's"} collaborate and build something extraordinary.
                    </p>
                </div>
            </div>
            <AboutWork />
        </section>
    );
};

export default About;