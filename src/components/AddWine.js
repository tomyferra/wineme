
import React from "react";
import '../stylesheets/AddWine.css';
import WineDataService from '../services/wine-services';

function AddWine () {
  const nameref = React.useRef();
  const wineryref = React.useRef();
  const descref = React.useRef();
  const yearref = React.useRef();
  const regionref = React.useRef();
  const varietyref = React.useRef();

  const handleFileChange = async e =>{
    console.log("Uploading...");
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    const res = await fetch('https://api.imgur.com/3/image/',{
      method: 'POST',
      headers: {
        Authorization: "Client-ID 91b89306c400378"
      },
      body: data
    });
    const file = await res.json();
    console.log("File: ",file);
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    //https://linguinecode.com/post/how-to-get-form-data-on-submit-in-reactjs
    //READ THIS TO LEARN HOW TO HANDLE STATES...
    const name = nameref.current.value;
    const winery = wineryref.current.value;
    const year = yearref.current.value;
    const variety = varietyref.current.value;
    const region = regionref.current.value;
    const desc = descref.current.value;



    const input = {
      "Name": name,
      "Winery":winery,
      "Variety":variety,
      "Description":desc,
      "Year":year,
      "Totalqualifications":0,
      "Avgqualifications":0,
      "Score":0,
      "Image":"/img/Martir.webp",
      "Region":region
    };
    console.log(input)
    WineDataService.create(input)
      .then(response => {
        console.log(response.data)
        
      })
      .catch(error => {
        console.log("public folder: ", process.env.PUBLIC_URL)
        alert(error);
      });
    
  }

  return (
    <div className="addWine">
      <h2>Add more Wine</h2>
      
      <form className="needs-validation " onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-around">
          <div className="col-md-4 mb-3">
            <label forhtml="validationCustom01">Name</label>
            <input type="text" className="form-control" ref={nameref} id="validationCustom01" placeholder="Name" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationCustom02">Winery</label>
            <input type="text" className="form-control" ref={wineryref} d="validationCustom02" placeholder="Winery" required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="col-md-4 mb-3">
            <label for="validationCustom03">Year</label>
            <input type="number" className="form-control" ref={yearref} id="validationCustom03" placeholder="Year" />
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationCustom04">Variety</label>
            <input type="text" className="form-control" ref={varietyref} id="validationCustom04" placeholder="Variety" />
          </div>
          <div className="col-md-4 mb-3">
            <label for="validationCustom04">Region</label>
            <input type="text" className="form-control" ref={regionref} id="validationCustom04" placeholder="Region" />
          </div>

        </div>
        <div className="row">
          <div className="col-md-8 mb-3">
            <label for="validationCustom02">Description</label>
            <input type="text" className="form-control" id="validationCustom02" ref={descref} placeholder="Description" />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4 mb-3 custom-file">
            <input type="file" className="custom-file-input" id="file" name="file" placeholder="Upload Image" required onChange={handleFileChange}/>
          </div>
        </div>
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit form</button>
      </form>
    </div>
  );
}

export default AddWine;