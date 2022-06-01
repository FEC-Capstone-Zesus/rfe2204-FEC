/**
 * @jest-environment jsdom
 */
const {defaults} = require('jest-config');
require('dotenv').config()
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import "babel-polyfill";
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
  queryByText,
  screen,
} from "@testing-library/react";
import {toBeInTheDocument} from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
const mockStore = configureStore([]);
const axios = require('axios');
// import Relateditems from '../client/src/components/RelatedItems/Relateditems.jsx'
// import RelateditemsContainer from '../client/src/containers/RelateditemsContainer.js'

axios.defaults.baseURL = "http://localhost:3000"

// import Overview from '../client/src/components/overview/Overview.jsx'
// import OverviewContainer from '../client/src/containers/overview/OverviewContainer.js'
// import ImageGallery from '../client/src/components/overview/ImageGallery.jsx';
// import ImageGalleryContainer from '../client/src/containers/overview/ImageGalleryContainer.js';
// import RatingsAndStyles from '../client/src/components/overview/RatingsAndStyles.jsx';
// import RatingsAndStylesContainer from '../client/src/containers/overview/RatingsAndStylesContainer.js';
// import ExpandedView from '../client/src/components/overview/ExpandedView.jsx';
// import ExpandedViewContainer from '../client/src/containers/overview/ExpandedViewContainer.js';
import RatingsReviewsContainer from '../client/src/containers/RatingsReviewsContainer.js';
import { text } from '@fortawesome/fontawesome-svg-core';

// describe("Test related items redux components", () => {
//   let store;
//   let component;

//   beforeEach(() => {
//     store = mockStore({
//       product: {
//         id: 37315,
//         category: "hello",
//         name: "Heir Force Ones",
//         category: 'Kicks',
//         default_price: 99.00
//       },
//       styles: {results: [{photos: [{thumbnail_url: "hello"}]}]},
//       relatedProducts: [37316, 37316, 37318, 37319, 37311, 37313],
//       metaData: {characteristics: {
//         Comfort: {id: 125046, value: '2.9354838709677419'},
//         Quality: {id: 125047, value: '3.1290322580645161'},
//         Size: {id: 125044, value: '2.8000000000000000'},
//         Width: {id: 125045, value: '3.1944444444444444'}
//       },
//       ratings: {1: '32', 2: '4', 3: '5', 4: '4', 5: '12'},
//       }
//     });

//     render(
//     <Provider store = {store}>
//       <RelateditemsContainer/>
//     </Provider>
//     );

//   });

//   it('should render with given state from Redux store', async () => {
//     await waitFor(() => {
//       expect(screen.getByText("★★★★")).toBeInTheDocument()
//     })
//   });
// });
// describe("Test Overview redux components", () => {
//   let store;
//   let component;

//   beforeEach(() => {
//     store = mockStore({
//       product: {
//         category: "hello",
//         name: "test",
//         default_price: 100
//       },
//       styles: {results: [{photos: [{thumbnail_url: "hello"}]}]},
//       loading: 1,
//       currentStyle: {'style_id':221023,'name':'White & White','original_price':'99.00','sale_price':null,'default?':true,'photos':[{'thumbnail_url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80','url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}],'skus':{'1281158':{'quantity':10,'size':'7'},'1281159':{'quantity':30,'size':'7.5'}}},
//       mainImage: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//       imagesArray: [{"thumbnail_url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}],
//       slice: [0, 7, 0],
//       metaData: {"product_id":"37315","ratings":{"1":"32","2":"1","3":"3","4":"12","5":"14"},"recommended":{"false":"40","true":"22"},"characteristics":{"Size":{"id":125044,"value":"2.9285714285714286"},"Width":{"id":125045,"value":"3.3793103448275862"},"Comfort":{"id":125046,"value":"3.1666666666666667"},"Quality":{"id":125047,"value":"3.5000000000000000"}}},
//       expanded: false,
//       relatedProducts: [37316,37316,37318,37319,37311,37313]
//     });
//   });

// });


// describe("Test ImageGallery redux components", () => {
//   let store;
//   let component;

