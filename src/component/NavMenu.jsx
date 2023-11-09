import React from 'react';
import '../style/NavMenu.css';

import Debug from './Debug';

function NavMenu({ solde, setSolde }) {
    return (
        <>
            <div className='navbar'>
                <div>
                    <h2>Finance Flow</h2>
                </div>
            </div>
            <Debug solde={solde} setSolde={setSolde} />
        </>
    );
}

export default NavMenu;

