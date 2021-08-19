import styleContainer from './../common/styles/Container.module.css';
import style from './Main.module.css'
import myPhoto from "../assets/images/PetroBoikoNew.png";

function Main() {

    const photo = {
        backgroundImage: `url(${myPhoto})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am Petro Boiko</h1>
                    <p>Front-end Developer</p>
                </div>
                <div style={photo} className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
