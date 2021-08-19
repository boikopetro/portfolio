import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css';
import Title from "../common/components/title/Title";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title text={"Petro Boiko"}/>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div>
                    <p>Copyright © 2021.</p>
                    <p>All rights reserved.</p>
                </div>

            </div>
        </div>
    );
}

export default Footer;
