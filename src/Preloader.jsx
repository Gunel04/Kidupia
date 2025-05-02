import React from 'react'
import { GridLoader } from 'react-spinners'

const Preloader = () => {
    return (
        <div style={{height:"80vh"}} className='d-flex justify-content-center align-items-center'>
        <GridLoader
            color="#e94a85"
            size={40}
        />
        </div>
    )
}

export default Preloader