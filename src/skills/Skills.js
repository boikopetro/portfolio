import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"HTML"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}/>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;
