it('works', () => {
	cy.visit('http://localhost:3000/auth/signin')
	cy.contains('label', 'Email')
	cy.contains('label', 'Password')
})
