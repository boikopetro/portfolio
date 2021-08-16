import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form>
                    <input></input>
                    <input></input>
                    <textarea></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;