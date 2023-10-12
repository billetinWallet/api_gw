import { generalRequest, getRequest, getCleanRequest } from '../utilities';
import { url, port, entryPointAuth} from './server';

const URLauth = `http://${url}:${port}/${entryPointAuth}`;

const resolvers = {
	Query: {
		getUser: (_) =>
			getRequest(`http://${url}:${port}/`, 'GET')
	},
	Mutation: {
		newUser: (_, { UserRequest }) =>
			generalRequest(`${URLauth}`, 'POST', UserRequest),
		
		createToken: (_, { login }) =>
			generalRequest(`${URLauth}/token`, 'POST', login),
	}
};

export default resolvers;