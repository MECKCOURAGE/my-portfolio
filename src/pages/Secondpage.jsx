import Project from "../components/Project"
import projectDetails from "../data.json"
export default function Secondpage() {
    return (
        <div className=" bg-customGreen">
            <div className="text-center">
                <h1 className="font-semilight text-[55px] text-gray font-robotoCondensed">My Work</h1>
                <h3 className="font-light text-gray text-[16px]">A collection of Projects I've worked on.</h3>
            </div>
            <div className="p-6 flex flex-wrap">
                {projectDetails.map(project => (
                    <li key={project.name} className="list-none w-full md:w-1/3 md:p-[8px]">
                        <Project project={project} />
                    </li>
                ))}
            </div>

        </div>

    )
}