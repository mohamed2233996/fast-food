import React from 'react';
import { Intro, Intro2, About, Video,Explore,Testimonials, Questions, Parallax, Subscribe } from '../sections/indx';


const Home = () => {
    return (
        <div>
            <Intro />
            <Intro2 />
            <About />
            <Video />
            <Explore />
            <Testimonials />
            <Questions />
            <Parallax />
            <Subscribe />
        </div>
    );
}

export default Home;
