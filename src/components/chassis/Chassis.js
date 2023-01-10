import React from 'react'
import Engine from './Engine/Engine'
import Suspensionsystem from './Suspensionsystem/Suspensionsystem'
import Wheels from './Wheels/Wheels'
import Axles from './axles/Axles'
import Steel from './steel/Steel'
import Transmissionsystem from './transmissionsystem/transmission'
export default function Chassis() {
    return (
        <>
        <div className='left'>Chassis</div>
        <Axles>
            <li>Front</li>
            <li>Rear</li>
        </Axles>
        <Transmissionsystem>
            <li>Automatic</li>
            <li>Manual</li>
        </Transmissionsystem>
        <Engine>
            <li>Diesel</li>
            <li>Petrol</li>
            <li>Hybrid</li>
        </Engine>
        <Suspensionsystem/>
        <Wheels/>
        <Steel/>
       
        </>
    )
}
