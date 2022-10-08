import React from 'react';

function ItemDesc() {
    return (
        <div className='Product-Description'>
            <ul className='pList'>
                <img
                    className='imgURL'
                    src=''
                    style='width: 100px; height: auto;'></img>
                <li className='pName'></li>
                <li className='pType'></li>
                <li className='pExpDate'></li>
                <li className='pQty'></li>
                <li className='pCost'></li>
                <li className='pEmployee'></li>
            </ul>
        </div>
    );
}

export default ItemDesc;
