import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import { kycTypeDef, kycQueries, kycMutations } from './kyc/typeDefs';
import { transactionTypeDef, transactionQueries, transactionMutations} from './transactions/typeDefs';
import { CronTypeDef, CronQueries, CronMutations } from './Cron/typeDef';
import { userTypeDef,userQueries,userMutations } from './users/typeDefs';
import { authTypeDef,authQueries,authMutations } from './auth/typeDef';
import { mqTypeDef,mqQueries,mqMutations } from './wallet_mq/typeDefs';

import kycResolvers from './kyc/resolvers';
import transactionResolvers from './transactions/resolvers'; 
import cronResolvers from './Cron/resolvers';
import userResolvers from './users/resolvers';
import authResolvers from './auth/resolvers';
import mqResolvers from './wallet_mq/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		kycTypeDef,
		transactionTypeDef,
		CronTypeDef,
		userTypeDef,
		authTypeDef,
		mqTypeDef
	],
	[
		kycQueries,
		transactionQueries,
		CronQueries,
		userQueries,
		authQueries,
		mqQueries
	],
	[
		kycMutations,
		transactionMutations,
		CronMutations,
		userMutations,
		authMutations,
		mqMutations
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
		userResolvers,
		authResolvers,
		mqResolvers
	)
});
