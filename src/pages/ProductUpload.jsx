import { useState } from 'react';
import { storage } from '../firebase/firebase-config';
import { db } from '../firebase/firebase-config';
import './ProductUpload.css';

function Upload() {
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [productType, setProductType] = useState('');
    const [productName, setProductName] = useState('');
    const [expDate, setExpDate] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [cost, setCost] = useState(0);
    const [employee, setEmployee] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const imgUpload = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                        dataUpload(url);
                    });
            }
        );
    };

    const dataUpload = (url) => {
        db.collection('inventory').add({
            imgURL: url,
            productType: productType,
            productName: productName,
            expDate: expDate,
            quantity: quantity,
            cost: cost,
            employee: employee,
        });
        setProductName('');
        setProductType('');
        setExpDate('');
        setQuantity(0);
        setCost(0);
        setEmployee('');
    };

    return (
        <div className='productUpload'>
            <center>
                <form className='form' onSubmit={imgUpload}>
                    <h1>Please upload your desired image and data.</h1>
                    <input type='file' onChange={handleChange} />
                    <label>Product Name</label>
                    <input
                        type='text'
                        value={productName}
                        className='productNameInput'
                        onChange={(e) => {
                            setProductName(e.target.value);
                        }}
                    />
                    <label>Product Type</label>
                    <input
                        type='text'
                        value={productType}
                        className='productTypeInput'
                        onChange={(e) => {
                            setProductType(e.target.value);
                        }}
                    />
                    <label>Expiration Date</label>
                    <input
                        type='date'
                        value={expDate}
                        className='expDateInput'
                        onChange={(e) => {
                            setExpDate(e.target.value);
                        }}
                    />
                    <label>Quantity</label>
                    <input
                        type='number'
                        value={quantity}
                        className='quantityInput'
                        onChange={(e) => {
                            setQuantity(e.target.value);
                        }}
                    />
                    <label>Cost</label>
                    <input
                        type='number'
                        value={cost}
                        className='costInput'
                        onChange={(e) => {
                            setCost(e.target.value);
                        }}
                    />
                    <label>Employee Name</label>
                    <input
                        type='text'
                        value={employee}
                        className='employeeInput'
                        onChange={(e) => {
                            setEmployee(e.target.value);
                        }}
                    />
                    <button type='submit'>Upload</button>
                </form>
            </center>
        </div>
    );
}

export default Upload;
