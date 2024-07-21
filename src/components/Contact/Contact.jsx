import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactContainer}>
      <div className={css.nameNumber}>
        <div>
          <p className={css.name}>{contact.name}</p>
          <p className={css.number}>{contact.number}</p>
        </div>
        <button className={css.button} onClick={() => dispatch(deleteContact(contact.id))}>
          Delete
        </button>
      </div>
    </div>
  );
}
