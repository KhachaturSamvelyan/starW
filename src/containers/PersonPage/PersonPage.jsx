import { getApiResource } from '../../utils/network';
import React , { useState, useEffect, Suspense } from 'react';
import { useParams } from "react-router-dom";
import styles from './PersonPage.module.css';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getPeopleImage } from '../../services/getPeopleData';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonLinkBack from '../../components/PeoplePage/PersonLinkBack/PersonLinkBack';
import UiLoading from '../../components/Ui/UiLoading/UiLoading';
import { useSelector } from 'react-redux';

const PersonFilms = React.lazy(() => import('../../components/PersonPage/PersonFilms/PersonFilms'));




const PersonPage = ({setErrorApi}) => {


    const storeDate = useSelector(state => state.favorite.favs);

    const [personId, setPersonId] = useState(null);

    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);


    const  {id} = useParams();

   
    
    useEffect(() => {
        (async () => {
            
            let isFav = storeDate.some(item=> item.id === id)
           
            setPersonFavorite(isFav)

            setPersonId(id)

            const res = await getApiResource(`${API_PERSON}/${id}/`);

            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);

                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, []);


    return (
        <>
            <PersonLinkBack/>
           <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                
                <div className={styles.container}>
                    <PersonPhoto
                        personId={personId}
                        personPhoto={personPhoto}
                        personName={personName}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} />}

                    {personFilms && (
                        <Suspense fallback={<UiLoading />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    )}
                </div>


            </div>
        </>
    );
    
};

export default withErrorApi(PersonPage);