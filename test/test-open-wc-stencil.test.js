import {
  expect,
  assert,
  fixture
} from '@open-wc/testing';

import {
  nextFrame
} from '@open-wc/testing-helpers';

import {
  defineCustomElements
} from '../dist/esm/es2017/nova.define.js';
defineCustomElements(window);

describe('<nova-badge>', () => {
  it('Rendered by Stencil', async () => {
    const el = await fixture('<nova-badge></nova-badge>');
    await nextFrame();
    expect(el.getAttribute('class')).to.equal('hydrated');
    const scoreElement = el.shadowRoot.querySelector('.score');
    assert.notEqual(scoreElement.getAttribute('class').indexOf('one'), -1);
  });
  it('should have the nova badge score to 1', async () => {
    const el = await fixture('<nova-badge></nova-badge>');
    await nextFrame();
    const scoreElement = el.shadowRoot.querySelector('.score');
    assert.equal(scoreElement.textContent, "1");
  });
  /*
  it('should have the nova badge score correct CSS class', async () => {
    const el = await fixture('<nova-badge></nova-badge>');
    await nextFrame();
    const scoreElement = el.shadowRoot.querySelector('.score');
    assert.notEqual(scoreElement.getAttribute('class').indexOf('one'), -1);
  });
  */
});