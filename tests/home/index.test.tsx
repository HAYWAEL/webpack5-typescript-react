/*
 * @Date: 2021-03-18 11:16:08
 * @LastEditors: HAYWAEL
 * @LastEditTime: 2021-03-18 13:34:43
 * @FilePath: /webpack5-demo/tests/home/index.test.tsx
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home  from '../../src/pages/home';
test("Header contains correct text", () => {
    render(<Home />);
    const text = screen.getByText("我是首页");
    expect(text).toBeInTheDocument();
});