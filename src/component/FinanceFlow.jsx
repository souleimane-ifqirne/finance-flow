import React, { useState } from 'react';
import NavMenu from './NavMenu';
import Contents from './Contents';

function FinanceFlow() {
    const [solde, setSolde] = useState(926.02);

    const [newTransaction, setNewTransaction] = useState(false);

    return (
        <div style={styles.financeFlow}>
            <NavMenu solde={solde} setSolde={setSolde} setNewTransaction={setNewTransaction} />
            <Contents solde={solde} setSolde={setSolde} newTransaction={newTransaction}/>
        </div>
    );
}

const styles = {
    financeFlow: {
        height: 'auto',
        width: '100%',
    }
};

export default FinanceFlow;
