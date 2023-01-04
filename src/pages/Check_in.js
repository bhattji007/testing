import React  ,{useState }from 'react'
import jsPDF from 'jspdf'
import axios from 'axios';
import {Link} from 'react-router-dom';
import requests from '../requests';

export const Check_in = () => {
  const [plateNum, setPlate] = useState("");
  const [image, setImage]= useState("")
    const [message, setMessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    async function fetchdata(){
      const formData=new FormData();
      formData.append=('file_name',image)
     const data= await axios.post(requests.park_in,formData, {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:8000'
    }
      }).then(res=>{return res}).catch(err=>{console.log(err);return err});
      console.log(data.data)
      setMessage(data.data)
  }
  fetchdata();
  };

  function handleImage(e){
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }
   function jsPdfgenerator(data){
    console.log("nedjuboubjcik  ",message);
    var doc =new jsPDF('landscape','px','a4','false');
    doc.setProperties({
      title: 'Autonomus Parking system',
      subject: `subject`,
      author: '',
      keywords: 'generated, javascript, web 2.0, ajax',
      creator: 'MEEE'
    })
    doc.setFontSize(22);
    doc.setFont("courier");
    doc.text(20,90,`Platenumber: ${message.PlateNum}`)
    doc.text(20,120,`Entry: ${message.Entry}`)
    doc.text(20,150,`Slot: ${message.Slot}`)
    doc.save("invoice.pdf")
    console.log("hit");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
    <input
      type="file"
      value={plateNum}
      placeholder="upload image"
      onChange={handleImage}
    />
    <button type="submit">Send</button>

    <div className="message">
     {message ? <div><h3>Plate Number :</h3><p>{message.PlateNum}</p></div> : null}
     {message ? <div><h3>Entry Time :</h3><p>{message.Entry}</p></div> : null}
     {message ? <div><h3>Slot number :</h3><p>{message.Slot}</p></div> : null}
      </div>
  </form>
  <form >
  <div className="pdf">
      <button type="submit" onClick={jsPdfgenerator}>Generate invoice</button>
      </div>
  </form>
  <Link to="/check_out">check_out </Link>

  </div>
  )
}
