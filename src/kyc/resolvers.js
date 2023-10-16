import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPointImage, entryPointStatus } from './server';

const URLimage = `http://${url}:${port}/${entryPointImage}`;
const URLstatus =`http://${url}:${port}/${entryPointStatus}`;

const resolvers = {
	Query: {
		allImages: (_) =>
			getRequest(URLimage, ''),
		imageByIdUser: (_, { id_user }) =>
			generalRequest(`${URLimage}/user/${id_user}`, 'GET'),
		imageByIdImage: (_, { _id }) =>
			generalRequest(`${URLimage}/${_id}`, 'GET'),


		allStatus: (_) =>
			getRequest(URLstatus, ''),
		statusByIdUser: (_, { id_user }) =>
			generalRequest(`${URLstatus}/user/${id_user}`, 'GET'),
		statusByIdStatus: (_, { _id }) =>
			generalRequest(`${URLimage}/${_id}`, 'GET'),

	},
	Mutation: {

		createImage: (_, { image }) =>
			generalRequest(`${URLimage}/`, 'POST', image),
		updateImage: (_, { _id, image }) =>
			generalRequest(`${URLimage}/${_id}`, 'PUT', image),
		deleteImage: (_, { _id }) =>
			generalRequest(`${URLimage}/${_id}`, 'DELETE'),

		createStatus: (_, { status }) =>
			generalRequest(`${URLstatus}/`, 'POST', status),
		updateStatus: (_, { _id, status }) =>
			generalRequest(`${URLstatus}/${_id}`, 'PUT', status),
		deleteStatus: (_, { _id }) =>
			generalRequest(`${URLstatus}/${_id}`, 'DELETE')
	}
};

export default resolvers;
