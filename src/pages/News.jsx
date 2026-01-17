import React, { useState } from 'react'
import {useEffect} from 'react'
import { Wrapper } from '../components/wrapper'
import api from '../config/axios'
import { useNewsContext } from '../context/NewsContext'


export const News = ({className}) => {

  const {news , setNews, fetchNews , page , nextPage , prevPage , pageSize} = useNewsContext();

  return (
    <Wrapper>
      <div className={`grid grid-cols-3 gap-4 ${className}`}>
      
        {news.map((newsDetails, index)=>{
          if (!newsDetails.urlToImage) return null;
          return(
            <NewsCard key={index} details={newsDetails}/>
          )
        })}
      </div>  
    </Wrapper>
  )
}


const NewsCard =(details)=>{
    console.log(details);
    return(
        <>
            <div className="card bg-base-300 shadow-sm">
                <figure>
                    <img className='aspect-video object-cover w-full'
                    src={details.details?.urlToImage || 'https://logoeps.com/wp-content/uploads/2014/05/21601-news-logo-icon-vector-icon-vector-eps.png'}
                    alt="Image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title line-clamp-2">{details.details?.title}</h2>
                    <p className="line-clamp-3">{details.details?.description}</p>
                    <div className="card-actions justify-end">
                    <button onClick={()=>window.open(details.details?.url)}   className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}