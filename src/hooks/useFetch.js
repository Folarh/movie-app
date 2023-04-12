import {useState, useEffect} from 'react'

export  function useFetch(url) {
    const [data, setData]= useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
 

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try{
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error(res.statusText)
                }
               
                const json = await res.json()
                setLoading(false)
                setData(json)
            } catch(err){
                setLoading(false)
                setError("couldnt fetch data")
               
            }
           
        }
        fetchData()
    },[url])
    return {data, error, loading}
}