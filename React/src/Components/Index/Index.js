import React, { Component } from 'react';
import { EventsCarousel } from './EventsCarousel.js';
import { PastEventsCarousel } from './PastEventsCarousel.js';
import { PanelMembers } from './PanelMembers.js';
import Typist from 'react-typist';
import Example from './featuredCarousel.js';

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const org_name = ['Nepalese', 'Student', 'Associtation', 'At', 'Southeastern'];

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

export class Index extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div id="first-half" className="container">
                    <div className="row">
                        <div id="nsasName" className="col-md-5 text-center">
                            <Typist cursor={{ show: false }}>
                                {org_name.map(org =>
                                    <div key={org}>
                                        <h1>{org}</h1>
                                        <Typist.Delay ms={500} />
                                    </div>
                                )}
                            </Typist>
                        </div>
                        <div id="featuredCarouselStyle" className="col-md-7">
                            <Example />
                        </div>
                    </div>
                </div>
                <div className="second-half container">
                    <div className="row">
                        <div className="col-sm-8" id="detail">
                            <div className="card" id="nsas-detail">
                                <div className="card-header text-center"><h2 id="nsas-detail-h2">Who we are?</h2></div>
                                <div className="card-body">
                                    <p className="card-text ">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                                        and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                                        Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                                        Cicero are also reproduced in their exact original form
                                    </p>
                                </div>
                            </div>
                            <img id="southeasternLogo" src="http://content.sportslogos.net/logos/34/839/full/djhfu1hzmvj9oesvsdsn.png"/>
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
                        <EventsCarousel settings={settings} />
                    </div><br /><br /><hr />
                    <h3 className="text-center"> Previous Events </h3>
                    <hr />
                    <div className="container-fluid">
                        <PastEventsCarousel settings={settings} />
                    </div>
                </div>
                <br />
            </div>
        );
    }
}