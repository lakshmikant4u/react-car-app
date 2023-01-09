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
        <div>Chassis</div>
        <Engine/>
        <Suspensionsystem/>
        <Wheels/>
        <Axles/>
        <Steel/>
        <Transmissionsystem/>
        </>
    )
}
