import { gql } from "@/__generated__";

export const LOGIN = gql(`
    mutation Login($credentials: Credentials!) {
        login(credentials: $credentials) {
            accessToken
            email
            id
            roles
        }
    }
    `);

export const REGISTER = gql(`
    mutation Register($credentials: Register!) {
        register(credentials: $credentials) {
        accessToken
        email
        id
        roles
        }
    }
    `);

export const CREATE_USER = gql(`
    mutation CreateUser($data: UserCreateInput!) {
        createUser(data: $data) {
        categories {
            createdAt
            description
            icon
            id
            name
            updatedAt
            user {
                id
            }
            }
            createdAt
            email
            firstName
            id
            lastName
            roles
            updatedAt
            userType
        }
    }
    `);



export const VERIFY_EMAIL = gql(`
    mutation VerifyEmail($otp: String!) {
        verifyEmail(otp: $otp)
    }
    `);

export const VERIFY_PHONE = gql(`
    mutation VerifyPhone($otp: String!) {
        verifyPhone(otp: $otp)
    }
    `);