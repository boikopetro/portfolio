import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";


function Projects() {
    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"Social network"} description={"Simple Social network"}/>
                    <Project title={"Todo list"} description={"Simple Todo list"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
