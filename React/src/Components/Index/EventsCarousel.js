import React, { Component } from 'react';
import Slider from "react-slick";
import { Card, Icon } from "antd";

const { Meta } = Card;

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

export class EventsCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Slider {...settings}>
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
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
      </div>
    );
  }
}