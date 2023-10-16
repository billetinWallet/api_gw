import { generalRequest, getRequest, getCleanRequest } from '../utilities';
import { url, port, entryPointAuth} from './server';

const URLauth = `http://${url}:${port}/${entryPointAuth}`;

const resolvers = {
	Query: {
		getUser: (_) =>
			getRequest(`http://${url}:${port}/`, 'GET')
	},
	Mutation: {
		newUser: (_, { User }) =>
			generalRequest(`${URLauth}`, 'POST', User),
		
		createToken: (_, { User }) =>
			generalRequest(`${URLauth}token`, 'POST', User),
	}
};

export default resolvers;