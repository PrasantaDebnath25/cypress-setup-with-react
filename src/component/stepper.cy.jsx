// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

import React from 'react'
import Stepper from './Stepper'
// import Stepper from './Stepper'

describe('<Stepper />', () => {
  // it('renders', () => {
  //   // see: https://on.cypress.io/mounting-react
  //   // cy.mount(<Stepper />)
  //   cy.mount(<Stepper />)
  // })
  it('stepper should default to 0', () => {
    cy.mount(<Stepper />)
    cy.get('span').should('have.text', '0')
  })

  it('supports an "initial" prop to set the values', () => {
    // cy.get('[data-cy=counter]').should('have.text', '100')
    cy.mount(<Stepper />)
    cy.get('[data-cy=increment]').click()
  cy.get('[data-cy=counter]').should('have.text', '1')
  })
})