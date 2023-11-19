export const transactionTypeDef = `
  type User {
    id_user: Int!
    document_number: Int!
  }
  input UserInput {
    document_number: Int!
  }
  
  type Recharge {
    id_recharge: ID!
    amount: Float!
    datetime: String!
    state: String!
    id_user: User!      
  }
  input RechargeInput {
    amount: Float!
    id_user: Int!
  }

  type Payment {
    id_payment: ID!
    amount: Float!
    datetime: String!
    state: String!
    id_user: User!      
  }
  input PaymentInput {
    amount: Float!
    id_user: Int!
  }

  type InternalTransaction {
    id_internal_transaction: ID!
    source_account: User!
    target_account: User!
    amount: Float!
    datetime: String!
    state: String!   
  }
  input InternalTransactionInput {
    source_account: Int!
    target_account: Int!
    amount: Float!
  }

  type Balance {
    id_balance: Int!
    balance: Float!
    update_time: String!
    id_user: User!
  }

  type Movement {
    id_movement: ID!
    amount: Float!
    datetime: String!
    id_user: User!
    state: String! 

  }


  `;

export const transactionQueries = `
      allUsers(token: String!): [User]!
      userById(token: String!, id_user: Int!): User!

      getUserId(token: String!, document_number: Int!): User!

      allRecharges(token: String!): [Recharge]!
      rechargeById(token: String!, id_recharge: ID!): Recharge!

      allPayments(token: String!): [Payment]!
      paymentById(token: String!, id_payment: ID!): Payment!

      allInternalTransactions(token: String!): [InternalTransaction]!
      internalTransactionById(token: String!, id_internal_transaction: ID!): InternalTransaction!

      allBalances(token: String!): [Balance]!
      balanceByUserId(token: String!, id_user: Int!): Balance!

      allMovements(token: String!): [Movement]!
      movementsByUserId(token: String!, id_user: Int!): [Movement]!
  `;

export const transactionMutations = `
    createUser(token: String!, user: UserInput!): User!
    createRecharge(token: String!, recharge: RechargeInput!): Recharge!
    createPayment(token: String!, payment: PaymentInput!): Payment!
    createInternalTransaction(token: String!, internal_transaction: InternalTransactionInput!): InternalTransaction!
    updatePayment(token: String!, id_payment: ID!, state: String!): Payment!
    updateRecharge(token: String!, id_recharge: ID!, state: String!): Recharge!
`;
