/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n    mutation Login($credentials: Credentials!) {\n        login(credentials: $credentials) {\n            accessToken\n            email\n            id\n            roles\n            emailVerifiedAt\n            phoneVerifiedAt\n            type\n\n        }\n    }\n    ": types.LoginDocument,
    "\n    mutation Register($credentials: Register!) {\n        register(credentials: $credentials) {\n            accessToken\n            email\n            id\n            roles\n            emailVerifiedAt\n            phoneVerifiedAt\n            type\n        }\n    }\n    ": types.RegisterDocument,
    "\n    mutation CreateUser($data: UserCreateInput!) {\n        createUser(data: $data) {\n        categories {\n            createdAt\n            description\n            icon\n            id\n            name\n            updatedAt\n            user {\n                id\n            }\n            }\n            createdAt\n            email\n            firstName\n            id\n            lastName\n            roles\n            updatedAt\n            userType\n        }\n    }\n    ": types.CreateUserDocument,
    "\n    mutation VerifyEmail($otp: String!) {\n        verifyEmail(otp: $otp)\n    }\n    ": types.VerifyEmailDocument,
    "\n    mutation VerifyPhone($otp: String!) {\n        verifyPhone(otp: $otp)\n    }\n    ": types.VerifyPhoneDocument,
    "\n    mutation TriggerEmailVerification {\n        triggerEmailVerification\n    }\n    ": types.TriggerEmailVerificationDocument,
    "\n    mutation TriggerPhoneVerification {\n        triggerPhoneVerification\n    }\n    ": types.TriggerPhoneVerificationDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Login($credentials: Credentials!) {\n        login(credentials: $credentials) {\n            accessToken\n            email\n            id\n            roles\n            emailVerifiedAt\n            phoneVerifiedAt\n            type\n\n        }\n    }\n    "): (typeof documents)["\n    mutation Login($credentials: Credentials!) {\n        login(credentials: $credentials) {\n            accessToken\n            email\n            id\n            roles\n            emailVerifiedAt\n            phoneVerifiedAt\n            type\n\n        }\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Register($credentials: Register!) {\n        register(credentials: $credentials) {\n            accessToken\n            email\n            id\n            roles\n            emailVerifiedAt\n            phoneVerifiedAt\n            type\n        }\n    }\n    "): (typeof documents)["\n    mutation Register($credentials: Register!) {\n        register(credentials: $credentials) {\n            accessToken\n            email\n            id\n            roles\n            emailVerifiedAt\n            phoneVerifiedAt\n            type\n        }\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateUser($data: UserCreateInput!) {\n        createUser(data: $data) {\n        categories {\n            createdAt\n            description\n            icon\n            id\n            name\n            updatedAt\n            user {\n                id\n            }\n            }\n            createdAt\n            email\n            firstName\n            id\n            lastName\n            roles\n            updatedAt\n            userType\n        }\n    }\n    "): (typeof documents)["\n    mutation CreateUser($data: UserCreateInput!) {\n        createUser(data: $data) {\n        categories {\n            createdAt\n            description\n            icon\n            id\n            name\n            updatedAt\n            user {\n                id\n            }\n            }\n            createdAt\n            email\n            firstName\n            id\n            lastName\n            roles\n            updatedAt\n            userType\n        }\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation VerifyEmail($otp: String!) {\n        verifyEmail(otp: $otp)\n    }\n    "): (typeof documents)["\n    mutation VerifyEmail($otp: String!) {\n        verifyEmail(otp: $otp)\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation VerifyPhone($otp: String!) {\n        verifyPhone(otp: $otp)\n    }\n    "): (typeof documents)["\n    mutation VerifyPhone($otp: String!) {\n        verifyPhone(otp: $otp)\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation TriggerEmailVerification {\n        triggerEmailVerification\n    }\n    "): (typeof documents)["\n    mutation TriggerEmailVerification {\n        triggerEmailVerification\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation TriggerPhoneVerification {\n        triggerPhoneVerification\n    }\n    "): (typeof documents)["\n    mutation TriggerPhoneVerification {\n        triggerPhoneVerification\n    }\n    "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;