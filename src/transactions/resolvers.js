import { generalRequest, getRequest, getCleanRequest } from '../utilities';
import { url, port, entryPointUsers } from './server';

const URLtransactions = `https://${url}:${port}/${entryPointUsers}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getCleanRequest(URLtransactions, ''),
		userById: (_, { id_user }) =>
			generalRequest(`${URLtransactions}/${id_user}`, 'GET'),


	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URLtransactions}`, 'POST', user)
	}
};

export default resolvers;
