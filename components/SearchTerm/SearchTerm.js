import { useState } from 'react'
import styles from './SearchTerm.module.css'

const searchIconUrl = './icons/search.svg';
const clearIconUrl = './icons/close.svg'

const SearchTerm = () => {
    const [term, setTerm] = useState('');
    return (
        <div className={styles["search-container"]}>
            <img className={styles["search-icon"]} alt="s" src={searchIconUrl} />
            <input onChange={e => setTerm(e.target.value)} value={term}
                className={styles["search"]} placeholder="search" />
            {term.length > 0 && (
                <button
                    type="button"
                    onClick={ev => setTerm('')}
                    className={styles["search-clear-button"]} >
                    <img src={clearIconUrl} alt="x" />
                </button>
            )}
        </div>
    )
}


export default SearchTerm;
