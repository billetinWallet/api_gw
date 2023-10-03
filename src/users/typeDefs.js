export const userTypeDef = `
  type User_ {
    _id: String!,
    id_user: Int!,
    document_type: Int!,
    document_number: String!,
    first_name: String!,
    last_name: String!,
    sex: String!,
    verified: Boolean!,
  }
  input User_Input {
    id_user: Int!,
    document_type: Int!,
    document_number: String!,
    first_name: String!,
    last_name: String!,
    sex: String!,
    verified: Boolean!,
  }
  
   `;

export const userQueries = `
      allUser_: [User_]!
      userById_(id_user: Int!): User_!
  `;

export const userMutations = `
createUser(user_: User_Input!): User_!
updateUser(id_user: Int!, user: User_Input!): User_!
deleteUser(id_user: Int!): String!
`;
