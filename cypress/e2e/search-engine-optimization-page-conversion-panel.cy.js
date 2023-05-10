describe('Conversion Panel', () => {
  beforeEach(() => {
      cy.visit('https://www.webstacks.com/solutions/search-engine-optimization')
  })

  it('checks conversion panel items', () => {
      cy.get('#search-engine-optimization-conversion-panel-section').should('exist')

      //cy.get('.eCNBlG').should('exist').contains('See how you can scale faster with Webstacks')
      //cy.get('h2').contains('See how you can scale faster with Webstacks').should('exist')
      cy.get('.eCNBlG').should('have.prop', 'tagName', 'H2').contains('See how you can scale faster with Webstacks')

      cy.get('.iBCfmO').should('have.prop', 'tagName', 'P')

      cy.getByInternalName('Schedule a call Button Component').should('exist').contains('Schedule a call')
  })

  context('Checks conversion panel on different viewports', () => {
      it('checks panel width on a desktop', () => {
          cy.viewport(1700, 1300)
          cy.get('.cTnQgS').eq(4).invoke('width').should('eq', 1170)
      })

      it('checks the panel width on a tablet', () => {
          cy.viewport(991, 800)
          cy.get('.cTnQgS').eq(4).invoke('width').should('eq', 943)
      })

      it('checks the panel width on a mobile', () => {
          cy.viewport(375, 700)
          cy.get('.cTnQgS').eq(4).invoke('width').should('eq', 343)
      })
  })

  context('Checks the css values of the conversion panel items', () => {
      it('the conversion panel contains the correct background colors', () => {
          cy.get('#search-engine-optimization-conversion-panel-section')
              .should('have.css', 'background-image', 'linear-gradient(rgb(2, 6, 13) 0%, rgb(4, 13, 31) 100%)')

          cy.get('.kUbXp')
              .should('have.css', 'background-image', 'linear-gradient(226.63deg, rgb(21, 45, 80) 1.21%, rgba(11, 14, 37, 0) 40.83%), linear-gradient(199.05deg, rgb(11, 14, 37) 1.15%, rgba(11, 14, 37, 0) 100.04%)')
      })

      it('the h2 heading contains the correct css values', () => {
          cy.get('.eCNBlG').should('have.css', 'color', 'rgb(255, 255, 255)')
          cy.get('.eCNBlG').should('have.css', 'font-family', 'Soehne, sans-serif')
          cy.get('.eCNBlG').should('have.css', 'font-size', '35.168px')
      })

      it('the p text contains the correct css values', () => {
          cy.get('.iBCfmO').eq(32).should('have.css', 'color', 'rgb(216, 233, 253)')
          cy.get('.iBCfmO').eq(32).should('have.css', 'font-family', 'Soehne, sans-serif')
          cy.get('.iBCfmO').eq(32).should('have.css', 'font-size', '22.496px')
      })

      it('the button contains the correct css values', () => {
          cy.getByInternalName('Schedule a call Button Component').should('have.css', 'background-color', 'rgb(9, 105, 221)')
          cy.getByInternalName('Schedule a call Button Component').should('have.css', 'color', 'rgb(255, 255, 255)')
          cy.getByInternalName('Schedule a call Button Component').should('have.css', 'font-family', 'Soehne, sans-serif')
          cy.getByInternalName('Schedule a call Button Component').should('have.css', 'font-size', '18px')
      })
  })

  it('clicks schedule a call button', () => {
      cy.getByInternalName('Schedule a call Button Component').click()
      cy.location('pathname').should('eq', '/sales')
  })
})