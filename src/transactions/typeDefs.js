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
  }


  `;

export const transactionQueries = `
      allUsers: [User]!
      userById(id_user: Int!): User!

      allRecharges: [Recharge]!
      rechargeById(id_recharge: ID!): Recharge!

      allPayments: [Payment]!
      paymentById(id_payment: ID!): Payment!

      allInternalTransactions: [InternalTransaction]!
      internalTransactionById(id_internal_transaction: ID!): InternalTransaction!

      allBalances: [Balance]!
      balanceByUserId(id_user: Int!): Balance!

      allMovements: [Movement]!
  `;

export const transactionMutations = `
    createUser(user: UserInput!): User!
    createRecharge(recharge: RechargeInput!): Recharge!
    createPayment(payment: PaymentInput!): Payment!
    createInternalTransaction(internal_transaction: InternalTransactionInput!): InternalTransaction!
`;
