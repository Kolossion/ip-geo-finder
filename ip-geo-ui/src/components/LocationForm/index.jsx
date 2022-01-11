import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IpLocationInfo from '../IpLocationInfo'
import './LocationForm.css'

function LocationForm(props) {
    const [loading, setLoading] = useState(false)
    const [ipInput, setIpInput] = useState('')
    const [ipLocation, setIpLocation] = useState(null)
    
    console.log("IP INPUT", ipInput)

    const changeIpInput = (e) => {
        setIpInput(e.target.value)
    }

    const searchIp = () => {
        setLoading(true)

        fetch('http://localhost:4000/location/' + ipInput)
        .then((res) => {
            // console.log("RESPONSE", res.json())
            // setIpLocation(res)
            // setLoading(false)
            return res.json()
        })
        .then((data) => {
            console.log("RESPONSE", data)
            setIpLocation(data)
            setLoading(false)
        })
    }

    return (
        <div className='location-form'>
            <input name="ip" onChange={changeIpInput}/>
            <button onClick={searchIp}>Find IP Location</button>
            {
                loading ? <p>LOADING...</p> : null
            }
            {
                ipLocation != null ? <IpLocationInfo location={ipLocation} /> : null
            }
        </div>
    )
}

LocationForm.propTypes = {
}

export default LocationForm

