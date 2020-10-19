/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

'use strict';

let React;
let ReactDOM;

describe('ADOM', () => {
  beforeEach(() => {
    React = require('react');
    ReactDOM = require('react-dom');
  });

  it('creates initial namespaced markup', () => {
    const root = document.createElement('div');
    const Parent = (props) => {
      console.log(props)
      return <div data-val="111">0000</div>
    }
    // eslint-disable-next-line no-debugger
    debugger;
    ReactDOM.render(<Parent key="parent" prop1="value1" />, root)
    // expect(markup).toContain('xlink:href="http://i.imgur.com/w7GCRPb.png"');
  });
 
});
