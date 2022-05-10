import React from 'react';



const Cards = (props) => {
    return (
        <div className='card--container'>
            <img src={props.imageUrl} className="card--image" alt=""/>
            <div className='card--details'>
                <div className='card--location'>
                    <img src="images/cursor.png" className="card--cursor" alt=""/>                    
                    <h4 className="card--country">{props.location.toUpperCase()}</h4>
                    <a href={props.googleMapsUrl} className="card--maps">View on Google Maps</a>
                </div>
                <h1 className='card--title'>{props.title}</h1>
                <h5 className='card--date'>{props.startDate} - {props.endDate}</h5>
                <p className='card--descr'>{props.description}</p>
            </div>
        </div>
    );
};

export default Cards;