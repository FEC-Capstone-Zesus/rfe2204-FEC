# Store of Zeus

![Demo GIF](https://github.com/FEC-Capstone-Zesus/rfe2204-FEC/blob/overview/client/dist/assets/Demo.gif?raw=true)

# Setup

Fork and clone the repo.

Install all dependencies:

>$npm install

Create new `.env` file and copy contents of `example.env` into `.env` file. Fill in data as necessary.

Start server and client:

>$npm run dev

Navigate to: http://localhost:3000/

# Project

The purpose of this app is to replicate an estore environment front-end. It performs API calls to GET product and related information and saves the initial data to a Redux store. Redux was chosen due to the need of components across the app sharing the same data. The UI is a combination of React and styled-components. Styled-components was chosen for its familiar CSS syntax as well as the ease of keeping styles within the same component file.

The app is composed of three main sections and their subcomponents/features:

### Overview
> - Image Gallery
> - Expanded View
> - Product Information
> - Style Selector
> - Add to cart

### Related Items & Comparison
> - Related Products Cards
> - Your Outfit List

### Ratings & Reviews
> - Write new review
> - Reviews List
> - Sorting
> - Rating Breakdown
> - Product Breakdown

# REST API for Store of Zeus

## GET Products

`/products`

#### Example Response

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
        // ..
    ]

## GET Single Product

`/products/:product_id`

#### Example Response

    {
      "id": 37311,
      "campus": "hr-rfe",
      "name": "Camo Onesie",
      "slogan": "Blend in to your crowd",
      "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      "category": "Jackets",
      "default_price": "140.00",
      "created_at": "2021-08-13T14:37:33.145Z",
      "updated_at": "2021-08-13T14:37:33.145Z",
      "features": [
          {
              "feature": "Fabric",
              "value": "Canvas"
          },
          {
              "feature": "Buttons",
              "value": "Brass"
          }
          // ..
      ]
    }

## GET Styles

`/products/:product_id/styles`

#### Example Response

    {
      "product_id": "37311",
      "results": [
          {
            "style_id": 220998,
            "name": "Forest Green & Black",
            "original_price": "140.00",
            "sale_price": null,
            "default?": true,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                }
                // ..
            ],
            "skus": {
                "1281032": {
                    "quantity": 8,
                    "size": "XS"
              }
              // ..
          }
          // ..
      ]
    }

## GET Related Items

`/products/:product_id/related`

#### Example Response

    [
        37312,
        37313,
        37318,
        37317
    ]

## GET Reviews

`/reviews?product_id=[product_id]`

#### Example Response

    {
        "product": "37311",
        "page": 0,
        "count": 5,
        "results": [
              {
                  "review_id": 1135806,
                  "rating": 3,
                  "summary": "I don't like the model's attitude in the camo picture",
                  "recommend": false,
                  "response": null,
                  "body": "she grouchy",
                  "date": "2022-02-21T00:00:00.000Z",
                  "reviewer_name": "Jenny",
                  "helpfulness": 24,
                  "photos": []
              }
              // ..
        ]
    }

## GET Reviews Meta Data

`/reviews/meta?product_id=[product_id]`

#### Example Response

    {
        "product_id": "37311",
        "ratings": {
            "1": "34",
            "2": "19",
            "3": "55",
            "4": "59",
            "5": "164"
        },
        "recommended": {
            "false": "71",
            "true": "260"
        },
        "characteristics": {
            "Fit": {
                "id": 125031,
                "value": "3.1693121693121693"
            },
            "Length": {
                "id": 125032,
                "value": "3.0990099009900990"
            }
            // ..
        }
    }

## POST Review

`/reviews`

#### Example Post

    {
      product_id: [integer],
      rating: [integer],
      summary: [text],
      recommend: [bool],
      name: [text],
      email: [text],
      photos: [[text]],
      body: [text],
      characteristics: [object]
    }

#### Example Response
    Status 201 CREATED`

## PUT Mark Review Helpful

`/reviews/:review_id/helpful`

#### Example Response
    Status 204 NO CONTENT

## PUT Report Review

`/reviews/:review_id/report`

#### Example Response
    Status 204 NO CONTENT

# Technology Choices

#### Framework

- React

- Redux

#### CSS

- styled-components

# Collaborators

### Nikko Elliott

 - Section: Overview

 - Github: <a href='https://github.com/nelliott82'>nelliott82</a>

### Brice Koppin

 - Section: Related Items & Comparison

 - Github: <a href='https://github.com/Bkoppin'>Bkoppin</a>

### Yaokai Dong

 - Section: Ratings & Reviews

 - Github: <a href='https://github.com/ykdong'>ykdong</a>

# MIT License

MIT License

Copyright (c) 2022 N. Elliott, B. Koppin, Y. Dong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.