
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hook';
import { useEffect, useState, useRef } from 'react';
import * as searchServices from '~/service/searchService';

import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {

        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        // setLoading(true);

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    // axios.get(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`, {
    // request.get('users/search', {
    //     params: {
    //         q: debouncedValue,
    //         type: 'less'
    //     }
    // })
    //     .then(res => {
    //         // setSearchResult(res.data);
    //         setSearchResult(res.data);
    //         setLoading(false)
    //     })
    //     .catch(() => {
    //         setLoading(false);
    //     })

    // const fetchApi = async () => {
    //     try {
    //         const res = await request.get('users/search', {
    //             params: {
    //                 p: debouncedValue,
    //                 type: 'less'
    //             },
    //         });
    //         setSearchResult(res.data);
    //         setLoading(false);
    //     } catch (error) {
    //         setLoading(false);
    //     }

    // }
    // fetchApi();


    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    }

    return (
        <div>
            <HeadlessTippy
                interactive
                onClickOutside={handleHideResult}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => { setShowResult(true) }}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')}
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;