import React from "react";
import "./style.css";


class Footer extends React.Component {
render() {
    return(
            
        <footer>
        <div class="row">
            <div class="col">
                <img src="https://see.fontimg.com/api/renderfont4/K7GOD/eyJyIjoiZnMiLCJoIjoyMjMsInciOjEyNTAsImZzIjoxNzgsImZnYyI6IiNGRkZFRkUiLCJiZ2MiOiIjMDEwMTAxIiwidCI6MX0/QXVzdGlu/hendrickson.png" class="logo" alt=""/>
                            </div>
            <div class="col">
                <h3>Address <div class="underline"><span></span></div></h3>
                <p>Austin Easso Prasad</p>
                <p>Trivandrum, Kerala 695004</p>
                <a href="mailto:austineassoprasad2001@gmail.com" class="email-id">austineassoprasad2001@gmail.com</a>
                <hr/>
                <a href="tel:+91 9074710930" class="tel">+91 9074710930</a>
            </div>
            <div class="col">
                <h3>Links <div class="underline"><span></span></div></h3>
                <ul>
                    <li><a href="#intro">Home</a></li>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#works">Work</a></li>
                </ul>
            </div>
            <div class="col">
                <h3>Newletter <div class="underline"><span></span></div></h3>
                <form>
                    <i class="far fa-envelope"></i>
                    <input type="email" placeholder="Enter your Email ID" required/>
                    <button type="submit"><i class="fas fa-arrow-right"></i></button>
                </form> 
                <div class="social-icons">
                <a href="https://www.instagram.com/austin_easso" target="_blank" rel="noopener noreferrer"> <i class="fab fa-instagram"></i></a>
                  <a href="https://github.com/AustinEassoPrasad" target="_blank" rel="noopener noreferrer">  <i class="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/austine-easso-prasad-a9ab121ba" target="_blank" rel="noopener noreferrer">  <i class="fab fa-linkedin"></i></a>
                  <a href="https://api.whatsapp.com/send?phone=919074710930&text=Hello%F0%9F%99%82" target="_blank" rel="noopener noreferrer">  <i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <hr/>
        <p class="copyright">Austin © 2021 </p>
    </footer>

            );
        }
    }
    
export default Footer;