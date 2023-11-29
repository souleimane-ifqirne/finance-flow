import React from 'react';
import '../style/NavMenu.css';

import Debug from './Debug';

function NavMenu({ solde, setSolde }) {
    return (
        <>
            <div className='navbar'>
                <h2 style={styles.title}>Finance Flow</h2>
            </div>
            <Debug solde={solde} setSolde={setSolde} />
        </>
    );
}

const styles = {
    title: {
        color: 'white',
    }
};


export default NavMenu;

