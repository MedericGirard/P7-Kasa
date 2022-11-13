import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import Thumb from '../components/Thumb';
import Banner from '../components/Banner';

import bannerImage from '../assets/banner_home.png';

function Home() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        fetch('../src/assets/logements.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLogements(data);
            });
    }, []);

    return (
        <div className={`${styles.body}`}>
            <Banner
                bannerImage={bannerImage}
                title="Chez vous, partout et ailleurs"
            />
            <div className={`${styles.gallery}`}>
                {logements.map((data) => (
                    <Thumb key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
}

export default Home;
