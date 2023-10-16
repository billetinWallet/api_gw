export const kycTypeDef = `
  type Image {
      _id: ID!
      id_user: String!
      url_image: String!
      type: String!
  }
  input ImageInput {
      id_user: String!
      url_image: String!
      type: String!
  }

  type Status {
      _id: ID!
      id_user: String!
      state: String!
      date: String!
  }
  input StatusInput {
      id_user: String!
      state: String!
      date: String!
  }`;

export const kycQueries = `
      allImages: [Image]!
      imageByIdUser(id_user: String!): Image!
      imageByIdImage(_id: ID): Image!

      allStatus: [Status]!
      statusByIdUser(id_user: String!): Status!
      statusByIdStatus(_id: ID): Status!
  `;

export const kycMutations = `
    createImage(image: ImageInput!): Image!
    updateImage(_id: ID!, image: ImageInput!): Image!
    deleteImage(_id: ID!): String!

    createStatus(status: StatusInput!): Status!
    updateStatus(_id: ID!, status: StatusInput!): Status!
    deleteStatus(_id: ID!): String!
`;
