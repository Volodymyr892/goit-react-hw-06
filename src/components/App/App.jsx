import contact from '../../contact.json'
import {useState, useEffect } from 'react'
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css'

export default function App(){
    const [contacts, setContacts] = useState(() => {
            const savedContacts = localStorage.getItem('contacts');
            return savedContacts ? JSON.parse(savedContacts) : contact;
        });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (newContact) =>{
        setContacts((prevContacts)=>{
            return[...prevContacts, newContact ]
        })}
    
    const deleteContact =(contactId)=> {
        setContacts((prevContacts)=>{
            return prevContacts.filter(contact => contact.id !== contactId)
        }

        )
    }

    const visibleContacts = contacts.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase()))

    return(
        <div className={css.appContainer}>
         <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addContact}/>
        <SearchBox value={filter} onFilter={setFilter}></SearchBox>
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </div>
    )
}