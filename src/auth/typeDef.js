export const authTypeDef = `
  type Register {
    id_user: Int!,
    username: String!,
    password: String!,
    fullname: String!,
  }
  input Register_Input {
    username: String!,
    password: String!,
    fullname: String!,
  }

  type Login {
    id_user: Int!,
    username: String!,
    password: String!,
    fullname: String!,
  }
  input Login_Input {
    username: String!,
    password: String!,
  }
  
   `;

export const authQueries = `
      allUsers_: [Login]!
      login(logged_user: Login_Input!): Login!
  `;

export const authMutations = `
register(register_user: Register_Input): Register!
`;