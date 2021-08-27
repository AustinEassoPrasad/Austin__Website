import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    
    {
      id: "",
      icon: "./assets/globe.png",
      title: "Web Application",
      desc:
        "Its a basic Counter Web Application",
      proj: "https://austineassoprasad.github.io/Counter__App/",
      img:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Web Application",
      desc:
        "Its a basic website background color changer Web Application written in Javascript",
      proj: "https://austineassoprasad.github.io/Colour__Picker/",
      img:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "QR Scanner Moblie Application",
      desc:
        "The App is Written in Kotlin Language and easy to use. ",
      proj: "https://github.com/AustinEassoPrasad/QR-Reader",
      img:
      "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 65}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.proj}><span>Projects</span></a>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="/assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="/assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
