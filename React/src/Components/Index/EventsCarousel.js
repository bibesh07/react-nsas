import React, { Component } from 'react';
import { Card, Icon } from "antd";
import Slider from 'react-slick';

const { Meta } = Card;

export class EventsCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
        futureEvents: [],
    }
  }

  render() {
    return (
        <div className="EventsCarousel">
            <Slider {...this.props.settings}>
                <div>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://pre00.deviantart.net/a01b/th/pre/i/2011/258/8/f/dashain_colorful_kites_by_lalitkala-d49w2gf.jpg" />}
                  >
                    <Meta
                      title="Dashain 2018"
                    />
                    <br/>
                    <p> <Icon type="environment" />&nbsp;Location: SGA Building</p>
                    <p> <Icon type="clock-circle-o" />&nbsp; Event Start Date: 7/26/2018 </p>
                    <p> <Icon type="clock-circle" />&nbsp;Event End Date: 7/26/2018 </p>
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://pre00.deviantart.net/a01b/th/pre/i/2011/258/8/f/dashain_colorful_kites_by_lalitkala-d49w2gf.jpg" />}
                  >
                    <Meta
                      title="Dashain 2018"
                    />
                    <br/>
                    <p> <Icon type="environment" />&nbsp;Location: SGA Building</p>
                    <p> <Icon type="clock-circle-o" />&nbsp;Event Start Date: 7/26/2018 </p>
                    <p> <Icon type="clock-circle" />&nbsp;Event End Date: 7/26/2018 </p>
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://pre00.deviantart.net/a01b/th/pre/i/2011/258/8/f/dashain_colorful_kites_by_lalitkala-d49w2gf.jpg" />}
                  >
                    <Meta
                      title="Dashain 2018"
                    />
                    <br/>
                    <p> <Icon type="environment" />&nbsp;Location: SGA Building</p>
                    <p> <Icon type="clock-circle-o" />&nbsp;Event Start Date: 7/26/2018 </p>
                    <p> <Icon type="clock-circle" />&nbsp;Event End Date: 7/26/2018 </p>
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://pre00.deviantart.net/a01b/th/pre/i/2011/258/8/f/dashain_colorful_kites_by_lalitkala-d49w2gf.jpg" />}
                  >
                    <Meta
                      title="Dashain 2018"
                    />
                    <br/>
                    <p> <Icon type="environment" />&nbsp;Location: SGA Building</p>
                    <p> <Icon type="clock-circle-o" />&nbsp;Event Start Date: 7/26/2018 </p>
                    <p> <Icon type="clock-circle" />&nbsp;Event End Date: 7/26/2018 </p>
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://pre00.deviantart.net/a01b/th/pre/i/2011/258/8/f/dashain_colorful_kites_by_lalitkala-d49w2gf.jpg" />}
                  >
                    <Meta
                      title="Dashain 2018"
                    />
                    <br/>
                    <p> <Icon type="environment" />&nbsp;Location: SGA Building</p>
                    <p> <Icon type="clock-circle-o" />&nbsp;Event Start Date: 7/26/2018 </p>
                    <p> <Icon type="clock-circle" />&nbsp;Event End Date: 7/26/2018 </p>
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://pre00.deviantart.net/a01b/th/pre/i/2011/258/8/f/dashain_colorful_kites_by_lalitkala-d49w2gf.jpg" />}
                  >
                    <Meta
                      title="Dashain 2018"
                    />
                    <br/>
                    <p> <Icon type="environment" />&nbsp;Location: SGA Building</p>
                    <p> <Icon type="clock-circle-o" />&nbsp;Event Start Date: 7/26/2018 </p>
                    <p> <Icon type="clock-circle" />&nbsp;Event End Date: 7/26/2018 </p>
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://pre00.deviantart.net/a01b/th/pre/i/2011/258/8/f/dashain_colorful_kites_by_lalitkala-d49w2gf.jpg" />}
                  >
                    <Meta
                      title="Dashain 2018"
                    />
                    <br/>
                    <p> <Icon type="environment" />&nbsp;Location: SGA Building</p>
                    <p> <Icon type="clock-circle-o" />&nbsp;Event Start Date: 7/26/2018 </p>
                    <p> <Icon type="clock-circle" />&nbsp;Event End Date: 7/26/2018 </p>
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://thewallpaper.co/wp-content/uploads/2016/01/hd-nature-images-organic-plants-fresh-air-widescreen-wallpapers-desktop-images-plant-background-images-organic-life-1920x1140.jpg" />}
                  >
                    <Meta
                      title="Dashain 2018"
                    />
                    <br/>
                    <p> <Icon type="environment" />&nbsp;Location: SGA Building</p>
                    <p> <Icon type="clock-circle-o" />&nbsp;Event Start Date: 7/26/2018 </p>
                    <p> <Icon type="clock-circle" />&nbsp;Event End Date:&nbsp; 7/26/2018 </p>
                  </Card>
                </div>
            </Slider>
        </div>
    );
  }
}