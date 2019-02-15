import {
  expect,
  assert,
  fixture
} from '@open-wc/testing';

import {
  defineCustomElements
} from '../dist/esm/es2017/mycomponent.define.js';
defineCustomElements(window);

describe('<my-component>', () => {
  it('Rendered by Stencil', async () => {
    const el = await fixture('<my-component></my-component>');

    expect(el.getAttribute('class')).to.equal('hydrated');
  });

  it('Should render some text', async () => {
    const el = await fixture('<my-component></my-component>');

    const divElement = el.shadowRoot.querySelector('div');
    assert.equal(divElement.textContent, `Hello, World! I'm `);
  });

  it('Should render some text coming from attributes', async () => {
    const el = await fixture(`<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`);

    const divElement = el.shadowRoot.querySelector('div');
    assert.equal(divElement.textContent, `Hello, World! I'm Stencil 'Don't call me a framework' JS`);
  });
});