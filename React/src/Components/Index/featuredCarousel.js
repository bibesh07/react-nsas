import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: 'https://wallpapercave.com/wp/Ucd24NF.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
    },
    {
        src: 'https://i.ytimg.com/vi/IOfjY8gxbnM/maxresdefault.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header'
    },
    {
        src: 'https://media.istockphoto.com/videos/himalayas-mountain-landscape-timelapse-video-id637336408?s=640x640',
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header'
    }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;