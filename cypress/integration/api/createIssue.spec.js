/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker');
import {v4 as uuidv4} from 'uuid';

describe('Create Issue', () => {
    it('successfully', () => {
        const issue = {
            title: `issue-${uuidv4()}`,
            description: faker.random.words(3),
            project: {
               name: `project-${uuidv4()}`,
               description: faker.random.words(5)
            }
        }

        cy.api_createIssue(issue)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.title).to.equal(issue.title)
                expect(response.body.description).to.equal(issue.description)
            })
    })
})