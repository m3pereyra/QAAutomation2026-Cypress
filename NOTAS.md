# Git

## Ver estado del repositorio

git status

Muestra los archivos modificados, agregados y pendientes de commit.

## Agregar archivos al staging

git add .

Agrega todos los cambios al área de preparación.

## Agregar un archivo específico

git add nombre_archivo

## Quitar archivos del staging

git reset

Deshace el último git add.

## Crear commit

git commit -m "mensaje"

Guarda los cambios en el historial local.

## Subir cambios a GitHub

git push

## Clonar repositorio

git clone URL_REPOSITORIO


# Cypress

## Abrir Cypress

npx cypress open

## Ejecutar todos los tests

npx cypress run

## Ejecutar un test específico

npx cypress run --spec "cypress/e2e/login.cy.js"

## Visitar una URL

cy.visit('https://www.saucedemo.com')

## Buscar un elemento

cy.get('[data-test="username"]')

## Escribir texto

cy.get('[data-test="username"]')
  .type('standard_user')

## Hacer click

cy.get('[data-test="login-button"]')
  .click()

## Verificar visibilidad

cy.get('[data-test="error"]')
  .should('be.visible')

## Verificar texto

cy.get('[data-test="error"]')
  .should('contain', 'Epic sadface')

## Verificar URL

cy.url()
  .should('include', 'inventory.html')

## Contar elementos

cy.get('[data-test="inventory-item"]')
  .should('have.length', 6)


# Custom Commands

## Crear comando login

Cypress.Commands.add('login', (user, password) => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type(user)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

## Uso

cy.login('standard_user', 'secret_sauce')