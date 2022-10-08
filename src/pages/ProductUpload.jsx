import {useState} from 'react';
import {storage} from '../firebase/firebase-config';
import {db} from '../firebase/firebase-config';
import "./ProductUpload.css";

function Upload() {
  const [image , setImage] = useState(null);
  const [style , setStyle] = useState("");
  const [artist , setArtist] = useState("");
  const [title , setTitle] = useState("");
  const [url , setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const imgUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
            dataUpload(url)
          });
      }
    )
  };
  
    const dataUpload = (url) => {
      db.collection("artworks").add({
      imgURL: url,
      productType: productType,
      productName: productName,
      expDate: expDate,
      quantity: quantity,
      cost: cost,
      employee: employee
      
      
      })
      setProductName("");
      setProductType("");
      setexp("");
      setquantity(0);
      setcost(0);
      setemployee("");

    };

      return (
        <div className="App">
          <center>
            <form className="form" onSubmit={imgUpload}>
              <h1>Please upload your desired image and data.</h1>
              <input type="file" onChange={handleChange}/>
              <label>Product Name</label>
              <input type="text" value={productName} className="productNameInput" onChange={(e) => {setStyle(e.target.value)} }/>
              <label>Product Type</label>
              <input type="text" value={productType} className="productTypeInput" onChange={(e) => {setArtist(e.target.value)} } />
              <label>Expiration Date</label>
              <input type="date" value={expDate} className="expDateInput" onChange={(e) => {setTitle(e.target.value)} } />
              <label>Quantity</label>
              <input type="date" value={quantity} className="quantityInput" onChange={(e) => {setTitle(e.target.value)} } />
              <label>Cost</label>
              <input type="date" value={cost} className="costInput" onChange={(e) => {setTitle(e.target.value)} } />
              <label>Employee Name</label>
              <input type="date" value={employee} className="employeeInput" onChange={(e) => {setTitle(e.target.value)} } />
              <button type="submit">Upload</button>
            </form> 
          </center>
        </div>
      );
   
}

export default Upload;


// const ReactFirebaseFileUpload = () => {
//   const [image, setImage] = useState(null);
//   const [url, setUrl] = useState("");
//   const [progress, setProgress] = useState(0);

//   const handleChange = e => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       snapshot => {
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(progress);
//       },
//       error => {
//         console.log(error);
//       },
//       () => {
//         storage
//           .ref("images")
//           .child(image.name)
//           .getDownloadURL()
//           .then(url => {
//             setUrl(url);
//           });
//       }
//     );
//   };

//   console.log("image: ", image);

//   return (
//     <div>
//       <progress value={progress} max="100" />
//       <br />
//       <br />
//       <input type="file" onChange={handleChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <br />
//       {url}
//       <br />
//       <img src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
//     </div>
//   );
// };