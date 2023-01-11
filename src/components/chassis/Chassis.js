import React from 'react'
import Engine from './engine/Engine'
import Suspensionsystem from './suspensionsystem/Suspensionsystem'
import Wheels from './wheels/Wheels'
import Axles from './axles/Axles'
import Steel from './steel/Steel'
import Transmissionsystem from './transmissionsystem/transmission';
import './Chassis.css';
export default function Chassis() {
    return (
        <>
            <div className="left">Chassis</div>
            {/* <Axles>
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
            <Suspensionsystem />
            <Wheels />
            <Steel /> */}
            <Engine />

        </>
    )
}
