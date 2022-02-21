import { useCallback, useEffect, useState } from 'react';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo/SearchPageInfo';
import { API_SEARCH } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { getApiResource } from '../../utils/network';
import { debounce } from 'lodash';
import UiInput from '../../components/Ui/UiInput/UiInput';
import styles from './SearchPage.module.css';


const SearchPage = ({setErrorApi}) => {

    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

  
    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH+param);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img,
                }
            });

            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }
    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    );

    const handleInputChange = value => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }


    return (
        <>
           <h1 className="header__text">Search</h1>
           <UiInput
                defaultValue={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input characters's name"
                classes={styles.input__search}
            />
            <SearchPageInfo people={people} />
        </>
    );
};

export default withErrorApi(SearchPage);
