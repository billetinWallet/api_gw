export const CronTypeDef = `
  type RegisterPayment {
      id: ID!
      id_payment: String!
      state: String!
  }
  input RegisterPaymentInput {
    id_payment: String!
    state: String!
  }

  type RegisterRecharge {
      id: ID!
      id_recharge: String!
      state: String!
  }
  input RegisterRechargeInput {
      id_recharge: String!
      state: String!
  }`;

export const CronQueries = `
      allRegisterPayment: [RegisterPayment]!
      RegisterPaymentById(id_payment: String!): RegisterPayment!

      allRegisterRecharge: [RegisterRecharge]!
      RegisterRechargeById(id_recharge: String!): RegisterRecharge!
  `;

export const CronMutations = `
    createRegisterPayment(payment: RegisterPaymentInput!): RegisterPayment!
    updateRegisterPayment(id_payment: String!, payment: RegisterPaymentInput!): RegisterPayment!
    deleteRegisterPayment(id_payment: String!): String!

    createRegisterRecharge(recharge: RegisterRechargeInput!): RegisterRecharge!
    updateRegisterRecharge(id_recharge: String!, recharge: RegisterRechargeInput!): RegisterRecharge!
    deleteRegisterRecharge(id_recharge: String!): String!
`;
