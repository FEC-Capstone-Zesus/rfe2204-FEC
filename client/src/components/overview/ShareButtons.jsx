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
        <a alt='Share on Facebook' href="https://www.facebook.com/sharer/sharer.php?u=" ><img alt='Facebook share logo' width='36px' src='/assets/fb_share.png'></img></a>
        &nbsp;
        &nbsp;
        <a alt='Share on Twitter' href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-text="Wow! This product I found is amazing! Check it out!" data-hashtags="zeus" data-lang="en" data-show-count="false"><img alt='Twitter share logo' width='42px' src='/assets/twitter_share.png'></img></a>
        &nbsp;
        &nbsp;
        <a alt='Share on Pinterest' href="https://www.pinterest.com/pin/create/button/">
          <img alt='Pinterest share logo' width='36px' src='/assets/pinterest_share.png' />
        </a>
      </Buttons>
    </SummaryDiv>
  );
}

export default Summary