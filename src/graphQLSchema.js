import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import { kycTypeDef, kycQueries, kycMutations } from './kyc/categories/typeDefs';
import { transactionTypeDef, transactionQueries, transactionMutations} from './transactions/typeDefs';
import { CronTypeDef, CronQueries, CronMutations } from './Cron/typeDef';
import { userTypeDef,userQueries,userMutations } from './users/typeDefs';

import kycResolvers from './kyc/categories/resolvers';
import transactionResolvers from './transactions/resolvers'; 
import cronResolvers from './Cron/resolvers';
import userResolvers from './users/resolvers';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		kycTypeDef,
		transactionTypeDef,
		CronTypeDef,
		userTypeDef
	],
	[
		kycQueries,
		transactionQueries,
		CronQueries,
		userQueries
	],
	[
		kycMutations,
		transactionMutations,
		CronMutations,
		userMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		kycResolvers,
		transactionResolvers,
		cronResolvers,
		userResolvers
	)
});
