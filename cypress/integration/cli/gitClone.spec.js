/// <reference types="Cypress" />

const { faker } = require('@faker-js/faker');
import {v4 as uuidv4} from 'uuid';

describe.skip('git clone', () => {
    const project = {
      name: `project-${uuidv4()}`,
      description: faker.random.words(5)
    }
  
    beforeEach(() => cy.api_createProject(project))
  
    it('successfully', () => {
      cy.cloneViaSSH(project)
  
      cy.readFile(`temp/${project.name}/README.md`)
        .should('contain', `# ${project.name}`)
        .and('contain', project.description)
    })
  })