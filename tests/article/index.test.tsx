/*
 * @Date: 2021-03-18 13:46:02
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-18 14:03:43
 * @FilePath: /webpack5-demo/tests/article/index.test.tsx
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Content from "../../src/pages/article";

test("Content contains var image", () => {
  render(<Content />);
  const car = screen.getByAltText("我是文章页");
  expect(car).toBeInTheDocument();
});