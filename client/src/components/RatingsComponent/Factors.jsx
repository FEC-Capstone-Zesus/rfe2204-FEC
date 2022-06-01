import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  width: 100%; 
  height: 5px;
  background-color: #f1f1f1;
  padding-left: 10px;
  max-width: 96%;
`;

const Indicator = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-left: ${props => props.score};
`;

const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const FactorsLable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 0.5em;
  margin-top: 10px;
`;

const FactorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Span = styled.span`
  font-size: 0.75em;
`;

const Factors = ({ factors }) => {
  var size, width, comfort, quality, length, fit;
  var sizeScore, widthScore, comfortScore, qualityScore, lengthScore, fitScore;

  if (factors) {
    var size = factors.Size ? factors.Size : null;
    var width = factors.Width ? factors.Width : null;
    var comfort = factors.Comfort ? factors.Comfort : null;
    var quality = factors.Quality ? factors.Quality : null;
    var length = factors.Length ? factors.Length : null;
    var fit = factors.Fit ? factors.Fit : null;

    var sizeScore = factors.Size ? Math.round(factors.Size.value * 20) : null;
    var widthScore = factors.Width ? Math.round(factors.Width.value * 20) : null;
    var comfortScore = factors.Comfort ? Math.round(factors.Comfort.value * 20) : null;
    var qualityScore = factors.Quality ? Math.round(factors.Quality.value * 20) : null;
    var lengthScore = factors.Length ? Math.round(factors.Length.value * 20) : null;
    var fitScore = factors.Fit ? Math.round(factors.Fit.value * 20) : null;

  }
  return (
    <>
      {size 
        ? <SizeContainer>
            <Span>Size</Span>
            <BarContainer><Indicator score={sizeScore+'%'}/></BarContainer>
            <FactorsLable>
              <label>Too small</label>
              <label>perfect</label>
              <label>Too big</label>
            </FactorsLable>
          </SizeContainer>
        : null
      }
      {width 
        ? <FactorContainer>
            <Span>Width</Span>
            <BarContainer><Indicator score={widthScore+'%'}/></BarContainer>
            <FactorsLable>
              <label>Too Narrow</label>
              <label>perfect</label>
              <label>Too wide</label>
            </FactorsLable>
          </FactorContainer>
        : null
      }
      {comfort 
        ? <FactorContainer>
            <Span>Comfort</Span>
            <BarContainer><Indicator score={comfortScore+'%'}/></BarContainer>
            <FactorsLable>
              <label>Bad</label>
              <label>Perfect</label>
            </FactorsLable>
          </FactorContainer>
        : null
      }
      {quality
        ? <FactorContainer>
            <Span>Quality</Span>
            <BarContainer><Indicator score={qualityScore+'%'}/></BarContainer>
            <FactorsLable>
              <label>Poor</label>
              <label>Great</label>
            </FactorsLable>
          </FactorContainer>
        : null
      }
      {length
        ? <FactorContainer>
            <Span>Length</Span>
            <BarContainer><Indicator score={lengthScore+'%'}/></BarContainer>
            <FactorsLable>
              <label>Too short</label>
              <label>perfect</label>
              <label>Too long</label>
            </FactorsLable>
          </FactorContainer>
        : null
      }
      {fit
        ? <FactorContainer>
            <Span>Fit</Span>
            <BarContainer><Indicator score={fitScore+'%'}/></BarContainer>
            <FactorsLable>
              <label>Too tight</label>
              <label>perfect</label>
              <label>Too loose</label>
            </FactorsLable>
          </FactorContainer>
        : null
      }
    </>
  );
};

export default Factors;