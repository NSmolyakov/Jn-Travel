import React from 'react'
import Tours from './tours/Tours'

const allTours = () => {
    return( 
        <div className="container mb-5 pb-5">
            <div className="tours d-flex justify-content-center">
                <h2 className="pb-4">Туры:</h2>
            </div>
    <Tours />
    </div>
    );
}

export default allTours;