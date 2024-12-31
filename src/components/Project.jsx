import { useState } from "react";

export default function Project({ project }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="md:p-[28px] p-[18px] md:m-[9px] mb-[9px] mt-[9px] bg-gray md:w-[400px] rounded-2xl shadow-md">
            <div className="flex justify-center">
                <button onClick={toggleModal}>
                    <div className="relative md:w-[330px] w-[300px] h-[170px] rounded overflow-hidden">
                        <img 
                            src={project.image} 
                            alt="" 
                            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110" 
                        />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray to-transparent"></div>
                    </div>
                </button>
            </div>
            <div className="mt-2 mb-2">
                <h1 className="text-[22px] font-semibold text-customGreen">{project.name}</h1>
            </div>
            <div>
                <p className="font-light text-[16px] h-[200px] text-customGreen">
                    {project.content}
                </p>
            </div>
            <div>
                <ul className="flex mt-[16px]">
                    <a target="_blank" rel="noopener noreferrer" href={project.link}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-customGreen ">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                    </a>
                    <a className="ml-[16px]" target="_blank" rel="noopener noreferrer" href={project.github}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-customGreen">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </ul>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={toggleModal}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={project.image} 
                            alt="Enlarged" 
                            className="md:w-[850px] md:h-[530px] w-[320px] h-[350px]"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
