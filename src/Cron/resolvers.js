import { generalRequest,getRequest } from '../utilities';
import { urlCron, portCron, entryPointRegisterPayment, entryPointRegisterRecharge } from './server';
import { url, port, entryPointPayments, entryPointRecharges } from '../transactions/server';
const URLRegisterPayment = `https://${urlCron}:${portCron}/api/${entryPointRegisterPayment}`;
const URLRegisterRecharge =`https://${urlCron}:${portCron}/api/${entryPointRegisterRecharge}`;
const URLTxPayment = `https://${url}:${port}/${entryPointPayments}`;
const URLTxRecharge = `https://${url}:${port}/${entryPointRecharges}`;

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

		updateRegisterPayment: (_, { id_payment, payment}) =>{
			const res = generalRequest(`${URLRegisterPayment}/${id_payment}`, 'PATCH', payment)
			res.then(response =>{
				generalRequest(`${URLTxPayment}/${response.id_payment}/${response.state}`, 'PATCH', {"id_recharge":response.id_recharge, "state":response.state})
			})
			return res
		},

		deleteRegisterPayment: (_, { id_payment }) =>
			generalRequest(`${URLRegisterPayment}/${id_payment}`, 'DELETE'),


		createRegisterRecharge: (_, { recharge }) =>
			generalRequest(`${URLRegisterRecharge}/`, 'POST', recharge),

		updateRegisterRecharge: (_, { id_recharge, recharge }) =>{
			const res = generalRequest(`${URLRegisterRecharge}/${id_recharge}`, 'PATCH', recharge)
			res.then(response => {
				generalRequest(`${URLTxRecharge}/${response.id_recharge}/${response.state}`, 'PATCH', {"id_recharge":response.id_recharge, "state":response.state})
			})
			return res
		},

		deleteRegisterRecharge: (_, { id_recharge }) =>
			generalRequest(`${URLRegisterRecharge}/${id_recharge}`, 'DELETE')
	}
};
export default resolvers;
