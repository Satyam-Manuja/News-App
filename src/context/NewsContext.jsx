import {createContext , useContext , useState , useEffect} from 'react';
import api from '../config/axios'

export const NewsContext = createContext();

export const NewsContextProvider = ({children}) =>{

    const [ news,setNews]= useState([]);

    const fetchNews = async(url='/everything?q=India') => {
    try{
      const res = await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`);
      console.log(res.data);

      return (res.data.articles || []);
    }
    catch(err){
    console.log("error while fetching news",err);
    }
};
    const value={
        news,
        setNews,
        fetchNews
    }
    useEffect(() => {
    const loadDefaultNews = async () => {
      const data = await fetchNews("/everything?q=India");
      setNews(data);
    };
    loadDefaultNews();
  }, []);

   
    return(
        <NewsContext.Provider value={{value , news , fetchNews , setNews}}>
            {children}
        </NewsContext.Provider>
    )
}

export const useNewsContext = () => {
    return useContext(NewsContext)
}