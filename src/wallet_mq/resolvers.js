import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPointMq } from './server';

const URL = `http://${url}:${port}/${entryPointMq}`;

const resolvers = {
	Query: {

	},
	Mutation: {

		initializeVerification: (_, { img }) =>
			generalRequest(`${URL}/`, 'POST', img),
	}
};

export default resolvers;
