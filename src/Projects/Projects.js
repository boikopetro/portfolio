import style from "./Projects.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoList from "./../assets/images/todoLoist.png";
import socialNetwork from "./../assets/images/socialNetwork.png";


function Projects() {
    const social = {
        backgroundImage: `url(${socialNetwork})`
    }
    const todo = {
        backgroundImage: `url(${todoList})`
    }

    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <Title text={"Projects"}/>

                <div className={style.projects}>
                    <Project style={social} title={"Social network"} description={"Simple Social networkSimple Todo list Simple Todo list Simple Todo list"}/>
                    <Project style={todo} title={"Todo list"} description={"Simple Todo list Simple Todo listSimple Todo listSimple Todo list"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
