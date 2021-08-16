import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <a href=""><div className={style.icon}></div></a>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Project;
