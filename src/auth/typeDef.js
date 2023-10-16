export const authTypeDef = `
  input UserRequest {
    document_number: String!
    password: String!
  }

  type Token {
    access_token: String!
    token_type: String!
  }

  type _User {
    document_number: String!
    id: Int!
  }
  
   `;

export const authQueries = `
      getUser: _User!
  `;

export const authMutations = `
    createToken(User: UserRequest!): Token!
    newUser(User: UserRequest!): String!
`;