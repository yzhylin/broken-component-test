
import App from '../../src/app/app';


describe(App.name, () => {
    it('sasfd', () => {
        cy.mount(<App />);

        cy.contains('Hello there,').should('exist')
    })
});
