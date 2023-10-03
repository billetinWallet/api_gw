import { generalRequest, getRequest, getCleanRequest } from '../utilities';
import { url, port, entryPointUser_, entryPointRecharges, entryPointPayments, entryPointInternalTransactions, entryPointBalances, entryPointMovements } from './server';

const URLuser_ = `http://${url}:${port}/${entryPointUser_}`;

const resolvers = {
	Query: {
		allUser_: (_) =>
			getRequest(URLuser_, ''),
		userById_: (_, { id_user }) =>
			generalRequest(`${URLuser_}/${id_user}`, 'GET'),
	},
	Mutation: {

		createUser: (_, { user_ }) =>
			generalRequest(`${URLuser_}/`, 'POST', user_),
		updateUser: (_, { id_user, user_ }) =>
			generalRequest(`${URLuser_}/${id_user}`, 'PUT', user_),
		deleteUser: (_, { id_user }) =>
			generalRequest(`${URLuser_}/${id_user}`, 'DELETE'),
	}
};

export default resolvers;
