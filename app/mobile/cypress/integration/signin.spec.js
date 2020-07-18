it('Existing user can sign in', () => {
	cy.visit('http://localhost:3000/auth/signin')
	cy.get('input[name="email"]').click().type('test@mail.com')
	cy.get('input[name="password"]').click().type('testing1234')
	cy.get('button[type="submit"]').click()
	cy.url().should('eq', 'http://localhost:3000/dashboard')
})

it('New user can not sign in', () => {
	cy.visit('http://localhost:3000/auth/signin')
	cy.get('input[name="email"]').click().type('newuser@mail.com')
	cy.get('input[name="password"]').click().type('testing1234')
	cy.get('button[type="submit"]').click()
	cy.url().should('eq', 'http://localhost:3000/auth/signin')
	cy.contains('Identifier or password invalid.')
})
