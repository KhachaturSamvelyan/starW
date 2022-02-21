import styles from './FavoritePage.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PeopleList } from '../../components/PeoplePage/PeopleList/PeopleList';


const FavoritePage = () => {

    const [people, setPeople] = useState([]);

    const arr = useSelector(state => state.favorite.favs);
  
    useEffect(()=>{
        setPeople(arr);
    },[])
    
    return (
        <div>
            <h1 className="header__text">Favorites</h1>
            {people.length
                ? <PeopleList people={people} />
                : <h2 className={styles.comment}>No data</h2>
            }
        </div>
    );
};

export default FavoritePage;