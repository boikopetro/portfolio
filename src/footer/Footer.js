import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css';


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Petro Boiko</h2>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <p>Copyright © 2021.</p>
                <p>All rights reserved.</p>
            </div>

        </div>
    );
}

export default Footer;
