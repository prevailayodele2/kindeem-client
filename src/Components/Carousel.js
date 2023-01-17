import React, { Component } from "react";
import { Carousel, Button } from "antd";
import { IMAGE_BASE_URL } from "../../utils/constants";
// import { Text } from 'react-native';
class MainCarousel extends Component {
  onChange = (a, b, c) => { };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
    };
    const CarouselImages = [
      "https://media.istockphoto.com/id/480743480/photo/responsive-design-mockup.jpg?b=1&s=170667a&w=0&k=20&c=6RyOYLlbNVI5n3f8mqgPlDFxhRBDIxOP68l0Nta0VB0=",
"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcCUyMHdhbGxwYXBlciUyMG9mJTIwcGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
"https://media.istockphoto.com/id/1436056329/photo/office-still-life.jpg?b=1&s=170667a&w=0&k=20&c=4WQPq6c8KmzXSo1QwGp7kcpjfcdKRMfr_j0LBnGqpi8=",
"https://media.istockphoto.com/id/1124347647/photo/office-desktop-with-laptop-red-background-technology-concept.jpg?b=1&s=170667a&w=0&k=20&c=5fyLzNPbipwZIgkSq1Jx44DuroXhzSE_m09KV5qHAYg=",
"https://media.istockphoto.com/id/638765512/photo/laptop-and-tablet-pc-on-business-desk.jpg?s=612x612&w=0&k=20&c=apGrUj-I0Xxb9lrRkRzw7J5efuU-6cX7aRyqalriAbM=",
"https://media.istockphoto.com/id/628101664/photo/office-table.jpg?s=612x612&w=0&k=20&c=_l930D-7jJEHdlzixB3vM2XLUMGEHaQ9ZGAqTo5Z1MA=",
    ]
    return (
      <Carousel {...settings}>
        {
          CarouselImages.map((el, i)=>(
            <div className="img-text" key={i}>
            <div className="carousel-text">
              {/* <p style={{color: "#fff", fontSize: '50px', fontStyle: 'italic'}}>The Best user friendly app </p> */}
            </div>
            <img src={el} alt="banner" />
          </div>
          ))
        }
        {/* {this.props.data?.banners &&
          this.props.data?.banners?.map((banner, i) => {
            return (
              banner.link ?
                  <a href={banner.link} target="_blank" className="img-text" key={i}>
                    <div className="carousel-text"></div>
                    <img src={IMAGE_BASE_URL + '/' + banner.bannerPhoto} alt="banner" />
                  </a>
                 : (
                  <div className="img-text" key={i}>
                    <div className="carousel-text"></div>
                    <img src={IMAGE_BASE_URL + '/' + banner.bannerPhoto} alt="banner" />
                  </div>
                )
            );
          })} */}
      </Carousel>
    );
  }
}

export default MainCarousel;
