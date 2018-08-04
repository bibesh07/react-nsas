import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: "https://i.ytimg.com/vi/tuINnsTLkK8/mqdefault.jpg",
        thumbnail: "https://i.ytimg.com/vi/tuINnsTLkK8/mqdefault.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Dashain & Tihar night 2010 @ SELU Student Union"
},
{
        src: "https://i.ytimg.com/vi/k-MLE4VrYEE/maxresdefault.jpg",
        thumbnail: "https://i.ytimg.com/vi/k-MLE4VrYEE/maxresdefault.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Dance", title: "Dance"}, {value: "Girls", title: "Girls"}],
        caption: "Nepali Dance performance by Sneha & Apsana"
},
{
        src: "http://u100s.s3.amazonaws.com/articles_images/m4/1507050106764/image.jpg",
        thumbnail: "http://u100s.s3.amazonaws.com/articles_images/m4/1507050106764/image.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Found this somewhere in Youtube :p"
}]


export class PhotosSideSheet extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="animated fadeInRight abs col-md-12">
        <Link to="/" className="btn btn-danger btn-lg"> <Icon type="arrow-left" /> Go Back </Link>
        <h1 className="text-center"> Welcome to Photo Gallery </h1>
        <hr/>

        <Gallery images={IMAGES}/>
      </div>
    );
  }
}