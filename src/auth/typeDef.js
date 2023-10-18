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
    id: Int!
  }

  input Login {
    username: String!
    password: String!
  }
  
   `;

export const authQueries = `
      getUser: _User!
  `;

export const authMutations = `
    createToken(login: Login!): Token!
    newUser(User: UserRequest!): String!
`;