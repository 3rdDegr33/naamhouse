import React from 'react'
import QRCode from 'react-qr-code'
const Scanner = ({value}) => {
    return (
        <QRCode value={`${value}`}/>
    )
}

export default Scanner
