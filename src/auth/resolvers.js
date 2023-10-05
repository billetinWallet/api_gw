import { generalRequest, getRequest, getCleanRequest } from '../utilities';
import { url, port, entryPointAuth, entryPointUser_, entryPointRecharges, entryPointPayments, entryPointInternalTransactions, entryPointBalances, entryPointMovements } from './server';

const URLauth = `http://${url}:${port}/${entryPointAuth}`;

const resolvers = {
	Query: {
		allUsers_: (_) =>
			getRequest(URLauth, ''),
		login: (_, { username }) =>
			generalRequest(`${URLauth}/login`, 'GET', username),
	},
	Mutation: {

		register: (_, { username }) =>
			generalRequest(`${URLauth}/registro`, 'POST', username),
	}
};

export default resolvers;