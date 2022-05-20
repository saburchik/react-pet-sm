/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { create } from "react-test-renderer";
import Paginator from './Paginator';

describe('Testing the component Paginator', () => {
    test('page count is 11 but should be showed only 10', () => {
        const component = create(<Paginator pageSize="10" totalItemsCount="11" userSize="1" />)
        const root = component.root
        let lis = root.findAllByType("li")
        expect(lis).toHaveLength(10)
    })
    test('if pages count os more than 10 buttons NEXT should be preset', () => {
        const component = create(<Paginator pageSize="10" totalItemsCount="11" userSize="1" />)
        const root = component.root
        let button = root.findAllByType("button")
        expect(button).toHaveLength(1)
    })
})