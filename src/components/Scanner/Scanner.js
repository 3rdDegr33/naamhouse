import React from 'react'
import QRCode from 'react-qr-code'
const Scanner = ({value}) => {
    return (
        <div className='side'>
        <QRCode value={`${value}`}/>
       {/* <input placeholder="search..." className='search'/> */}
        </div>

    )
}

export default Scanner
