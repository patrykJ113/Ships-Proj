import React from 'react';
import Styles from '../../styles/Cards.module.css'
import Skeleton from '../Skeleton/Skeleton';
import Card from './Card';

export default function CardContainer({ships , loading}) {
    
    if (loading) {
        return (
            <div className={Styles.CardsContainer}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        );
    } else {
        return (
            <div className={Styles.CardsContainer}>
                {
                    ships.map(ship => {
                            return (
                                    <Card key={ship.id} 
                                        details={ship.details} 
                                        mission_name={ship.mission_name} 
                                        flickr_images={ship.links.flickr_images[0]}
                                        launch_date_utc ={new Date(ship.launch_date_utc).toLocaleDateString("en-BZ")}
                                        id={ship.id}
                                        article_link={ship.links.article_link}
                                        favorite={ship.favorite}/>
                                         )
                    })
                }
            </div>
        );
    }
}
