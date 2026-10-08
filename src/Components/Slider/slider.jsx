import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from "../../images/deliveryBoy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Custom Next Arrow
function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        right: "0px",
        top:"140px",
        zIndex: 2,
      }}
    />
  );
}

// Custom Prev Arrow
function PrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        left: "0px",
        top:"140px",
        zIndex: 2,
      }}
    />
  );
}

export function MySlider() {
  const settings = {
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const users = [
    {
      img: user1,
      name: "Olivia Smith",
      review: <FontAwesomeIcon icon={faStar} />,
      description:
        "A quick fox jumps over the lazy dog. He is a very nice person, I always need this person — he really did everything for me all the time.",
    },
    {
      img: user1,
      name: "Olivia Smith",
      review: <FontAwesomeIcon icon={faStar} />,
      description:
        "A quick fox jumps over the lazy dog. He is a very nice person, I always need this person — he really did everything for me all the time.",
    },
    {
      img: user1,
      name: "Olivia Smith",
      review: <FontAwesomeIcon icon={faStar} />,
      description:
        "A quick fox jumps over the lazy dog. He is a very nice person, I always need this person — he really did everything for me all the time.",
    },
  ];

  return (
    <Slider {...settings}>
      {users.map((v, i) => (
        <div key={i} className="overflow-hidden">
          <div className="flex gap-[15px]">
            <img
              src={v.img}
              alt=""
              className="w-[50px] h-[50px] object-contain"
            />
            <div>
              <span className="font-bold text-[20px]">{v.name}</span>
              <div className="flex">
                <span className="text-yellow-400">{v.review}</span>
                <span className="text-yellow-400">{v.review}</span>
                <span className="text-yellow-400">{v.review}</span>
                <span className="text-yellow-400">{v.review}</span>
              </div>
            </div>
          </div>
          <p>{v.description}</p>
        </div>
      ))}
    </Slider>
  );
}
