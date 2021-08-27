import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
          Austin
          </a>
          <div className="itemContainer">
            <span><a href="tel:+91 9074710930"><Person className="icon" /></a></span>
          </div>
          <div className="itemContainer">
            <span><a href="mailto:austineassoprasad2001@gmail.com"><Mail className="icon" />   </a></span>
          </div>
          <div className="itemContainer">
            <span><a href="https://www.instagram.com/austin_easso" target="_blank" rel="noopener noreferrer"><InstagramIcon className="icon" />   </a></span>
          </div>
          <div className="itemContainer">
            <span><a href="https://github.com/AustinEassoPrasad" target="_blank" rel="noopener noreferrer"><GitHubIcon className="icon" />   </a></span>
          </div>
          <div className="itemContainer">
            <span><a href="https://www.linkedin.com/in/austine-easso-prasad-a9ab121ba" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="icon" />   </a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
