import { generalRequest, getRequest, generalRequestNoJson } from '../utilities';
import { urlAuth, portAuth, entryPointAuth} from './server';
import { url, port, entryPointUsers} from '../transactions/server';

const URLauth = `https://${urlAuth}:${portAuth}/${entryPointAuth}`;
const URLusers = `https://${url}:${port}/${entryPointUsers}`;

const resolvers = {
	Query: {
		getUser: (_) =>
			getRequest(`https://${url}:${port}/`, 'GET')
	},
	Mutation: {
		newUser: (_, { User }) => {
			const res = generalRequest(`${URLauth}`, 'POST', User);
			res.then(response =>
				generalRequest(`${URLusers}`, 'POST', {"document_number": parseInt(User.document_number)})
			)
			return res
		},
		
		createToken: (_, { login }) => 
			generalRequestNoJson(`${URLauth}token`, 'POST', login),
			
	}
};

export default resolvers;