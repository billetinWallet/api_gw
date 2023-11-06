import { generalRequest, getRequest, generalRequestNoJson } from '../utilities';
import { urlAuth, portAuth, entryPointAuth} from './server';
import { url, port, entryPointUsers} from '../transactions/server';

const URLauth = `http://${urlAuth}:${portAuth}/${entryPointAuth}`;
const URLusers = `http://${url}:${port}/${entryPointUsers}`;

const resolvers = {
	Query: {
		getUser: (_) =>
			getRequest(`http://${url}:${port}/`, 'GET')
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