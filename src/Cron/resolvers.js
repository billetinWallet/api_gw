import { generalRequest,getRequest } from '../utilities';
import { urlCron, portCron, entryPointRegisterPayment, entryPointRegisterRecharge } from './server';

const URLRegisterPayment = `https://${urlCron}:${portCron}/api/${entryPointRegisterPayment}`;
const URLRegisterRecharge =`https://${urlCron}:${portCron}/api/${entryPointRegisterRecharge}`;

const resolvers = {
	Query: {
		allRegisterPayment: (_) =>
			getRequest(URLRegisterPayment, ''),
        RegisterPaymentById: (_, { id_payment }) =>
			generalRequest(`${URLRegisterPayment}/${id_payment}`, 'GET'),



        allRegisterRecharge: (_) =>
			getRequest(URLRegisterRecharge, ''),
		RegisterRechargeById: (_, { id_recharge }) =>
			generalRequest(`${URLRegisterRecharge}/${id_recharge}`, 'GET'),
	},
	Mutation: {

		createRegisterPayment: (_, { payment }) =>
			generalRequest(`${URLRegisterPayment}/`, 'POST', payment),
		updateRegisterPayment: (_, { id_payment, payment}) =>
			generalRequest(`${URLRegisterPayment}/${id_payment}`, 'PUT', payment),
		deleteRegisterPayment: (_, { id_payment }) =>
			generalRequest(`${URLRegisterPayment}/${id_payment}`, 'DELETE'),

		createRegisterRecharge: (_, { recharge }) =>
			generalRequest(`${URLRegisterRecharge}/`, 'POST', recharge),
		updateRegisterRecharge: (_, { id_recharge, recharge }) =>
			generalRequest(`${URLRegisterRecharge}/${id_recharge}`, 'PUT', recharge),
		deleteRegisterRecharge: (_, { id_recharge }) =>
			generalRequest(`${URLRegisterRecharge}/${id_recharge}`, 'DELETE')
	}
};
export default resolvers;
