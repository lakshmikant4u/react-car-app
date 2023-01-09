import React from 'react'
import Engine from './Engine/Engine'
import Suspensionsystem from './Suspensionsystem/Suspensionsystem'
import Wheels from './Wheels/Wheels'

export default function Chassis() {
    return (
        <>
        <div>Chassis</div>
        <Engine/>
        <Suspensionsystem/>
        <Wheels/>
        </>
    )
}
