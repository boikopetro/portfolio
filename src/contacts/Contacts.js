import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
               <Title text={"Contacts"}/>
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

