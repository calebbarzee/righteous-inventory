import React from 'react';
import ItemDesc from '../components/ItemDesc';
import { useState } from 'react';
import { db } from '../firebase/firebase-config';
import Navigation from '../components/Navigation';

function Dashboard() {
    const productArray = [];

    const getData = (productArray) => {
        db.collection('inventory').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(doc.data());
                let item = doc.data();
                productArray.push(item);
            });
        });
    };

    return (
        <div class='Product Dashboard'>
            <Navigation />
            <ItemDesc />
        </div>
    );
}

export default Dashboard;
