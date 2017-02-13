import React from 'react'
import GameWonPage from 'routes/GameWonPage/components/GameWonPage.js'
import { render, mount, shallow } from 'enzyme'



describe('(View) GameWonPage', () => {
  let _component

  beforeEach(() => {
    _component = mount(<GameWonPage />)
  })

  it('Renders the gif', () => {
  	const gif = _component.find('img')
    expect(gif).to.exist 
  })
})