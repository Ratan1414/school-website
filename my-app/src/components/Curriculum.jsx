import React from 'react'
import computer from "../assets/computer.png"
import language from "../assets/language.png"
import image from "../assets/image.png"
import Group from "../assets/Group.png"
import science from "../assets/science.png"
import tabla from "../assets/tabla.png"
function Curriculum() {
    return (
        <>
            <div className="cir_main">
                <div className="cir_block">
                    <img src={language} alt="English" />
                    <p className="cir_conte">English</p>
                </div>
                <div className="cir_block">
                    <img src={tabla} alt="Gurmat Sangeet" />
                    <p className="cir_conte">Gurmat Sangeet</p>
                </div>
                <div className="cir_block">
                    <img src={image} alt="Mathematics" />
                    <p className="cir_conte">Mathematics</p>
                </div>
                <div className="cir_block">
                    <img src={Group} alt="Hindi Marathi" />
                    <p className="cir_conte">Hindi Marathi</p>
                </div>
                <div className="cir_block">
                    <img src={computer} alt="Computers" />
                    <p className="cir_conte">Computers</p>
                </div>
                <div className="cir_block">
                    <img src={science} alt="EVS" />
                    <p className="cir_conte">EVS</p>
                </div>
            </div>
        </>
    )
}

export default Curriculum