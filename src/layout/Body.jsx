import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import ListPhotos from '../components/ListPhotos'
import Loader from '../components/Loader'
import Paginator from '../components/Paginator'

const Body = () => {

    const [camera, setCamera] = useState('')
    const [sol, setSol] = useState(1000);
    const [page, setPage] = useState(1)
    const [earthDate, setEarthDate] = useState('')
    const [photos, setPhotos] = useState('')

    const searchAPI = async () => {
        const key = 'xNH4fXA8piWiwWTXE79GTuH4VX7ifE2CAXnicFYT';
        let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${key}`;

        earthDate ? url += `&earth_date=${earthDate}` : url += `&page=${page}`
        sol ? url += `&sol=${sol}&page=${page}` : url = url
        camera ? url += `&camera=${camera}` : url += `&page=${page}`
        const resp = await axios.get(url)

        setPhotos(resp.data.photos)
    }

    useEffect(() => {
        searchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [camera, page, sol, earthDate])

    return (
        <div className='container'>
            <Form setCamera={setCamera} setSol={setSol} setEarthDate={setEarthDate}></Form>
            {photos ? <ListPhotos photos={photos}></ListPhotos> : <Loader />}
            {photos.length ? <Paginator photos={photos} page={page} setPage={setPage} /> : null}
        </div>
    )
}

export default Body
