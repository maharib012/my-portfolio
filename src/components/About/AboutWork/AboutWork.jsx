import { FaCalendarAlt } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import CountUp from 'react-countup';
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const AboutWork = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="px-5 lg:px-[60px] xl:px-3">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 bg-gray-900 py-7 rounded-lg text-xl">
                    <div className="w-full flex flex-col items-center gap-2">
                        <FaCalendarAlt className="" />
                        <h2 className="w-full text-center">
                            {
                                counterOn && <CountUp start={0} end={100} duration={1} delay={0} />
                            }
                        </h2>
                        <p className="w-full text-center ">months of experience</p>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2 my-10 md:my-0">
                        <FaTasks />
                        <h2 className="w-full text-center">
                            {
                                counterOn && <CountUp start={0} end={100} duration={1} delay={0} />
                            }
                        </h2>
                        <p className="w-full text-center">projects completed</p>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2">
                        <GrUserManager />
                        <h2 className="w-full text-center">
                            {
                                counterOn && <CountUp start={0} end={100} duration={1} delay={0} />
                            }
                        </h2>
                        <p className="w-full text-center">happy clients</p>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default AboutWork;