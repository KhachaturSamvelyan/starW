import styles from "./PeopleList.module.css";
import { Link } from 'react-router-dom';


export const PeopleList = ({ people }) => {
  return (
    <>
      <ul className={styles.list__container}>
        {people.map(({ id, img, name }) => {
          return (
            <li className={styles.list__item} key={id}>
              <Link to={`/people/${id}`}>
                <img className={styles.person__photo} src={img} alt="" />
                <p>{name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
