import React, { Component } from 'react';
import { EventsCarousel } from './EventsCarousel.js';
import { Image, Carousel } from 'react-bootstrap';
import { PanelMembers } from './PanelMembers.js';
import { Route, Link} from 'react-router-dom';
import { PhotosSideSheet } from './PhotosSideSheet.js';

const NepalFlag = () => (
  <Image id="nepal-flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_4-3%29.svg/220px-Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_4-3%29.svg.png" />
);

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

export class Index extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="first-half text-center">
          <h1 className="animated lightSpeedIn heading">
            <p className="animated nepal-text"> <NepalFlag /> <strong> Nepalese </strong>&nbsp;&nbsp;&nbsp;
            <NepalFlag /></p>
            Student Assosciation At Southeastern </h1>
          {this.NepalFlag}
          <h4 className="animated rollIn text-center"> Student organization of Nepalese Student</h4>
          <div className="featured-image">
            <Carousel>
              <Carousel.Item>
                <img className="carousel-image" alt="900x500" src="https://www.pixelstalk.net/wp-content/uploads/images1/Ama-dablam-peak-nepal-HD-backgrounds.jpg" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img alt="900*500" className="carousel-image" src="https://www.desktopbackground.org/download/o/2014/08/28/816396_hd-wallpapers-nepal-wallpapermonkey-com_1920x1080_h.jpg" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="carousel-image" alt="900x500" src="https://thewallpaper.co/wp-content/uploads/2016/01/hd-nature-images-organic-plants-fresh-air-widescreen-wallpapers-desktop-images-plant-background-images-organic-life-1920x1140.jpg" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
        </div>

        <Link to="/ViewPhotos" className="btn btn-success btn-block btn-lg">View all Photos</Link>
        <Route path="/ViewPhotos" component={PhotosSideSheet} />
        <br />

        <div className="second-half container">
          <div className="row">
            <div className="col-sm-8">
              <div className="card nsas-detail">
                <div className="card-header text-center"><h2 id="nsas-detail-h2">Who we are?</h2></div>
                <div className="card-body">
                  <p className="card-text ">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                        Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                        Cicero are also reproduced in their exact original form
                    </p>
                </div>
              </div>
            </div>

            <div className="text-center col-sm-4">
              <div className="fb-page" data-href="https://www.facebook.com/Slunsas" data-tabs="timeline"
                data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
                data-show-facepile="true"><blockquote cite="https://www.facebook.com/Slunsas"
                  className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Slunsas">Nepalese Student
              Association at Southeastern Louisiana University (NSAS)</a></blockquote></div>
            </div>
          </div>
        </div>
        <br />
        <PanelMembers />
        <br />

        <div className="third-half">
          <h3 className="text-center"> Upcoming Events </h3>
          <hr />
          <div className="container-fluid">
            <EventsCarousel />
          </div>
        </div>
        <br />
      </div>
    );
  }
}