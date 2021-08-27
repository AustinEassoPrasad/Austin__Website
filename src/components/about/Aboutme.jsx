import "./aboutme.scss";
import CircleBar from "./CircleBar";


export default function Aboutme() {

  return (
    <div className="aboutme" id="aboutme">
      <div className="left">
          <h1>Hey There !</h1>
      <h2>More About Me..</h2>
      <h3><ul class="a">
         <li>● Studied at St Thomas Central School, Mukkolakkal, and currently studying as a Mechanical Engineering student from MBCET, Trivandrum.
         </li>
         <li>● Aspiring to be a Marine Engineer and part-time Website Developer and Video Creator.
         </li>
         <li>●  I am good at Editing and Website Development Skills.
         </li>
          </ul></h3>
          <h2>My SkillSet</h2>
          <CircleBar />
      <div>
      <a href="#portfolio" id="down">
      <img src="assets/down.png" alt="" /> </a></div>
      </div>
      <div className="right">
      <img src="assets/aboutme.png" alt="" />
      </div>
    </div>
  );
}
