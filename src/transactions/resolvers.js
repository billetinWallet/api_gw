import { generalRequest, getRequest, getCleanRequest, getCleanRequestWithHeader, generalRequestHeader } from '../utilities';
import { url, port, entryPointUsers, entryPointRecharges, entryPointPayments, entryPointInternalTransactions, entryPointBalances, entryPointMovements } from './server';
import {urlCron, portCron, entryPointRegisterRecharge, entryPointRegisterPayment} from '../Cron/server';

const URLusers = `http://${url}:${port}/${entryPointUsers}`;
const URLrecharge = `http://${url}:${port}/${entryPointRecharges}`;
const URLpayment = `http://${url}:${port}/${entryPointPayments}`;
const URLinternalTransactions = `http://${url}:${port}/${entryPointInternalTransactions}`;
const URLbalance = `http://${url}:${port}/${entryPointBalances}`;
const URLmovement = `http://${url}:${port}/${entryPointMovements}`;
const URLCronRecharge = `https://${urlCron}:${portCron}/api/${entryPointRegisterRecharge}`;
const URLCronPayment = `https://${urlCron}:${portCron}/api/${entryPointRegisterPayment}`;

const resolvers = {
	Query: {
		allUsers: (_, {token}) =>
			getCleanRequestWithHeader(URLusers, 'Bearer '+token),
		userById: (_, { token, id_user }) =>
			generalRequestHeader(`${URLusers}/${id_user}`, 'GET', '', 'Bearer '+token),

		getUserId: (_, {token, document_number}) =>
			getCleanRequestWithHeader(`${URLusers}/getId/${document_number}`, 'Bearer '+token),

		allRecharges: (_, {token}) =>
			getCleanRequestWithHeader(URLrecharge, 'Bearer '+token),
		rechargeById: (_, { token, id_recharge }) =>
			generalRequestHeader(`${URLrecharge}/${id_recharge}`, 'GET', '', 'Bearer '+token),

			
		allPayments: (_, {token}) =>
			getCleanRequestWithHeader(URLpayment, 'Bearer '+token),
		paymentById: (_, { token, id_payment }) =>
			generalRequestHeader(`${URLpayment}/${id_payment}`, 'GET', '', 'Bearer '+token),

		allInternalTransactions: (_, {token}) =>
			getCleanRequestWithHeader(URLinternalTransactions, 'Bearer '+token),
		internalTransactionById: (_, { token, id_internal_transactions }) =>
			generalRequestHeader(`${URLinternalTransactions}/${id_internal_transactions}`, 'GET', '', 'Bearer '+token),

		allBalances: (_, {token}) =>
			getCleanRequestWithHeader(URLbalance, 'Bearer '+token),
		balanceByUserId: (_, { token, id_user }) =>
			generalRequestHeader(`${URLbalance}/${id_user}`, 'GET', '', 'Bearer '+token),

		allMovements: (_, {token}) =>
			getCleanRequestWithHeader(URLmovement, 'Bearer '+token),
		
		movementsByUserId:(_,{token, id_user}) =>
			generalRequestHeader(`${URLmovement}/${id_user}`, 'GET', '', 'Bearer '+token)


	},
	Mutation: {
		createUser: (_, { token, user }) =>
			generalRequestHeader(`${URLusers}`, 'POST', user, 'Bearer '+token),
		
		createRecharge: (_, { token, recharge }) => {
			const res = generalRequestHeader(`${URLrecharge}`, 'POST', recharge, 'Bearer '+token)
			res.then(response => 
				generalRequest(`${URLCronRecharge}`, 'POST', {"id_recharge":response.id_recharge, "state":response.state}))
			return res
		},
		updateRecharge: (_, { token, id_recharge, state }) =>
			generalRequestHeader(`${URLrecharge}/${id_recharge}/${state}`, 'PATCH', {"id_recharge":id_recharge, "state":state}, 'Bearer '+token),

		createPayment: (_, { token, payment }) => {
			const res =  generalRequestHeader(`${URLpayment}`, 'POST', payment, 'Bearer '+token)
			res.then(response => 
				generalRequest(`${URLCronPayment}`, 'POST', {id_payment:response.id_payment, state:response.state}));
			return res
		},
		updatePayment: (_, { token, id_payment, state }) =>
			generalRequestHeader(`${URLpayment}/${id_payment}/${state}`, 'PATCH', {"id_payment":id_payment, "state":state}, 'Bearer '+token),

		createInternalTransaction: (_, { token, internal_transaction }) =>
			generalRequestHeader(`${URLinternalTransactions}`, 'POST', internal_transaction, 'Bearer '+token),
	}
};

export default resolvers;
