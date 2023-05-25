// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// import React from 'react'
import Stepper from '../../src/component/Stepper'
// import Stepper from './Stepper'

describe('<Stepper />', () => {
  // it('renders', () => {
  //   // see: https://on.cypress.io/mounting-react
  //   // cy.mount(<Stepper />)
  //   cy.visit('http://localhost:3000/')
  // })
  it('stepper should default to 0', () => {
    cy.visit('/') //Root beacuse we set default Route on Config file
    cy.get('span').should('have.text', '0')
  })

  it('supports an "initial" prop to set the value', () => {
    // cy.get('[data-cy=counter]').should('have.text', '100')
    cy.visit('/')
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=counter]').should('have.text', '1')
  })
})


