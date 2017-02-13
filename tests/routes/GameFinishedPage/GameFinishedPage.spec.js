import React from 'react'
import GameFinishedPage from 'routes/GameFinishedPage/components/GameFinishedPage.js'
import { render, mount, shallow } from 'enzyme'



describe('(View) GameFinishedPage', () => {
  let _component

  beforeEach(() => {
    _component = mount(<GameFinishedPage />)
  })

  it('Renders the gif', () => {
  	const gif = _component.find('img')
    expect(gif).to.exist 
  })
})