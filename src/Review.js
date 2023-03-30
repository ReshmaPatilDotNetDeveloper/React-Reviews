import React, { useState } from 'react'
import reviews from './data';
import {FaChevronRight,FaChevronLeft,FaQuoteRight} from 'react-icons/fa';

function Review() {
    const[index,setIndex] = useState(0);
    const { name, image ,job, text } = reviews[index];
    const checkNumber = (number) =>{
        if(number > reviews.length -1)
            return 0;
        if(number < 0)
            return reviews.length -1;
        return number;
    }

    const prevNumber = () =>{
        setIndex((index)=>{
            let prevNum = index -1;
            return checkNumber(prevNum);
        })
    }

    const nextNumber = () =>{
        setIndex((index)=>{
            let nextNum = index + 1;
            return checkNumber(nextNum);
        })
    }

    const surpriseMe = () =>{
        let randomNumber = Math.floor(Math.random() * reviews.length);
        if(randomNumber == index){
            randomNumber = randomNumber + 1;
        }
        setIndex(checkNumber(randomNumber));
        
    }
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img'></img>
                <span className='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn'>
                    <FaChevronLeft onClick={prevNumber}/>
                </button>
                <button className='next-btn'>
                    <FaChevronRight onClick={nextNumber}/>
                </button>
            </div>
            <button className='random-btn' onClick={surpriseMe}>
                    Surprise Me
            </button>
        </article>
    )
}

export default Review
