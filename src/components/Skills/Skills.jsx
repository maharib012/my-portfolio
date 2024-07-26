const Skills = () => {
    return (
        <section id="skills" className="w-full pt-6 pb-10">
            <h1 className="w-full text-center text-4xl font-semibold tracking-tighter break-words mb-8">
                My Skills
            </h1>
            <div className="w-full flex justify-center gap-20 px-5 lg:px-16 xl:px-4">
                <div className="flex-1 bg-red-600">
                    <h1 className="w-full text-center text-xl font-bold">Frontend</h1>
                    <div>

                    </div>
                </div>
                <div className="flex-1 bg-green-600">
                    <h1 className="w-full text-center text-xl font-bold">Backend/Database</h1>
                </div>
            </div>
        </section>
    );
};

export default Skills;