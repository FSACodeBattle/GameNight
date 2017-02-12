import React from 'react'
import HomeView from 'routes/Home/components/HomeView.js'
import { render, shallow, mount } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = mount(<HomeView />)
    console.log(_component);
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('p');
    console.log('asjdfaldjsf', welcome);
    expect(welcome).to.exist;
    expect(welcome.text()).to.match(/CODE BATTLE/);
  })

  it('Renders an awesome duck image', () => {
    const duck = _component.find('img')
    expect(duck).to.exist
    expect(duck.attr('alt')).to.match(/This is a duck, because Redux!/)
  })
})
