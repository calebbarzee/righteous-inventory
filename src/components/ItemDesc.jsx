import { useState } from 'react';
import { db } from '../firebase/firebase-config';

function ItemDesc() {
    const [productArray, setProductArray] = useState([]);

    const getData = (productArray) => {
        db.collection('inventory')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, ' => ', doc.data());
                });
            });
    };
    setProductArray(getData);
    return (
        <div class='Product-Description'>
            <ul style='display: inline;'>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default ItemDesc;
