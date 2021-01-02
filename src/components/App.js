import React, {useState, useEffect} from 'react'
import Form from './Form'
import Header from './Header'
import ListNews from './ListNews'

export default function App() {
  const [category, setCategory] = useState('general');
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([])
  
  useEffect(() => {
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f6593341de1149699b2a6348df14b365&category=${category}`
    const requestAPI = async() => {
      const request = await fetch(URL)
      const response = await request.json()
      setNews(response.articles)
      setLoading(false)
    } 
    setLoading(true)
    requestAPI()
  },[category])

  return (
    <>
      <Header
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        {loading && 'loading'}
        <Form saveCategory = {setCategory}/>
        <ListNews news={news} />
      </div>
    </>
  )
}
