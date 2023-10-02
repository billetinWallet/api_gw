export const transactionTypeDef = `
  type User {
      id_user: Int!
      document_number: Int!
  }
  input UserInput {
      document_number: Int!
  }`;

export const transactionQueries = `
      allUsers: [User]!
      userById(id_user: Int!): User!
  `;

export const transactionMutations = `
    createUser(user: UserInput!): User!
`;
