import css from './SearchBox.module.css'
export default function SearchBox({value,onFilter}){
    return(
        <>
        <p className={css.label}>Find contacts by name</p>
        <input className={css.input} type="text" value={value} onChange={(event)=>onFilter(event.target.value)}/>
        </>
    )
}