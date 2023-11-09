import React, { useState } from 'react';
import '../style/Debug.css';

function Debug({ solde, setSolde }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedSolde, setEditedSolde] = useState(solde);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        setSolde(editedSolde);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 10  &&
            /^\d*\.?\d*$/.test(inputValue)) {
            setEditedSolde(inputValue);
        }
    };

    return (
        <div className='debug'>
            <button id='retour' >←</button>
            <h4 id="titre">Debug</h4>
            <div id='solde'>
                {isEditing ? (
                    <input 
                        type='text' 
                        value={editedSolde} 
                        onBlur={handleBlur} 
                        onChange={handleInputChange} 
                    />
                ) : ( <h3>{solde}€</h3> )}
            </div>
            <div id='choix'>
                { !isEditing && <button onClick={handleEditClick}>Change Solde</button> }
                <button>Add transaction</button>
            </div>
        </div>
    );
}

export default Debug;
