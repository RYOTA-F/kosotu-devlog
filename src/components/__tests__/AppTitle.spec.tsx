import React from 'react'
import renderer from 'react-test-renderer'
import AppTitle from '../AppTitle'

test('AppTitle', () => {
  const component = renderer.create(<AppTitle />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})