import user1 from "../fixtures/user1.json"
import user2 from "../fixtures/user2.json"

describe('template spec', () => {
  it('create user', () => {
    cy.addUser(user1);
    cy.request('get',`${user1.username}`).then((response) => {
      expect(response.body).to.deep.eqls(user1);
    });
  });
 
  it('change user', () => {
    cy.addUser(user1);
    cy.request('PUT',`${user1.username}`, user2).then((response) => {
      expect(response.status).be.eqls(200);
    });
    cy.request('get',`${user2.username}`).then((response) => {
      expect(response.body).to.deep.eqls(user2);
    });
  });
  it('delite user', () => {
    cy.addUser(user1);
    cy.request('DELETE',`${user1.username}`).then((response) => {
      expect(response.status).be.eq(200);
    });
  });
});