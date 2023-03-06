import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/aboutMe.module.css";
import { base_url, period_month } from "../utils/constants";
import { Hero } from "../utils/types";

const AboutMe = () => {
  const [hero, setHero] = useState<Hero>();
  const { heroId } = useParams();
  console.log(heroId);
  useEffect(() => {
    const hero = JSON.parse(
      localStorage.getItem(heroId ? `freind${heroId}` : "hero")!
    );
    if (hero && Date.now() - hero.time < period_month) {
      setHero(hero.payload);
    } else {
      fetch(`${base_url}/v1/peoples/${heroId ? heroId : 1}`)
        .then((response) => response.json())
        .then((data) => {
          const hero = {
            name: data.name,
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color,
            birth_year: data.birth_year,
            gender: data.gender,
          };
          setHero(hero);
          const info = {
            payload: hero,
            time: Date.now(),
          };
          localStorage.setItem(`hero_${heroId}`, JSON.stringify(info));
        });
    }
    return () => console.log("AboutMe unmounted");
  }, [heroId]);

  return (
    <div>
      {hero && (
        <div className={`farGalaxy ${styles.hero_box}`}>
          <p>
            <span className={styles.hero_titles}>name:</span> {hero.name}
          </p>
          <p>
            <span className={styles.hero_titles}>height:</span> {hero.height}
          </p>
          <p>
            <span className={styles.hero_titles}>birth year:</span>{" "}
            {hero.birth_year}
          </p>
          <p>
            <span className={styles.hero_titles}>gender:</span> {hero.gender}
          </p>
          <p>
            <span className={styles.hero_titles}>mass:</span> {hero.mass}
          </p>
          <p>
            <span className={styles.hero_titles}>hair color:</span>{" "}
            {hero.hair_color}
          </p>
          <p>
            <span className={styles.hero_titles}>skin color:</span>{" "}
            {hero.skin_color}
          </p>
          <p>
            <span className={styles.hero_titles}>eye color:</span>{" "}
            {hero.eye_color}
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
