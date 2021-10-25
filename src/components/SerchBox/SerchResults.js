import React from 'react';
import Styles from '../../styles/SerchResults.module.css';
import { Link } from 'react-router-dom';


export default function SerchResults({ ships , hideResults}) {
    
    return (
        <>
            <ul className={Styles.SerchResultUl}>
                {
                    ships.map(ship => (
                        <li className={Styles.SerchResultLi} key={ship.id}>
                            <a href={ship.links.video_link}  className={Styles.Link} onClick={hideResults}>{ship.mission_name}</a>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
