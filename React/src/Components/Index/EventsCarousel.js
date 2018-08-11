import React, { Component } from 'react';
import Slider from "react-slick";
import { Spin } from 'antd';
import { Card, Icon } from "antd";
import axios from 'axios';

const { Meta } = Card;

export class EventsCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            futureEvents: [],
        }

        axios('http://localhost:58708/api/events/GetFutureEvents')
            .then(response => {
                this.setState({futureEvents: response.data, loading:false})
                console.log(response.data);
            })
    }

    static loadFutureEvents = (events, props) => {
        return(
            <div>
                <Slider {...props}>
                    {events.map(event =>
                        <div key={event.id}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://thewallpaper.co/wp-content/uploads/2016/01/hd-nature-images-organic-plants-fresh-air-widescreen-wallpapers-desktop-images-plant-background-images-organic-life-1920x1140.jpg" />}
                            >
                                <Meta
                                    title={event.eventName}
                                />
                                <br/>
                                <p> <Icon type="environment" />&nbsp;Location: {event.location}</p>
                                <p> <Icon type="clock-circle-o" />&nbsp;Event Start Date: {event.eventStartDate} </p>
                                <p> <Icon type="clock-circle" />&nbsp;Event End Date: {event.eventEndDate} </p>
                            </Card>
                        </div>
                    )}
                </Slider>
            </div>
        );
    }

    render() {
        const loading= (
            <div className="text-center"><Spin/></div>
        );
        let futureEvents = this.state.loading ? loading : EventsCarousel.loadFutureEvents(this.state.futureEvents, this.props.settings);
        return(
            <div className="EventsCarousel">
                {futureEvents}
            </div>
        );
    }
}