import css from './Contact.module.css'
export default function Contact({name:{id, name, number}, onDelete}){
    return(
        <div className={css.contactContainer}>
            <div className={css.nameNumber}>
                <div>
                    <p className={css.name}>{name}</p>
                    <p className={css.number}>{number}</p>
                </div>
            <button className={css.button} onClick={()=> onDelete(id)}>Delete</button>
            </div>
        </div>
    )
}