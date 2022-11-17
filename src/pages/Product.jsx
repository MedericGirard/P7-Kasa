import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import Gallery from '../components/Gallery';
import styles from './Product.module.scss';
import Avatar from '../components/Avatar';
import Stars from '../components/Stars';
import Tag from '../components/Tag';
import Collapse from '../components/Collapse';

function Fiche() {
    let { id } = useParams();
    const [logements, setLogements] = useState([]);

    useEffect(function () {
        fetch('../src/assets/logements.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        setLogements(data[i]);
                    }
                }
            });
    }, []);

    if (logements.id != id) {
        return <NotFound />;
    } else {
        return (
            <div className={`${styles.product}`}>
                <div className={`${styles.product_caroussel}`}>
                    <Gallery img={logements.pictures} />
                </div>
                <div className={`${styles.product_presentation}`}>
                    <div className={`${styles.product_header}`}>
                        <div>
                            <h2 className={`${styles.product_title}`}>
                                {logements.title}
                            </h2>
                            <p className={`${styles.product_subtitle}`}>
                                {logements.location}
                            </p>
                        </div>
                        <div className={`${styles.main_container_tag}`}>
                            {logements.tags.map((data) => (
                                <Tag content={data} key={data} />
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.main_container_avatar}`}>
                        <div>
                            <Avatar
                                name={logements.host.name}
                                picture={logements.host.picture}
                            />
                        </div>
                        <div className={`${styles.main_container_stars}`}>
                            <Stars rating={logements.rating} key={id} />
                        </div>
                    </div>
                </div>
                <div className={`${styles.collapse}`}>
                    <div className={`${styles.collapse_left}`}>
                        <Collapse
                            title="Description"
                            content={logements.description}
                        />
                    </div>
                    <div className={`${styles.collapse_right}`}>
                        <Collapse
                            title="Equipement"
                            content={
                                <ul>
                                    {logements.equipments.map((equipment) => (
                                        <li key={equipment}>{equipment}</li>
                                    ))}
                                </ul>
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Fiche;
