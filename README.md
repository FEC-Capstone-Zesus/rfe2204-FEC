# Store of Zeus
### or, rfe2204-FEC

![Demo GIF](https://github.com/FEC-Capstone-Zesus/rfe2204-FEC/blob/overview/client/dist/assets/Demo.gif?raw=true)

# Setup
Fork and clone the repo.

Install all dependencies:

>$npm install

Create new `.env` file and copy contents of `example.env` into `.env` file. Fill in data as necessary.

Start server and client:

>$npm run dev

## Project

The purpose of this app is to replicate an estore environment front-end. It performs API calls to GET product and related information and saves the initial data to a Redux store. Redux was chosen due to the need of components across the app sharing the same data. The UI is a combination of React and styled-components.
<br>
The app is composed of three main sections and their subcomponents/features:
<br>

>### Overview
> - Image Gallery

> - Expanded View

> - Product Information

> - Style Selector

> - Add to cart
<br>

>### Related Items & Comparison
> - Related Products Cards

> - Your Outfit List
<br>

>### Ratings & Reviews
> - Write new review

> - Reviews List

> - Sorting

> - Rating Breakdown

> - Product Breakdown

## REST API for Store of Zeus

> `GET /products`
>> #### Example Response

    [
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
    }
    ]

> `GET /products/:product_id`
> `GET /products/:product_id/styles`
> `GET /products/:product_id/related`
> `GET /reviews`
> `GET /reviews/meta`
> `GET /qa/questions`
> `GET /qa/questions/:question_id/answers`
> `POST /reviews`
> `POST /qa/questions`
> `POST /qa/questions/:question_id/answers`
> `PUT /reviews/:review_id/helpful`
> `PUT /reviews/:review_id/report`
> `PUT /qa/questions/:question_id/helpful`
> `PUT /qa/questions/:question_id/report`
> `PUT /qa/questions/:answer_id/helpful`
> `PUT /qa/questions/:answer_id/report`


## Technology Choices

Framework

-React
-Redux

CSS

-styled-components