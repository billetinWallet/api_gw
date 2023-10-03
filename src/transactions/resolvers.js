import { generalRequest, getRequest, getCleanRequest } from '../utilities';
import { url, port, entryPointUsers, entryPointRecharges, entryPointPayments, entryPointInternalTransactions, entryPointBalances, entryPointMovements } from './server';

const URLusers = `https://${url}:${port}/${entryPointUsers}`;
const URLrecharge = `https://${url}:${port}/${entryPointRecharges}`;
const URLpayment = `https://${url}:${port}/${entryPointPayments}`;
const URLinternalTransactions = `https://${url}:${port}/${entryPointInternalTransactions}`;
const URLbalance = `https://${url}:${port}/${entryPointBalances}`;
const URLmovement = `https://${url}:${port}/${entryPointMovements}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getCleanRequest(URLusers, ''),
		userById: (_, { id_user }) =>
			generalRequest(`${URLusers}/${id_user}`, 'GET'),

		
		allRecharges: (_) =>
			getCleanRequest(URLrecharge, ''),
		rechargeById: (_, { id_recharge }) =>
			generalRequest(`${URLrecharge}/${id_recharge}`, 'GET'),

			
		allPayments: (_) =>
			getCleanRequest(URLpayment, ''),
		paymentById: (_, { id_payment }) =>
		generalRequest(`${URLpayment}/${id_payment}`, 'GET'),

		allInternalTransactions: (_) =>
			getCleanRequest(URLinternalTransactions, ''),
		internalTransactionById: (_, { id_internal_transactions }) =>
		generalRequest(`${URLinternalTransactions}/${id_internal_transactions}`, 'GET'),

		allBalances: (_) =>
			getCleanRequest(URLbalance, ''),
		balanceByUserId: (_, { id_user }) =>
			generalRequest(`${URLbalance}/${id_user}`, 'GET'),

		allMovements: (_) =>
			getCleanRequest(URLmovement, '')
		



	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URLusers}`, 'POST', user),
		
		createRecharge: (_, { recharge }) =>
			generalRequest(`${URLrecharge}`, 'POST', recharge),

		createPayment: (_, { payment }) =>
			generalRequest(`${URLpayment}`, 'POST', payment),

		createInternalTransaction: (_, { internal_transaction }) =>
			generalRequest(`${URLinternalTransactions}`, 'POST', internal_transaction),
	}
};

export default resolvers;
