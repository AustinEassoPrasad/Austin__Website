import React from "react";
import "./circlebar.css";


class CircleBar extends React.Component {
    render() {
        return(
            <div>
                <div class="container">
            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>90<span>%</span></h2>
                        </div>
                    </div>
                    <h2 class="text">HTML5</h2>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>85<span>%</span></h2>
                        </div>
                    </div>
                    <h2 class="text">CSS3</h2>
                </div>
            </div><div class="card">
                <div class="box">
                    <div class="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="number">
                            <h2>70<span>%</span></h2>
                        </div>
                    </div>
                    <h2 class="text">JS</h2>
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default CircleBar;