import React from 'react';
import '../style/Contents.css';

import Donut from './Donut';


function Contents() {
    return (
        <div className='contents'>
            <Donut />
            <div id='filtres'>
                <label>filtre : </label>
                <select id="filtre" name="filtre">
                    <option value="1">date</option>
                    <option value="2">catégorie</option>
                    <option value="3">sous-catégories</option>
                    <option value="4">montant</option>
                </select>
            </div>
            <div id='content'>
                <div id='transaction'>
                    <h1>transaction</h1>
                </div>
                <div id='graphique'>
                    <h1>graphique</h1>
                </div>
            </div>
        </div>
    );
}

export default Contents;

