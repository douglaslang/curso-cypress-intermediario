/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker');
import {v4 as uuidv4} from 'uuid';

describe('Create Issue', () => {
    const issue = {
        title: `issue-${uuidv4()}`,
        description: faker.random.words(3),
        project: {
           name: `project-${uuidv4()}`,
           description: faker.random.words(5)
        }
    }

    before(() =>{
        cy.login()
        cy.api_createProject(issue.project)
        //cy.gui_createProject(issue.project)
    })

    it('successfully', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details')
            .should('contain', issue.title)
            .and('contain', issue.description)
    })
})