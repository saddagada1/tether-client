/**
 * Generated by orval v6.22.1 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import { faker } from "@faker-js/faker";
import { HttpResponse, delay, http } from "msw";

export const getGetProductMock = () => faker.word.sample();

export const getProductControllerMock = () => [
  http.get("*/user/products", async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getGetProductMock()), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
];
