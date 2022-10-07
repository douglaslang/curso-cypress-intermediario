/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker');
import {v4 as uuidv4} from 'uuid';

describe('Create Project', () => {
    it('successfully', () => {
        const project = {
            name: `project-${uuidv4()}`,
            description: faker.random.words(5)
        }

        cy.api_createProject(project)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(project.name)
                expect(response.body.description).to.equal(project.description)
            })
    })
})