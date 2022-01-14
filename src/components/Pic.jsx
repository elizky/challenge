import React from 'react'

const Pic = ({ p }) => {

    const { camera, img_src, rover } = p

    return (
        <div className="col-8 m-auto mb-4 align-self-center" >
            <div className="card">
                <a href={img_src}>
                    <img src={img_src} className="img-thumbnail" alt="..." />
                </a>
                <div className="card-body">
                    <p className="text-center text-wrap fst-italic fs-6">Taken by {rover.name} with {camera.full_name}.</p>
                </div>
            </div>
        </div>
    )
}

export default Pic
