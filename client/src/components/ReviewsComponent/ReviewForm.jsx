import React, { useState } from 'react';
import styled from 'styled-components';
import UploadImg from './UploadImg.jsx';

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const FormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 75%;
  background-color: white;
  padding: 1rem;
  overflow: auto;
`;

const CloseButton = styled.span`
  float: right;
  color: lightgrey;
  :hover {
    color: black;
    cursor: pointer;
  }
`;

const TableContainer = styled.table`
  border: 1px solid black;
  width: 100%;
`;
const TH = styled.th`
  border: 1px solid black;
`;
const TD = styled.td`
  border: 1px solid black;
`;

const Title = styled.td`
  border: 1px solid black;
  text-align: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 25px;
`;
const BodyTextArea = styled.textarea`
  width: 100%;
  height: 50px;
`;

const InputStyle = styled.div`
  float: right;
  font-size: 0.5em;
`;

const Mandatory = styled.span`
  color: red;
`;

const LabelStyle = styled.label`
  font-size: 0.75em;
`;

const SummaryContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 75%;
  background-color: white;
  padding: 1rem;
  overflow: auto;
`;
const EmailInput = styled.input`
  width: 100%;
`;

const NeedOverall = styled.div`
  color: red;
`;
const RedTitle = styled.td`
  border: 1px solid black;
  text-align: center;
  color: red;
`;
const RedLabel = styled.label`
  color: red;
`;
const ImgInput = styled.img`
  height: 50px;
  width: auto;
  padding: 10px;
`;

