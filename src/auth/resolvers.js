import { generalRequest, getRequest, generalRequestNoJson } from '../utilities';
import { url, port, entryPointAuth} from './server';

const URLauth = `https://${url}:${port}/${entryPointAuth}`;

const resolvers = {
	Query: {
		getUser: (_) =>
			getRequest(`https://${url}:${port}/`, 'GET')
	},
	Mutation: {
		newUser: (_, { User }) =>
			generalRequest(`${URLauth}`, 'POST', User),
		
		createToken: (_, { login }) => 
			generalRequestNoJson(`${URLauth}token`, 'POST', login),
			
	}
};

export default resolvers;