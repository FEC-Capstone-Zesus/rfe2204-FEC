# Store of Zeus
### or, rfe2204-FEC

![Demo GIF](https://github.com/FEC-Capstone-Zesus/rfe2204-FEC/blob/overview/client/dist/assets/Demo.gif?raw=true)

# Setup
Fork and clone the repo.<br>

Install all dependencies:<br>

>$npm install

<br>

Create new `.env` file and copy contents of `example.env` into `.env` file. Fill in data as necessary.<br>

Start server and client:<br>

>$npm run dev

## Project

The purpose of this app is to replicate an estore environment front-end. It performs API calls to GET product and related information and saves the initial data to a Redux store. Redux was chosen due to the need of components across the app sharing the same data. The UI is a combination of React and styled-components.
<br>
The app is composed of three main sections and their subcomponents/features:
<br>

>### Overview
>-Image Gallery
>-Expanded View
>-Product Information
>-Style Selector
>-Add to cart
<br>

>### Related Items & Comparison
>-Related Products Cards
>-Your Outfit List
<br>

>### Ratings & Reviews
>-Write new review
>-Reviews List
>-Sorting
>-Rating Breakdown
>-Product Breakdown

## REST API for Store of Zeus

> `GET /products`
>> ### Example Response
>>[
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
]
> `GET /products/:product_id`
> `GET /products/:product_id/styles`
> `GET /products/:product_id/related`
> `GET /reviews`
> `GET /reviews/meta`


## Technology Choices

Framework

-React
-Redux

CSS

-styled-components