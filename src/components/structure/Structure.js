import React from 'react'
import Doors from './doors/Doors'
import Pillars from './pillars/Pillars'
import Sheetmetals from './sheetmetals/Sheetmetals'
import './structure.css';

export default function Structure() {
    return (
        <div className='Right'>
            <div>
                <header><h3>Structure</h3></header>
                {/* <Pillars>
              <li>Pillar A</li>
              <li>Pillar B</li>
              <li>Pillar C</li>
              <li>Pillar D</li>
               </Pillars>
                <Sheetmetals />
                <Doors /> */}
            </div>

        </div>
    )
}
