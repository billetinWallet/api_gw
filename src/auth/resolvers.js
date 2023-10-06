import { generalRequest, getRequest, getCleanRequest } from '../utilities';
import { url, port, entryPointUser_} from './server';

const URLauth = `http://${url}:${port}/${entryPointUser_}`;

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