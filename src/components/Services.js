import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails ",
                info:"Lorum ispum asfihen adoiuwe pouewr mnbxcvjha soiuqwnxcla sdkjler lkhasfnmnvx piouowe xdfjhweu"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Lorum ispum asfihen adoiuwe pouewr mnbxcvjha soiuqwnxcla sdkjler lkhasfnmnvx piouowe xdfjhweu"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info:"Lorum ispum asfihen adoiuwe pouewr mnbxcvjha soiuqwnxcla sdkjler lkhasfnmnvx piouowe xdfjhweu"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Lorum ispum asfihen adoiuwe pouewr mnbxcvjha soiuqwnxcla sdkjler lkhasfnmnvx piouowe xdfjhweu"
            }    
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                        <article key={index} className="service">
                             <span>{item.icon}</span>   
                             <h6>{item.title}</h6>
                             <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