//   beforeEach(() => {
//     store = mockStore({
//       product: {
//         category: "hello",
//         name: "test",
//         default_price: 100
//       },
//       styles: {results: [{photos: [{thumbnail_url: "hello"}]}]},
//       loading: 1,
//       currentStyle: {'style_id':221023,'name':'White & White','original_price':'99.00','sale_price':null,'default?':true,'photos':[{'thumbnail_url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80','url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}],'skus':{'1281158':{'quantity':10,'size':'7'},'1281159':{'quantity':30,'size':'7.5'}}},
//       mainImage: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//       imagesArray: [{"thumbnail_url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}],
//       slice: [0, 7, 0],
//       metaData: {"product_id":"37315","ratings":{"1":"32","2":"1","3":"3","4":"12","5":"14"},"recommended":{"false":"40","true":"22"},"characteristics":{"Size":{"id":125044,"value":"2.9285714285714286"},"Width":{"id":125045,"value":"3.3793103448275862"},"Comfort":{"id":125046,"value":"3.1666666666666667"},"Quality":{"id":125047,"value":"3.5000000000000000"}}},
//       expanded: false,
//       relatedProducts: [37316,37316,37318,37319,37311,37313]
//     });

//     component = renderer.create(
//     <Provider store = {store}>
//       <ImageGalleryContainer/>
//     </Provider>
//     );
//   });

//   it('should render with given state from Redux store', () => {
//     expect(component.toJSON()).toMatchSnapshot();
//   });
// });

// describe("Test RatingsAndStyles redux components", () => {
//   let store;
//   let component;

//   beforeEach(() => {
//     store = mockStore({
//       product: {
//         category: "hello",
//         name: "test",
//         default_price: 100
//       },
//       styles: {results: [{photos: [{thumbnail_url: "hello"}]}]},
//       loading: 1,
//       currentStyle: {'style_id':221023,'name':'White & White','original_price':'99.00','sale_price':null,'default?':true,'photos':[{'thumbnail_url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80','url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}],'skus':{'1281158':{'quantity':10,'size':'7'},'1281159':{'quantity':30,'size':'7.5'}}},
//       mainImage: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//       imagesArray: [{"thumbnail_url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}],
//       slice: [0, 7, 0],
//       metaData: {"product_id":"37315","ratings":{"1":"32","2":"1","3":"3","4":"12","5":"14"},"recommended":{"false":"40","true":"22"},"characteristics":{"Size":{"id":125044,"value":"2.9285714285714286"},"Width":{"id":125045,"value":"3.3793103448275862"},"Comfort":{"id":125046,"value":"3.1666666666666667"},"Quality":{"id":125047,"value":"3.5000000000000000"}}},
//       expanded: false,
//       relatedProducts: [37316,37316,37318,37319,37311,37313]
//     });

//     component = renderer.create(
//     <Provider store = {store}>
//       <RatingsAndStylesContainer/>
//     </Provider>
//     );
//   });

//   it('should render with given state from Redux store', () => {
//     expect(component.toJSON()).toMatchSnapshot();
//   });
// });


// describe("Test ExpandedView redux components", () => {
//   let store;
//   let component;

//   beforeEach(() => {
//     store = mockStore({
//       product: {
//         category: "hello",
//         name: "test",
//         default_price: 100
//       },
//       styles: {results: [{photos: [{thumbnail_url: "hello"}]}]},
//       loading: 1,
//       currentStyle: {'style_id':221023,'name':'White & White','original_price':'99.00','sale_price':null,'default?':true,'photos':[{'thumbnail_url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80','url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}],'skus':{'1281158':{'quantity':10,'size':'7'},'1281159':{'quantity':30,'size':'7.5'}}},
//       mainImage: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//       imagesArray: [{"thumbnail_url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}],
//       slice: [0, 7, 0],
//       metaData: {"product_id":"37315","ratings":{"1":"32","2":"1","3":"3","4":"12","5":"14"},"recommended":{"false":"40","true":"22"},"characteristics":{"Size":{"id":125044,"value":"2.9285714285714286"},"Width":{"id":125045,"value":"3.3793103448275862"},"Comfort":{"id":125046,"value":"3.1666666666666667"},"Quality":{"id":125047,"value":"3.5000000000000000"}}},
//       expanded: false,
//       relatedProducts: [37316,37316,37318,37319,37311,37313]
//     });

//     component = renderer.create(
//     <Provider store = {store}>
//       <ExpandedViewContainer/>
//     </Provider>
//     );
//   });

//   it('should render with given state from Redux store', () => {
//     expect(component.toJSON()).toMatchSnapshot();
//   });
// });

