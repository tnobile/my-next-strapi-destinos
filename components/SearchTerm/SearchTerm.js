import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from '../../features/searchTerm/searchTermSlice'

import styles from './SearchTerm.module.css'

const searchIconUrl = './icons/search.svg';
const clearIconUrl = './icons/close.svg'

const SearchTerm = () => {
    const term = useSelector(s => s.searchTerm);
    //const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    return (
        <div className={styles["search-container"]}>
            <img className={styles["search-icon"]} alt="s" src={searchIconUrl} />
            <input onChange={ev => dispatch(setSearchTerm(ev.target.value))} value={term}
                className={styles["search"]} placeholder="search" />
            {term.length > 0 && (
                <button
                    type="button"
                    onClick={ev => dispatch(clearSearchTerm())}
                    className={styles["search-clear-button"]} >
                    <img src={clearIconUrl} alt="x" />
                </button>
            )}
        </div>
    )
}


export default SearchTerm;
