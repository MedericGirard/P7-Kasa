import React from 'react';
import styles from './Home.module.scss';
import Thumb from '../components/Thumb';
import Banner from '../components/Banner';
import bannerImage from '../assets/banner_home.png';
import donnee from '../assets/logements.json';

function Home() {
    return (
        <div className={`${styles.body}`}>
            <Banner
                bannerImage={bannerImage}
                title="Chez vous, partout et ailleurs"
            />
            <div className={`${styles.gallery}`}>
                {donnee.map((data) => (
                    <Thumb key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
}

export default Home;