describe("Test Ratings & Reviews redux components", () => {
    let store;
  
    beforeEach(() => {
      store = mockStore({
        product: [
            {
                "id": 37311,
                "campus": "hr-rfe",
                "name": "Camo Onesie",
                "slogan": "Blend in to your crowd",
                "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
                "category": "Jackets",
                "default_price": "140.00",
                "created_at": "2021-08-13T14:37:33.145Z",
                "updated_at": "2021-08-13T14:37:33.145Z"
            },
            {
                "id": 37312,
                "campus": "hr-rfe",
                "name": "Bright Future Sunglasses",
                "slogan": "You've got to wear shades",
                "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
                "category": "Accessories",
                "default_price": "69.00",
                "created_at": "2021-08-13T14:37:33.145Z",
                "updated_at": "2021-08-13T14:37:33.145Z"
            },
            {
                "id": 37313,
                "campus": "hr-rfe",
                "name": "Morning Joggers",
                "slogan": "Make yourself a morning person",
                "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
                "category": "Pants",
                "default_price": "40.00",
                "created_at": "2021-08-13T14:37:33.145Z",
                "updated_at": "2021-08-13T14:37:33.145Z"
            },
            {
                "id": 37314,
                "campus": "hr-rfe",
                "name": "Slacker's Slacks",
                "slogan": "Comfortable for everything, or nothing",
                "description": "I'll tell you how great they are after I nap for a bit.",
                "category": "Pants",
                "default_price": "65.00",
                "created_at": "2021-08-13T14:37:33.145Z",
                "updated_at": "2021-08-13T14:37:33.145Z"
            },
            {
                "id": 37315,
                "campus": "hr-rfe",
                "name": "Heir Force Ones",
                "slogan": "A sneaker dynasty",
                "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
                "category": "Kicks",
                "default_price": "99.00",
                "created_at": "2021-08-13T14:37:33.145Z",
                "updated_at": "2021-08-13T14:37:33.145Z"
            }
        ],
        reviews: {
            "product": "37315",
            "page": 0,
            "count": 5,
            "results": [
                {
                    "review_id": 1115847,
                    "rating": 2,
                    "summary": "Misleading Title",
                    "recommend": false,
                    "response": null,
                    "body": "I thought I was buying the movie Air Force One with Harrison Ford. That is a great movie. These are shoes",
                    "date": "2022-01-06T00:00:00.000Z",
                    "reviewer_name": "FordFan",
                    "helpfulness": 12,
                    "photos": []
                },
                {
                    "review_id": 1155746,
                    "rating": 4,
                    "summary": "SO GOOD!",
                    "recommend": true,
                    "response": null,
                    "body": "buy this",
                    "date": "2022-03-31T00:00:00.000Z",
                    "reviewer_name": "guesswho",
                    "helpfulness": 6,
                    "photos": [
                        {
                            "id": 2219414,
                            "url": "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                        }
                    ]
                },
                {
                    "review_id": 1115845,
                    "rating": 3,
                    "summary": "Shoes go on my feet",
                    "recommend": false,
                    "response": null,
                    "body": "These shoes do the job as described and cover my footskin from outside debris",
                    "date": "2022-01-06T00:00:00.000Z",
                    "reviewer_name": "FootGuy",
                    "helpfulness": 4,
                    "photos": []
                },
                {
                    "review_id": 1155744,
                    "rating": 4,
                    "summary": "SO GOOD!",
                    "recommend": true,
                    "response": null,
                    "body": "buy this",
                    "date": "2022-03-31T00:00:00.000Z",
                    "reviewer_name": "guesswho",
                    "helpfulness": 3,
                    "photos": [
                        {
                            "id": 2219412,
                            "url": "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
                        }
                    ]
                },
                {
                    "review_id": 1274893,
                    "rating": 4,
                    "summary": "test ReviewTitle",
                    "recommend": true,
                    "response": null,
                    "body": "test Review Body",
                    "date": "2022-05-31T00:00:00.000Z",
                    "reviewer_name": "test NickName",
                    "helpfulness": 0,
                    "photos": []
                }
            ]
          },
          metaData: {
            "product_id": "37315",
            "ratings": {
                "1": "33",
                "2": "6",
                "3": "3",
                "4": "14",
                "5": "14"
            },
            "recommended": {
                "false": "40",
                "true": "30"
            },
            "characteristics": {
                "Size": {
                    "id": 125044,
                    "value": "2.8000000000000000"
                },
                "Width": {
                    "id": 125045,
                    "value": "3.1944444444444444"
                },
                "Comfort": {
                    "id": 125046,
                    "value": "2.9354838709677419"
                },
                "Quality": {
                    "id": 125047,
                    "value": "3.1290322580645161"
                }
            }
        },
      });
  
      render(
      <Provider store = {store}>
        <RatingsReviewsContainer/>
      </Provider>
      );
  
    });
  
    // it('should render with given state from Redux store', async () => {
    //   await waitFor(() => {
    //     expect(screen.getAllByText("test")).toBeInTheDocument();
    //   })
    // });
    test('select Relevant should update list', async () => {
      userEvent.selectOptions(screen.getByTestId('sort'), "Relevant");
      await waitFor(() => {
        expect(screen.getByTestId('sort')).toHaveValue('relevant');
      })
    });

    test('select Newest should update list', async () => {
      userEvent.selectOptions(screen.getByTestId('sort'), "Newest");
      await waitFor(() => {
        expect(screen.getByTestId('sort')).toHaveValue('newest');
      })
    });
    test('select Helpful should update list', async () => {
      userEvent.selectOptions(screen.getByTestId('sort'), "Helpful");
      await waitFor(() => {
        expect(screen.getByTestId('sort')).toHaveValue('helpful');
      })
    });
    test('should display the element 5-stars', async () => {
      userEvent.click(screen.getByTestId("star_5"));
      await waitFor(() => {
        expect(screen.getAllByText('5-stars')[0]).toBeInTheDocument();
      })
    });
    test('should remove the element 5-stars when click again', async () => {
      userEvent.click(screen.getByTestId("star_5"));
      userEvent.click(screen.getByTestId("star_5"));
      await waitFor(() => {
        expect(screen.queryByText('5-stars')).not.toBeInTheDocument();
      })
    });

    test('should display the element 4-stars', async () => {
      userEvent.click(screen.getByTestId("star_4"));
      await waitFor(() => {
        expect(screen.getAllByText('4-stars')[0]).toBeInTheDocument();
      })
    });
    test('should remove the element 4-stars when click again', async () => {
      userEvent.click(screen.getByTestId("star_4"));
      userEvent.click(screen.getByTestId("star_4"));
      await waitFor(() => {
        expect(screen.queryByText('4-stars')).not.toBeInTheDocument();
      })
    });

    test('should display the element 3-stars', async () => {
      userEvent.click(screen.getByTestId("star_3"));
      await waitFor(() => {
        expect(screen.getAllByText('3-stars')[0]).toBeInTheDocument();
      })
    });
    test('should remove the element 3-stars when click again', async () => {
      userEvent.click(screen.getByTestId("star_3"));
      userEvent.click(screen.getByTestId("star_3"));
      await waitFor(() => {
        expect(screen.queryByText('3-stars')).not.toBeInTheDocument();
      })
    });

    test('should display the element 2-stars', async () => {
        userEvent.click(screen.getByTestId("star_2"));
        await waitFor(() => {
          expect(screen.getAllByText('2-stars')[0]).toBeInTheDocument();
        })
      });
    test('should remove the element 2-stars when click again', async () => {
        userEvent.click(screen.getByTestId("star_2"));
        userEvent.click(screen.getByTestId("star_2"));
        await waitFor(() => {
          expect(screen.queryByText('2-stars')).not.toBeInTheDocument();
        })
      });

    test('should display the element 1-stars', async () => {
        userEvent.click(screen.getByTestId("star_1"));
        await waitFor(() => {
          expect(screen.getAllByText('1-stars')[0]).toBeInTheDocument();
        })
      });
    test('should remove the element 1-stars when click again', async () => {
        userEvent.click(screen.getByTestId("star_1"));
        userEvent.click(screen.getByTestId("star_1"));
        await waitFor(() => {
          expect(screen.queryByText('1-stars')).not.toBeInTheDocument();
        })
    });

    // test('should remove all the tag when click on clear', async () => {
    //     userEvent.click(screen.getByTestId("star_1"));
    //     userEvent.click(screen.getByTestId("star_2"));
    //     userEvent.click(screen.getByText("clear"));
    //     await waitFor(() => {
    //       expect(screen.queryByText('1-stars')).not.toBeInTheDocument();
    //       expect(screen.queryByText('2-stars')).not.toBeInTheDocument();
    //     })
    // });

    test('should show review form when click on ADD REVIEW', async () => {
        userEvent.click(screen.getByTestId("addreview"));
        await waitFor(() => {
          expect(screen.getByText("Write Your Review")).toBeInTheDocument();
          expect(screen.getByText("Overall Rating")).toBeInTheDocument();
        })
    });

    test('should set over all rating when click on rating section', async () => {
        userEvent.click(screen.getByTestId("addreview"));
        userEvent.click(screen.getByTestId("buttonNext"));
        console.log(screen);
        // await waitFor(() => {
        //   expect(window.alert()).toBeCalled();
        // })
    });
});