const ReviewSummary = ({Product, ProductId, OverAllRating, Recommend, SizeRating, WidthRating, ComfortRating, QualityRating, LengthRating, FitRating,
                        ReviewTitle, ReviewBody, Image, NickName, Email, handleSubmit, handleCloseForm}) => {
  const handleSubmitButton = (event) => {
    event.preventDefault();
    handleSubmit(ProductId, OverAllRating, Recommend, SizeRating, WidthRating, ComfortRating, QualityRating, LengthRating, FitRating,
                 ReviewTitle, ReviewBody, Image, NickName, Email);
  }
  
  return (
    <div>
      <CloseButton onClick={(event) => handleCloseForm(event)} data-testid='closeButton'>x</CloseButton>
      <h3>Review Summary</h3>
      <h4>Your Overall Rating for -- {Product} -- is {OverAllRating}</h4>
      {Recommend ? <h4>You Recommend this Product</h4> : <h4>Your don't recommend this product</h4>}
      <h4>Your Overall Rating for -- {Product} -- is {OverAllRating}</h4>
      {SizeRating ? <h4>Your Rating for Size is: {SizeRating}</h4> : null}
      {WidthRating ? <h4>Your Rating for Width is: {WidthRating}</h4> : null}
      {ComfortRating ? <h4>Your Rating for Comfort is: {ComfortRating}</h4> : null}
      {QualityRating ? <h4>Your Rating for Quality is: {QualityRating}</h4> : null}
      {LengthRating ? <h4>Your Rating for Length is: {LengthRating}</h4> : null}
      {FitRating ? <h4>Your Rating for Fit is: {FitRating}</h4> : null}
      <h4>Riview Title:</h4><p>{ReviewTitle}</p>
      <h4>Riview Body:</h4><p>{ReviewBody}</p>
      <h4>You have uploaded the following images:</h4>
      { Object.entries(Image).map((img,index) => <ImgInput src={img[1]} key={index} />) }
      <h4>Your Nick Name is: {NickName}</h4>
      <h4>Your E-mail is: {Email}</h4>
      <button onClick={(event)=>handleSubmitButton(event)}>Submit</button>
    </div>
  );
}

const ReviewForm = ({ productName, product_id, factors, handleCloseForm, handleSubmit, created }) => {

  const handleNextButton = (event) => {
    event.preventDefault();
    if (overAllRate === null) {
      setNeedOverAll(true);
    }
    if (factors['Size'] && sizeRate === null) {
      setNeedSize(true);
    }
    if (factors['Width'] && widthRate === null) {
      setNeedWidth(true);
    }
    if (factors['Comfort'] && comfortRate === null) {
      setNeedComfort(true);
    }
    if (factors['Quality'] && qualityRate === null) {
      setNeedQuality(true);
    }
    if (factors['Length'] && lengthRate === null) {
      setNeedLength(true);
    }
    if (factors['Fit'] && fitRate === null) {
      setNeedFit(true);
    }
    if (reviewSummary.length > 60 || reviewSummary.length === 0) {
      setNeedReviewSummary(true);
    }
    if (reviewBody.length > 1000 || reviewBody.length < 50) {
      setNeedReviewBody(true);
    }
    if (nickName.length > 60 || nickName.length === 0) {
      setNeedNickname(true);
    }
    const regEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regEx.test(email)) {
      setNeedEmail(true);  
    }
    if ((overAllRate === null) || (factors['Size'] && sizeRate === null) || (factors['Width'] && widthRate === null) || (factors['Comfort'] && comfortRate === null) ||
        (factors['Quality'] && qualityRate === null) || (factors['Length'] && lengthRate === null) || (factors['Fit'] && fitRate === null) || (reviewSummary.length > 60 || reviewSummary.length === 0) ||
        (reviewBody.length > 1000 || reviewBody.length < 50) || (nickName.length > 60 || nickName.length === 0) || (!regEx.test(email))) {
      setShowSummary(false);
      alert('Please Modify the Mandatory Field labeled in Red')
    } else {
      setShowSummary(true);
    }
  };

  const handleRating = (event) => {
    if (event.target.name === 'overall_score') {
      setOverAllRate(event.target.value);
    } else if (event.target.name === 'size_score') {
      setSizeRate(event.target.value)
    } else if (event.target.name === 'width_score') {
      setWidthRate(event.target.value)
    } else if (event.target.name === 'comfort_score') {
      setComfortRate(event.target.value)
    } else if (event.target.name === 'quality_score') {
      setQualityRate(event.target.value)
    } else if (event.target.name === 'length_score') {
      setLengthRate(event.target.value)
    } else if (event.target.name === 'fit_score') {
      setFitRate(event.target.value)
    }
  };
  const handleRecommend = (event) => {
    event.target.value === 'recommend' ? setRecomment(true) : setRecomment(false);
  };
  const handleSummaryInput = (event) => {
    setReviewSummary(event.target.value);
  };
  const handleBodyInput = (event) => {
    setReviewBody(event.target.value);
  };
  const handleNickname = (event) => {
    setNickName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleImage = (event, images) => {
    event.preventDefault();
    setImage(images);
  }

  const [showSummary, setShowSummary] = useState(false);

  const [overAllRate, setOverAllRate] = useState(null);
  const [needOverAll, setNeedOverAll] = useState(false);

  const [recommend, setRecomment] = useState(true);
  const [image, setImage] = useState([]);

  const [sizeRate, setSizeRate] = useState(null);
  const [needSize, setNeedSize] = useState(false);

  const [widthRate, setWidthRate] = useState(null);
  const [needWidth, setNeedWidth] = useState(false);

  const [comfortRate, setComfortRate] = useState(null);
  const [needComfort, setNeedComfort] = useState(false);

  const [qualityRate, setQualityRate] = useState(null);
  const [needQuality, setNeedQuality] = useState(false);

  const [lengthRate, setLengthRate] = useState(null);
  const [needLength, setNeedLength] = useState(false);

  const [fitRate, setFitRate] = useState(null);
  const [needFit, setNeedFit] = useState(false);

  const [reviewSummary, setReviewSummary] = useState('');
  const [needReviewSummary, setNeedReviewSummary] = useState(false);

  const [reviewBody, setReviewBody] = useState('');
  const [needReviewBody, setNeedReviewBody] = useState(false);

  const [nickName, setNickName] = useState('');
  const [needNickname, setNeedNickname] = useState(false);

  const [email, setEmail] = useState('');
  const [needEmail, setNeedEmail] = useState(false);

  var factorsArr = [];
  for (var keys in factors) {
    factorsArr.push(keys);
  }

  return (
    <Overlay>
    {!showSummary ? 
      <>
        <FormContainer>
          <CloseButton onClick={(event) => handleCloseForm(event)} data-testid='closeButton'>&times;</CloseButton>
          <h3>Write Your Review</h3>
          <h5>About The Product -- {productName} --</h5>
          <div>
            {
              needOverAll ? 
              <>
                <NeedOverall><Mandatory>*</Mandatory>Overall Rating</NeedOverall>
              </>
               : <><Mandatory>*</Mandatory>Overall Rating<br/></>  
            }
            <input type='radio' value='1' id='poor' name='overall_score' onClick={(event)=>handleRating(event)}/>
            <LabelStyle for='poor'>Poor</LabelStyle><br />

            <input type='radio' value='2' id='fair' name='overall_score' onClick={(event)=>handleRating(event)}/>
            <LabelStyle for='fair'>Fair</LabelStyle><br />

            <input type='radio' value='3' id='average' name='overall_score' onClick={(event)=>handleRating(event)} data-testid='average'/>
            <LabelStyle for='average'>Average</LabelStyle><br />

            <input type='radio' value='4' id='good' name='overall_score' onClick={(event)=>handleRating(event)}/>
            <LabelStyle for='good'>Good</LabelStyle><br /> 

            <input type='radio' value='5' id='great' name='overall_score' onClick={(event)=>handleRating(event)}/>
            <LabelStyle for='great'>Great</LabelStyle><br />
          </div>
          <br/>
          <div className='recommend'><Mandatory>*</Mandatory>Do you recommend this product ?
            <br/>
            <input type='radio' value='recommend' name='option' defaultChecked onClick={(event)=>handleRecommend(event)}/>
            <LabelStyle>YES</LabelStyle><br />
            <input type='radio' value='notRecommend' name='option' onClick={(event)=>handleRecommend(event)}></input>
            <LabelStyle>NO</LabelStyle>
          </div>
          <br/>
          <TableContainer>
            <thead>
              <tr>
                <TH>Characteristic</TH>
                <TH>Your Rating</TH>
              </tr>
            </thead>
            <tbody>
              {
                factors['Size'] ?
                  <tr>
                    {
                      needSize ? <RedTitle><Mandatory>*</Mandatory>Size</RedTitle> : <Title><Mandatory>*</Mandatory>Size</Title>
                    }
                    <TD>
                      <input type='radio' value='1' id='size_1' name='size_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='size_1'>A size too samll</LabelStyle><br />
                      <input type='radio' value='2' id='size_2' name='size_score' onClick={(event)=>handleRating(event)} data-testid='small'/>
                      <LabelStyle for='size_2'>1/2 a size too samll</LabelStyle><br />
                      <input type='radio' value='3' id='size_3' name='size_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='size_3'>Perfect</LabelStyle><br />
                      <input type='radio' value='4' id='size_4' name='size_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='size_4'>1/2 a size too big</LabelStyle><br />
                      <input type='radio' value='5' id='size_5' name='size_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='size_5'>A size too wide</LabelStyle><br />
                    </TD>
                  </tr>
                  : null
              }
              {
                factors['Width'] ?
                  <tr>
                    {
                      needWidth ? <RedTitle><Mandatory>*</Mandatory>Width</RedTitle> : <Title><Mandatory>*</Mandatory>Width</Title>
                    }
                    <TD>
                      <input type='radio' value='1' id='width_1' name='width_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='width_1'>Too narrow</LabelStyle><br />
                      <input type='radio' value='2' id='width_2' name='width_score' onClick={(event)=>handleRating(event)} data-testid='narrow'/>
                      <LabelStyle for='width_2'>Slightly narrow</LabelStyle><br />
                      <input type='radio' value='3' id='width_3' name='width_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='width_3'>Perfect</LabelStyle><br />
                      <input type='radio' value='4' id='width_4' name='width_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='width_4'>Slightly wide</LabelStyle><br />
                      <input type='radio' value='5' id='width_5' name='width_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='width_5'>Too wide</LabelStyle><br />
                    </TD>
                  </tr>
                  : null
              }
              {
                factors['Comfort'] ?
                  <tr>
                    {
                      needComfort ? <RedTitle><Mandatory>*</Mandatory>Comfort</RedTitle> : <Title><Mandatory>*</Mandatory>Comfort</Title>
                    }
                    <TD>
                      <input type='radio' value='1' id='c_1' name='comfort_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='c_1'>Uncomfortable</LabelStyle><br />
                      <input type='radio' value='2' id='c_2' name='comfort_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='c_2'>Slightly uncomfortable</LabelStyle><br />
                      <input type='radio' value='3' id='c_3' name='comfort_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='c_3'>Ok</LabelStyle><br />
                      <input type='radio' value='4' id='c_4' name='comfort_score' onClick={(event)=>handleRating(event)} data-testid='comfortable'/>
                      <LabelStyle for='c_4'>Comfortable</LabelStyle><br />
                      <input type='radio' value='5' id='c_5' name='comfort_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='c_5'>Perfect</LabelStyle><br />
                    </TD>
                  </tr>
                  : null
              }
              {
                factors['Quality'] ?
                  <tr>
                    {
                      needQuality ? <RedTitle><Mandatory>*</Mandatory>Quality</RedTitle> : <Title><Mandatory>*</Mandatory>Quality</Title>
                    }
                    <TD>
                      <input type='radio' value='1' id='q_1' name='quality_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='q_1'>Poor</LabelStyle><br />
                      <input type='radio' value='2' id='q_2' name='quality_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='q_2'>Below average</LabelStyle><br />
                      <input type='radio' value='3' id='q_3' name='quality_score' onClick={(event)=>handleRating(event)} data-testid='expect'/>
                      <LabelStyle for='q_3'>What I expected</LabelStyle><br />
                      <input type='radio' value='4' id='q_4' name='quality_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='q_4'>Pretty great</LabelStyle><br />
                      <input type='radio' value='5' id='q_5' name='quality_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='q_5'>Perfect</LabelStyle><br />
                    </TD>
                  </tr>
                  : null
              }
              {
                factors['Length'] ?
                  <tr>
                    {
                      needLength ? <RedTitle><Mandatory>*</Mandatory>Length</RedTitle> : <Title><Mandatory>*</Mandatory>Length</Title>
                    }
                    <TD>
                      <input type='radio' value='1' id='l_1' name='length_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='l_1'>Runs Short</LabelStyle><br />
                      <input type='radio' value='2' id='l_2' name='length_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='l_2'>Runs slightly short</LabelStyle><br />
                      <input type='radio' value='3' id='l_3' name='length_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='l_3'>Perfect</LabelStyle><br />
                      <input type='radio' value='4' id='l_4' name='length_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='l_4'>Runs slightly long</LabelStyle><br />
                      <input type='radio' value='5' id='l_5' name='length_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='l_5'>Runs long</LabelStyle><br />
                    </TD>
                  </tr>
                  : null
              }
              {
                factors['Fit'] ?
                  <tr>
                    {
                      needFit ? <RedTitle><Mandatory>*</Mandatory>Fit</RedTitle> : <Title><Mandatory>*</Mandatory>Fit</Title>
                    }
                    <TD>
                      <input type='radio' value='1' id='f_1' name='fit_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='f_1'>Runs tight</LabelStyle><br />
                      <input type='radio' value='2' id='f_2' name='fit_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='f_2'>Runs slightly tight</LabelStyle><br />
                      <input type='radio' value='3' id='f_3' name='fit_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='f_3'>Perfect</LabelStyle><br />
                      <input type='radio' value='4' id='f_4' name='fit_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='f_4'>Runs slightly long</LabelStyle><br />
                      <input type='radio' value='5' id='f_5' name='fit_score' onClick={(event)=>handleRating(event)}/>
                      <LabelStyle for='f_5'>Runs long</LabelStyle><br />
                    </TD>
                  </tr>
                  : null
              }
            </tbody>
          </TableContainer>
          <br/>
          <div>
            {
              needReviewSummary ? 
              <RedLabel><label for='reviewSummary'>Review Summary:</label><br /></RedLabel> 
              : <><label for='reviewSummary'>Review Summary:</label><br /></>
            }
            <TextArea
              maxLength="60"
              name="reviewSummary"
              placeholder='Example: Best purchase ever!'
              onChange={(event)=>handleSummaryInput(event)}
              id='reviewSummary'
              data-testid="reviewSummary"
            />
            <InputStyle>input allowing up to 60 characters</InputStyle>
          </div>
          <br/>
          <div>
            {
              needReviewBody ? 
              <RedLabel><label for='reviewBody'><Mandatory>*</Mandatory>Review Body:</label><br /></RedLabel> 
              : <><label for='reviewBody'><Mandatory>*</Mandatory>Review Body:</label><br /></>
            }
            <BodyTextArea
              minLength="50"
              maxLength="1000"
              name="reviewBody"
              placeholder='Why did you like the product or not?'
              onChange={(event) => handleBodyInput(event)}
              data-testid="reviewBody"
              id='reviewBody'
            />
            {reviewBody.length < 50 ? <InputStyle>Minimum required characters left: [{50 - reviewBody.length}]</InputStyle> : <InputStyle>Minimum reached</InputStyle>}
          </div>
          <br/>
          <UploadImg handleImage={handleImage}/>
          <br/>
          <div>
            {
              needNickname ? 
              <RedLabel><label for='nickname'><Mandatory>*</Mandatory>Your Nickname:</label><br /></RedLabel> 
              : <><label for='nickname'><Mandatory>*</Mandatory>Your Nickname:</label><br /></>
            }
            <TextArea
              maxLength="60"
              name="nickName"
              placeholder='Example: jackson11'
              onChange={(event) => handleNickname(event)}
              id='nickname'
              data-testid='nickname'
            />
            <InputStyle>For privacy reasons, do not use your full name or email address</InputStyle>
          </div>
          <br/>
          <div>
            {
              needEmail ? 
              <RedLabel><label><Mandatory>*</Mandatory>Your E-Mail:</label><br /></RedLabel> 
              : <><label><Mandatory>*</Mandatory>Your E-Mail:</label><br /></>
            }
            <EmailInput
              type='email'
              name="email"
              placeholder='Example: jackson11@email.com'
              onChange={(event) => handleEmail(event)}
              data-testid='email'
            />
            <InputStyle>For authentication reasons, you will not be emailed</InputStyle>
          </div>
          <br/>
          <button onClick={(event)=>handleNextButton(event)} data-testid='buttonNext'>Next</button>
        </FormContainer>
      </> 
      : <SummaryContainer>
        <ReviewSummary
          Product={productName} 
          ProductId={product_id}
          OverAllRating={overAllRate}
          Recommend={recommend}
          SizeRating={sizeRate}
          WidthRating={widthRate}
          ComfortRating={comfortRate}
          QualityRating={qualityRate}
          LengthRating={lengthRate}
          FitRating={fitRate}
          ReviewTitle={reviewSummary}
          ReviewBody={reviewBody}
          Image={image}
          NickName={nickName}
          Email={email}
          handleSubmit={handleSubmit}
          handleCloseForm={handleCloseForm}
        />  
      </SummaryContainer>}
    </Overlay>
  );
};

export default ReviewForm;

