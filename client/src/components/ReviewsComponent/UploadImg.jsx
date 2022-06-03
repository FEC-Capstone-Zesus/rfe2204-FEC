import React, {useState} from "react";
import styled from 'styled-components';

const ImgInput = styled.img`
  height: 50px;
  width: auto;
  padding: 10px;
`;

const UploadImg = ({handleImage}) => {
  const [image, setImage] = useState({});
  const [showUpload, setShowUpload] = useState(false);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let imageCopy = JSON.parse(JSON.stringify(image));
      imageCopy[event.target.name] = URL.createObjectURL(img);
      setImage(imageCopy);
      handleImage(event, image);
    }
  };
  const handleUploadButton = (event) => {
    event.preventDefault();
    setShowUpload(true);
  };

  return (
    <div>
      <button onClick={(event)=>handleUploadButton(event)}>Upload Images</button>
      {showUpload ? 
        <div>
          { Object.entries(image).map((img,index) => <ImgInput src={img[1]} key={index} />) } 
          
          <h5>Select Image</h5>
          <input type="file" name="myImage_1" onChange={(e)=>onImageChange(e)} />
          <input type="file" name="myImage_2" onChange={(e)=>onImageChange(e)} />
          <input type="file" name="myImage_3" onChange={(e)=>onImageChange(e)} />
          <input type="file" name="myImage_4" onChange={(e)=>onImageChange(e)} />
          <input type="file" name="myImage_5" onChange={(e)=>onImageChange(e)} />
        </div> : null
      }
    </div>
);
};

export default UploadImg;

// class UploadImg extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { image: {}, showUpload: false };
//     this.onImageChange = this.onImageChange.bind(this);
//     this.handleUploadButton = this.handleUploadButton.bind(this);
//   }

//   onImageChange = event => {
//     if (event.target.files && event.target.files[0]) {
//       let img = event.target.files[0];
//       let { image } = this.state;
//       image[event.target.name] = URL.createObjectURL(img);
//       this.setState({ image });
//       this.props.handleImage(event, image);
//     }
//   };
//   handleUploadButton = (event) => {
//     event.preventDefault();
//     let { showUpload } = this.state;
//     showUpload = true;
//     this.setState({ showUpload });
//   };

//   render() {
//     return (
//         <div>
//           <button onClick={(event)=>this.handleUploadButton(event)}>Upload Images</button>
//           {this.state.showUpload ? 
//             <div>
//               { Object.entries(this.state.image).map((img,index) => <ImgInput src={img[1]} key={index} />) } 
              
//               <h5>Select Image</h5>
//               <input type="file" name="myImage_1" onChange={this.onImageChange} />
//               <input type="file" name="myImage_2" onChange={this.onImageChange} />
//               <input type="file" name="myImage_3" onChange={this.onImageChange} />
//               <input type="file" name="myImage_4" onChange={this.onImageChange} />
//               <input type="file" name="myImage_5" onChange={this.onImageChange} />
//             </div> : null
//           }
//         </div>
//     );
//   }
// }