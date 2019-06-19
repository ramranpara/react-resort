import React from 'react'
import {useContext} from "react";
import {RoomContext} from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (item,value)=>{
    return [...new Set(item.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {handleChange,
            type,
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast,
            pets
    } = context;

    //get unique types
    let types = getUnique(rooms, 'type');
    // add 'all'
    types = ['all', ...types];
    //map to jsx
    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                    name="type"
                     id="type"
                      value={type}
                      className="form-control"
                      onChange={handleChange}
                      >
                    {types}
                    </select> 
                </div>
                {/* end select type */}
                 {/* guest */}
                 <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select 
                    name="capacity"
                     id="capacity"
                      value={capacity}
                      className="form-control"
                      onChange={handleChange}
                      >
                    {people}
                    </select> 
                </div>
                {/* end guest  */}
                {/* price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                   <input type="range" min={minPrice} max={maxPrice} 
                   onChange={handleChange} value={price} name="price" id="price" className="form-control"/>
                </div>
                {/* end price  */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" onChange={handleChange} value={minSize}
                         name="minSize" id="size" className="size-input"/>
                        <input type="number" onChange={handleChange} value={maxSize}
                         name="maxSize" id="size" className="size-input"/>
                    </div>    
                </div>
                {/* end size  */}
                 {/* size */}
                 <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast"
                        checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets"
                        checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end size  */}
            </form>
        </section>
    )
}
