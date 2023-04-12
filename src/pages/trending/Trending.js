import React from 'react'
import {useFetch} from '../../hooks/useFetch'
import SingleTrend from '../../components/SingleTrend'

import './Trending.css'

export default function Trending() {
  const base = "77e46ec02c5fe30ee5cbc9c23bdd0344"
  const url =`https://api.themoviedb.org/3/trending/all/week?api_key=${base}`
 const {data:trends, error, loading}= useFetch(url)


  return (
    <div className='trendig-page'>
     <h2 className='page-title'>Trending</h2>
     <div className="the-trends">
     {error && <div>{error}</div>}
     {loading && <div>loading...</div>}
     {trends && trends.results.map((trend)=> 
     <SingleTrend trend={trend} key={trend.id} />)}
     </div>
    
    
    
    </div>
  )
}
