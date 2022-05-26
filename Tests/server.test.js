const request = require("supertest");
const app = require("../server/index.js");
const superagent = require("superagent");
const jest = require("jest");


describe("Test the GET product path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/products")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the GET product/:product_id path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/products/")
      .query({product_id: '37137'})
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the GET /products/:product_id/styles path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/products/37400/styles")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the GET /products/:product_id/related path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/products/37400/related")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});


describe("Test the GET reviews path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/reviews")
      .query({product_id: '37137', sort: 'helpful'})
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the GET reviews/meta path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/reviews/meta")
      .query({product_id: '37137'})
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the POST reviews path", () => {
  test("It should response the POST method", () => {
    return request(app)
      .post("/reviews")
      .send({
        product_id: 37400,
        rating: 4,
        summary: 'this was a good product!',
        recommend: true,
        name: "zeus",
        email: "zeus@gmail.com",
        photos: [],
        body: "Wow this was really really good",
        characteristics: {"125339": 3}
      })
      .then(response => {
        expect(response.statusCode).toBe(201);
      });
  });
});

describe("Test the PUT reviews/:review_id/helpful path", () => {
  test("It should response the PUT method", () => {
    return request(app)
      .put("/reviews/586079/helpful")
      .send({
        review_id: 586079
      })
      .then(response => {
        expect(response.statusCode).toBe(204);
      });
  });
});

describe("Test the PUT reviews/:review_id/report path", () => {
  test("It should response the PUT method", () => {
    return request(app)
      .put("/reviews/586079/report")
      .send({
        review_id: 586079
      })
      .then(response => {;
        expect(response.statusCode).toBe(204);
      });
  });
});

describe("Test the GET qa/questions path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/qa/questions/?product_id=37400")
      .then(response => {
        console.log(response);
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the GET /qa/questions/:question_id/answers path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/qa/questions/301228/answers")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the POST /qa/questions/:question_id/answers path", () => {
  test("It should response the POST method", () => {
    return request(app)
      .post("/qa/questions/301228/answers")
      .send({
        photos: [],
        name: "zeus",
        email: "zeus@gmail.com",
        body: "Wow this was really really good",
      })
      .then(response => {
        expect(response.statusCode).toBe(201);
      });
  });
});

describe("Test the POST /qa/questions path", () => {
  test("It should response the POST method", () => {
    return request(app)
      .post("/qa/questions")
      .send({
        product_id: 37400,
        name: "zeus",
        email: "zeus@gmail.com",
        body: "Wow this was really really good",
      })
      .then(response => {
        expect(response.statusCode).toBe(201);
      });
  });
});

describe("Test the PUT /qa/questions/:question_id/helpful path", () => {
  test("It should response the PUT method", () => {
    return request(app)
      .put("/qa/questions/301228/helpful")
      .send({
        question_id: 301228
      })
      .then(response => {
        expect(response.statusCode).toBe(204);
      });
  });
});

describe("Test the PUT /qa/questions/:question_id/report path", () => {
  test("It should response the PUT method", () => {
    return request(app)
      .put("/qa/questions/301228/report")
      .send({
        question_id: 301228
      })
      .then(response => {
        expect(response.statusCode).toBe(204);
      });
  });
});

describe("Test the PUT /qa/questions/:answer_id/helpful path", () => {
  test("It should response the PUT method", () => {
    return request(app)
      .put("/qa/questions/2811025/helpful")
      .send({
        answer_id: 2811025
      })
      .then(response => {
        expect(response.statusCode).toBe(204);
      });
  });
});

describe("Test the PUT /qa/questions/:answer_id/report path", () => {
  test("It should response the PUT method", () => {
    return request(app)
      .put("/qa/questions/2811025/report")
      .send({
        answer_id: 2811025
      })
      .then(response => {
        expect(response.statusCode).toBe(204);
      });
  });
});

describe("Test the GET /cart path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/cart")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Test the POST /cart path", () => {
  test("It should response the POST method", () => {
    return request(app)
      .post("/cart")
      .send({
        sku_id: 1281032,
        count: 1
      })
      .then(response => {
        expect(response.statusCode).toBe(201);
      });
  });
});

describe("Test the POST /interactions path", () => {
  test("It should response the POST method", () => {
    return request(app)
      .post("/interactions")
      .send({
        element: "hello",
        widget: "test",
        time: "6/29"
      })
      .then(response => {
        expect(response.statusCode).toBe(201);
      });
  });
});




