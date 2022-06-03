import styled from "styled-components";

const SummaryDiv = styled.div`
  margin-top: -3.9rem;
  margin-right: 1rem;
  width: 73rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
`
const Empty = styled.div`
`
const Buttons = styled.div`
  display: flex;
`

const Summary = ( { product } ) => {
  return (
    <SummaryDiv>
      <Empty/>
      <Buttons>
        <div class="fb-share-button"
             data-href="http://localhost:3000/"
             data-size="large"
             data-layout="button_count"
             alt='Share on Facebook' >
        </div>
        &nbsp;
        &nbsp;
        <a alt='Share on Twitter' href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="Wow! This product I found is amazing! Check it out!" data-hashtags="zeus" data-lang="en" data-show-count="false">Tweet</a>
        &nbsp;
        &nbsp;
        <a alt='Share on Pinterest' data-pin-do="buttonBookmark" data-pin-tall="true" data-pin-round="true" href="https://www.pinterest.com/pin/create/button/">
          <img alt='Pinterest share logo' src="//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_16.png" />
        </a>
      </Buttons>
    </SummaryDiv>
  );
}

export default Summary