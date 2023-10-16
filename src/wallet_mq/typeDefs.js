export const mqTypeDef = `
  type Img {
      id_user: String!
      url_image: String!
      type: String!
  }
  input ImgInput {
      id_user: String!
      url_image: String!
      type: String!
  }`;

export const mqQueries = `

  `;

export const mqMutations = `
    initializeVerification(img: ImgInput!): String!

`;
