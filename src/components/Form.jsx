import React, { useState } from 'react'

const Form = ({ setCamera, setSol, setEarthDate }) => {

    const options = [

        { value: '', name: 'All' },
        { value: 'fhaz', name: 'Front Hazard Avoidance Camera' },
        { value: 'rhaz', name: 'Rear Hazard Avoidance Camera' },
        { value: 'mast', name: 'Mast Camera' },
        { value: 'chemcam', name: 'Chemistry and Camera Complex' },
        { value: 'mahli', name: 'Mars Hand Lens Imager' },
        { value: 'mardi', name: 'Mars Descent Imager' },
        { value: 'navcam', name: 'Navigation Camera' },
        { value: 'pancam', name: 'Panoramic Camera' },
        { value: 'minites', name: 'Miniature Thermal Emission Spectrometer (Mini-TES)' },

    ]
    const [filter, setFilter] = useState('')
    const [number, setNumber] = useState(0)
    const [date, setDate] = useState('')

    const handleChange = e => {
        e.preventDefault();
        setSol(number);
        setEarthDate(date);
        setCamera(filter);
    }

    return (
        <form onSubmit={handleChange}>
            <div className='d-flex justify-content-between column my-3 align-items-end'>
                <div className='col-3 my-3'>
                    <label className="form-label col-auto">Filter by camera</label>
                    <select
                        className="form-select col-auto"
                        onChange={e => setFilter(e.target.value)}
                        value={filter}
                    >
                        {options.map((option, i) => <option key={i++} value={option.value}>{option.name}</option>)}
                    </select>
                </div>
                <div className='col-3 my-3'>
                    <input className="form-control col-auto" placeholder='Set SOL (number)' type="number" name="SOL" id="" onChange={e => setNumber(e.target.value)} />
                </div>
                <div className='col-3 my-3'>
                    <label className="form-label col-auto">Search by date</label>
                    <input className="form-control col-auto" placeholder='Set Date' type="date" name="date" id="" onChange={e => setDate(e.target.value)} />
                </div>
            </div>
            <div className="d-flex justify-content-center mb-3">
                <button type="submit" className='btn btn-primary' >Search</button>
            </div>
        </form>
    )
}

export default Form