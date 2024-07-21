
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </>
  );
}
