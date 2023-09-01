import React from 'react';
import { NavLink } from 'react-router-dom';
import Showdata from './Showdata'

const Cards = (props) => {
    return (
        <div className="col-md-4 col-10 mx-auto">
        <div className="card">
            <img src={props.imgs} className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <NavLink to="" className="btn btn-primary">Explore</NavLink>
           </div>
        </div>  
        </div>     
    )
}

export default Cards;