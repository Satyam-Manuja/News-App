import React from 'react'
import { Wrapper } from '../components/wrapper'
import {useNewsContext} from '../context/NewsContext'

export const Category = () => {
  const categories = ["India", "business", "entertainment", "general", "health", "science", "sports", "technology"]

  const {news , setNews, fetchNews} = useNewsContext();

  const handleChange = async(e) =>{
    const cat=e.target.value
    const data = await fetchNews(`/everything?q=${cat}`);
    setNews(data);
  }

  return (
    <Wrapper>
    <div className='w-fit m-auto overflow-x-auto gap-2 flex mt-4 mb-4'>
        {categories.map(el => { return( <button onClick={handleChange} key={el} value={el} className="btn btn-active">{el}</button>) })}
    </div>
    </Wrapper>
  )
}
