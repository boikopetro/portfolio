import style from './Project.module.css';



function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.imgContainer} style={props.style}>
                <button className={style.button}>Try for free</button>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    );
}

export default Project;
