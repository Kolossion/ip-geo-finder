import React from 'react'
import PropTypes from 'prop-types'

function IpLocationInfo(props) {
    return <>
        { props.location != null && props.error == null ? (
            <div>
                <p>Latitude: {props.location.latitude}</p>
                <p>Longitude: {props.location.longitude}</p>
            </div>

        ) : null}
        { props.error != null ? (
            <div className="error-message">
                <p>Error: { props.error.message }</p>
            </div>
        ) : null }
    </>
}

IpLocationInfo.propTypes = {
    location: PropTypes.object,
    error: PropTypes.object
}

export default IpLocationInfo

