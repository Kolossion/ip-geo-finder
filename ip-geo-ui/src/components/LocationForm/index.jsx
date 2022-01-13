import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import IpLocationInfo from '../IpLocationInfo'
import './LocationForm.css'

function LocationForm(props) {
    const [loading, setLoading] = useState(false)
    const [ipInput, setIpInput] = useState('')
    const [ipLocation, setIpLocation] = useState(null)
    const [error, setError] = useState(null)

    const changeIpInput = (e) => {
        setIpInput(e.target.value)
    }

    const searchIp = async (e) => {
        e.preventDefault()
        if (ipInput == null || ipInput === '') return;

        setError(null)
        setLoading(true)
        setIpLocation(null)

        const res = await fetch(`http://localhost:${process.env.REACT_APP_API_PORT}/location/` + ipInput)
        if (!res.ok) {
            const text = await res.text()
            setError({ message: text, code: res.status })
        } else {
            const jsonRes = await res.json()
            setIpLocation(jsonRes)
        }

        setLoading(false)
        // const json
    }

    return (
        <div className='location-form'>
            <form className='location-inputs' onSubmit={searchIp}>
                <input name="ip" onChange={changeIpInput} />
                <button type="submit" disabled={ipInput == null || ipInput === ''} onClick={searchIp}>Find IP Location</button>
            </form>
            {
                loading ? (
                    <div>
                        <p>Loading...</p>
                    </div>
                ) :
                    <IpLocationInfo
                        error={error}
                        location={ipLocation}
                    />
            }
        </div>
    )
}

// NOTE: No props to this component, though the form handling could be
//       pulled into a parent container component if need-be.
// LocationForm.propTypes = {
// }

export default LocationForm

