/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type BooleanNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: Array<User>;
};


export type CategoryUserArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type CategoryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserCreateNestedManyWithoutCategoriesInput>;
};

export type CategoryCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserUpdateManyWithoutCategoriesInput>;
};

export type CategoryUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
};

export type CategoryWhereInput = {
  description?: InputMaybe<StringNullableFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserListRelationFilter>;
};

export type CategoryWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Credentials = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum EnumUserUserType {
  Recruiter = 'Recruiter',
  Talent = 'Talent'
}

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type JsonFilter = {
  equals?: InputMaybe<Scalars['JSONObject']['input']>;
  not?: InputMaybe<Scalars['JSONObject']['input']>;
};

export type MetaQueryPayload = {
  __typename?: 'MetaQueryPayload';
  count: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createProject: Project;
  createUser: User;
  deleteCategory: Category;
  deleteProfile: Profile;
  deleteProject: Project;
  deleteUser: User;
  login: UserInfo;
  register: UserInfo;
  updateCategory: Category;
  updateProfile: Profile;
  updateProject: Project;
  updateUser: User;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  credentials: Credentials;
};


export type MutationRegisterArgs = {
  credentials: Register;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Profile = {
  __typename?: 'Profile';
  aboutProfile?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  profile_category_details?: Maybe<Scalars['JSON']['output']>;
  profile_educational_qualification?: Maybe<Scalars['JSON']['output']>;
  profile_image_url?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  user_Address?: Maybe<Scalars['JSON']['output']>;
  user_social_profiles?: Maybe<Scalars['JSON']['output']>;
};


export type ProfileUserArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type ProfileOrderByInput = {
  aboutProfile?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  profile_category_details?: InputMaybe<SortOrder>;
  profile_educational_qualification?: InputMaybe<SortOrder>;
  profile_image_url?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user_Address?: InputMaybe<SortOrder>;
  user_social_profiles?: InputMaybe<SortOrder>;
};

export type ProfileUpdateInput = {
  aboutProfile?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  profile_category_details?: InputMaybe<Scalars['JSON']['input']>;
  profile_educational_qualification?: InputMaybe<Scalars['JSON']['input']>;
  profile_image_url?: InputMaybe<Scalars['String']['input']>;
  user_Address?: InputMaybe<Scalars['JSON']['input']>;
  user_social_profiles?: InputMaybe<Scalars['JSON']['input']>;
  users?: InputMaybe<UserUpdateManyWithoutProfilesInput>;
};

export type ProfileWhereInput = {
  aboutProfile?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  profile_category_details?: InputMaybe<JsonFilter>;
  profile_educational_qualification?: InputMaybe<JsonFilter>;
  profile_image_url?: InputMaybe<StringNullableFilter>;
  user_Address?: InputMaybe<JsonFilter>;
  user_social_profiles?: InputMaybe<JsonFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type ProfileWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Project = {
  __typename?: 'Project';
  allow_negotiation?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  images: Scalars['JSON']['output'];
  mark_for_sale?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users: Array<User>;
};


export type ProjectUsersArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type ProjectCreateInput = {
  allow_negotiation?: InputMaybe<Scalars['Boolean']['input']>;
  description: Scalars['String']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  images: Scalars['JSON']['input'];
  mark_for_sale?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  slug: Scalars['String']['input'];
  users?: InputMaybe<UserCreateNestedManyWithoutProjectsInput>;
};

export type ProjectCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectOrderByInput = {
  allow_negotiation?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  mark_for_sale?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectUpdateInput = {
  allow_negotiation?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['JSON']['input']>;
  mark_for_sale?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<UserUpdateManyWithoutProjectsInput>;
};

export type ProjectUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectWhereInput = {
  allow_negotiation?: InputMaybe<BooleanNullableFilter>;
  description?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<JsonFilter>;
  mark_for_sale?: InputMaybe<BooleanNullableFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type ProjectWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  _categoriesMeta: MetaQueryPayload;
  _profilesMeta: MetaQueryPayload;
  _projectsMeta: MetaQueryPayload;
  _usersMeta: MetaQueryPayload;
  categories: Array<Category>;
  category?: Maybe<Category>;
  profile?: Maybe<Profile>;
  profiles: Array<Profile>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  user?: Maybe<User>;
  userInfo: UserInfo;
  users: Array<User>;
};


export type Query_CategoriesMetaArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type Query_ProfilesMetaArgs = {
  where?: InputMaybe<ProfileWhereInput>;
};


export type Query_ProjectsMetaArgs = {
  where?: InputMaybe<ProjectWhereInput>;
};


export type Query_UsersMetaArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type QueryCategoriesArgs = {
  orderBy?: InputMaybe<Array<CategoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryProfilesArgs = {
  orderBy?: InputMaybe<Array<ProfileOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectsArgs = {
  orderBy?: InputMaybe<Array<ProjectOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'Default',
  Insensitive = 'Insensitive'
}

export type Register = {
  discipline?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  employmentType?: InputMaybe<Scalars['String']['input']>;
  experience: Scalars['Int']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  skills: Array<Scalars['String']['input']>;
  userType: EnumUserUserType;
};

export enum SortOrder {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  categories: Array<Category>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  project: Array<Project>;
  roles: Scalars['JSON']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userType?: Maybe<EnumUserUserType>;
};


export type UserCategoriesArgs = {
  orderBy?: InputMaybe<Array<CategoryOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type UserProjectArgs = {
  orderBy?: InputMaybe<Array<ProjectOrderByInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type UserCreateInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutUsersInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  profile?: InputMaybe<ProfileWhereUniqueInput>;
  project?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  roles: Scalars['JSON']['input'];
  userType: EnumUserUserType;
};

export type UserCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutProjectsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  accessToken?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  roles: Scalars['JSON']['output'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profileId?: InputMaybe<SortOrder>;
  roles?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userType?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutUsersInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<ProfileWhereUniqueInput>;
  project?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  roles?: InputMaybe<Scalars['JSON']['input']>;
  userType?: InputMaybe<EnumUserUserType>;
};

export type UserUpdateManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateManyWithoutProfilesInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateManyWithoutProjectsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserWhereInput = {
  categories?: InputMaybe<CategoryListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  profile?: InputMaybe<ProfileWhereUniqueInput>;
  project?: InputMaybe<ProjectListRelationFilter>;
  userType?: InputMaybe<EnumUserUserType>;
};

export type UserWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type LoginMutationVariables = Exact<{
  credentials: Credentials;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserInfo', accessToken?: string | null, email: string, id: string, roles: any } };

export type RegisterMutationVariables = Exact<{
  credentials: Register;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserInfo', accessToken?: string | null, email: string, id: string, roles: any } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', createdAt: any, email: string, firstName?: string | null, id: string, lastName?: string | null, roles: any, updatedAt: any, userType?: EnumUserUserType | null, categories: Array<{ __typename?: 'Category', createdAt: any, description?: string | null, icon?: string | null, id: string, name?: string | null, updatedAt: any, user: Array<{ __typename?: 'User', id: string }> }> } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"credentials"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Credentials"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"credentials"},"value":{"kind":"Variable","name":{"kind":"Name","value":"credentials"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"credentials"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Register"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"credentials"},"value":{"kind":"Variable","name":{"kind":"Name","value":"credentials"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userType"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;