import { generalRequest, getRequest, getCleanRequest } from '../utilities';
import { url, port, entryPointUsers, entryPointRecharges, entryPointPayments, entryPointInternalTransactions, entryPointBalances, entryPointMovements } from './server';
import {urlCron, portCron, entryPointRegisterRecharge, entryPointRegisterPayment} from '../Cron/server';

const URLusers = `https://${url}:${port}/${entryPointUsers}`;
const URLrecharge = `https://${url}:${port}/${entryPointRecharges}`;
const URLpayment = `https://${url}:${port}/${entryPointPayments}`;
const URLinternalTransactions = `https://${url}:${port}/${entryPointInternalTransactions}`;
const URLbalance = `https://${url}:${port}/${entryPointBalances}`;
const URLmovement = `https://${url}:${port}/${entryPointMovements}`;
const URLCronRecharge = `https://${urlCron}:${portCron}/api/${entryPointRegisterRecharge}`;
const URLCronPayment = `https://${urlCron}:${portCron}/api/${entryPointRegisterPayment}`;

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
			getCleanRequest(URLmovement, ''),
		
		movementsByUserId:(_,{id_user}) =>
			generalRequest(`${URLmovement}/${id_user}`, 'GET')


	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URLusers}`, 'POST', user),
		
		createRecharge: (_, { recharge }) => {
			const res = generalRequest(`${URLrecharge}`, 'POST', recharge)
			res.then(response => 
				generalRequest(`${URLCronRecharge}`, 'POST', {"id_recharge":response.id_recharge, "state":response.state}))
			return res
		},
		updateRecharge: (_, { id_recharge, state }) =>
			generalRequest(`${URLrecharge}/${id_recharge}/${state}`, 'PATCH', {"id_recharge":id_recharge, "state":state}),

		createPayment: (_, { payment }) => {
			const res =  generalRequest(`${URLpayment}`, 'POST', payment)
			res.then(response => 
				generalRequest(`${URLCronPayment}`, 'POST', {id_payment:response.id_payment, state:response.state}));
			return res
		},
		updatePayment: (_, { id_payment, state }) =>
			generalRequest(`${URLpayment}/${id_payment}/${state}`, 'PATCH', {"id_payment":id_payment, "state":state}),

		createInternalTransaction: (_, { internal_transaction }) =>
			generalRequest(`${URLinternalTransactions}`, 'POST', internal_transaction),
	}
};

export default resolvers;
