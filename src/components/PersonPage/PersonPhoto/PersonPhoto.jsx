import styles from './PersonPhoto.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteDeleteReducer, favoriteReducer } from '../../../store/features/favorite/favoriteSlice';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';


const PersonPhoto = ({ personId,  personPhoto, personName, personFavorite, setPersonFavorite }) => {


    
    const dispatch = useDispatch();
    const dispatchFavoritePeople = () => {

        if (personFavorite) {
            dispatch(favoriteDeleteReducer(personId))
            setPersonFavorite(false);
        } else {
            dispatch(favoriteReducer({
                name: personName,
                img: personPhoto,
                id: personId
        }))
        setPersonFavorite(true);
        }
    }
    

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
                <img src={personFavorite ? iconFavoriteFill : iconFavorite} onClick={dispatchFavoritePeople} className={styles.favorite} alt="Add to favorite" />

            </div>
            
            

        </>
    )
}


export default PersonPhoto;