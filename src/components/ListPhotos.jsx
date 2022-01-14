import React from 'react'
import Pic from './Pic'

const ListPhotos = ({ photos }) => {

    return (
        <div className='col-12 p-2 m-0 row align-self-center'>
            {
                photos.length
                    ? (photos.map(p => <Pic key={p.id} p={p} />))
                    : (<p className='container text-center'>No Data</p>)
            }
        </div>
    )
}

export default ListPhotos
