import React, { useEffect, useState } from 'react'


export default function Explore() {
    const [articles, setArticles] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    const handleChange = (e) => {
        setSearchWord(e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const apiKey = '8c73e03c08e943579861c4b11e5c1584';
          const res = await fetch(`https://newsapi.org/v2/everything?q=${searchWord}&apiKey=${apiKey}`);
          const data = await res.json();
          setArticles(data.articles);
        } catch (error) {
          console.error('Error fetching articles:', error);
        }
      };
      useEffect(() => {
        const fetchDefaultArticles = async () => {
          try {
            const apiKey = '8c73e03c08e943579861c4b11e5c1584';
            const res = await fetch(`https://newsapi.org/v2/everything?q=viral&apiKey=${apiKey}`);
            const data = await res.json();
            setArticles(data.articles);
          } catch (error) {
            console.error('Error fetching default articles:', error);
          }
        };
    
        fetchDefaultArticles();
      }, []); 
    
  return (
    <div className='my-6'>
      <h1 className='font-bold text-2xl'>Explore</h1>
      <h2>News/Trends/Articles</h2>
      <form onSubmit={handleSubmit} className='mt-1'>
        <input
          type="text"
          className='border border-black p-2 hover:border-3 rounded-sm'
          placeholder="Enter search word"
          value={searchWord}
          onChange={handleChange}
        />
        <button type="submit" className='bg-blue-600 rounded-sm text-white ml-2 p-2 hover:shadow-md'>
          Search
        </button>
      </form>
      <ul>
        {articles?.map((article, index) => (
          <li className='p-5 border border-black flex flex-col my-4 shadow-md hover:bg-slate-100' key={index}>
            <h2><a className='font-bold hover:underline' href={article.url}>{article.title}</a></h2>
            <p className='text-gray-500'>Author: {article.author}</p>
            <p>{article.description}</p>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
