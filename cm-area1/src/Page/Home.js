import React from 'react';
import { HomeBanner } from "../Component/HomeComponent";
import { News } from "../Component/New";
import {Skills} from "../Component/Skill";
const Home = () => {

    return (
        <div className="">
        <HomeBanner />
        <Skills/>
        <News/>
        </div>

    );
}

export default Home;
