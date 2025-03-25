/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  JSONObject: { input: any; output: any };
};

export type BooleanNullableFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Category = {
  __typename?: "Category";
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  user: Array<User>;
};

export type CategoryUserArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars["Float"]["input"]>;
  take?: InputMaybe<Scalars["Float"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
};

export type CategoryCreateInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
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
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
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
  id: Scalars["String"]["input"];
};

export type Credentials = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export enum EnumUserUserType {
  Recruiter = "Recruiter",
  Talent = "Talent",
}

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<Scalars["Float"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type JsonFilter = {
  equals?: InputMaybe<Scalars["JSONObject"]["input"]>;
  not?: InputMaybe<Scalars["JSONObject"]["input"]>;
};

export type MetaQueryPayload = {
  __typename?: "MetaQueryPayload";
  count: Scalars["Float"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createCategory: Category;
  createProject: Project;
  createUser: User;
  deleteCategory: Category;
  deleteProfile: Profile;
  deleteProject: Project;
  deleteUser: User;
  login: UserInfo;
  register: UserInfo;
  triggerEmailVerification: Scalars["String"]["output"];
  triggerPhoneVerification: Scalars["String"]["output"];
  updateCategory: Category;
  updateProfile: Profile;
  updateProject: Project;
  updateUser: User;
  verifyEmail: Scalars["Boolean"]["output"];
  verifyPhone: Scalars["Boolean"]["output"];
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

export type MutationVerifyEmailArgs = {
  otp: Scalars["String"]["input"];
};

export type MutationVerifyPhoneArgs = {
  otp: Scalars["String"]["input"];
};

export type Profile = {
  __typename?: "Profile";
  aboutProfile?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  gender?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  profile_category_details?: Maybe<Scalars["JSON"]["output"]>;
  profile_educational_qualification?: Maybe<Scalars["JSON"]["output"]>;
  profile_image_url?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  user: User;
  user_Address?: Maybe<Scalars["JSON"]["output"]>;
  user_social_profiles?: Maybe<Scalars["JSON"]["output"]>;
};

export type ProfileUserArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars["Float"]["input"]>;
  take?: InputMaybe<Scalars["Float"]["input"]>;
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
  aboutProfile?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  profile_category_details?: InputMaybe<Scalars["JSON"]["input"]>;
  profile_educational_qualification?: InputMaybe<Scalars["JSON"]["input"]>;
  profile_image_url?: InputMaybe<Scalars["String"]["input"]>;
  user_Address?: InputMaybe<Scalars["JSON"]["input"]>;
  user_social_profiles?: InputMaybe<Scalars["JSON"]["input"]>;
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
  id: Scalars["String"]["input"];
};

export type Project = {
  __typename?: "Project";
  allow_negotiation?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  icon?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  images: Scalars["JSON"]["output"];
  mark_for_sale?: Maybe<Scalars["Boolean"]["output"]>;
  name: Scalars["String"]["output"];
  price?: Maybe<Scalars["Float"]["output"]>;
  slug: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  users: Array<User>;
};

export type ProjectUsersArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars["Float"]["input"]>;
  take?: InputMaybe<Scalars["Float"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
};

export type ProjectCreateInput = {
  allow_negotiation?: InputMaybe<Scalars["Boolean"]["input"]>;
  description: Scalars["String"]["input"];
  icon?: InputMaybe<Scalars["String"]["input"]>;
  images: Scalars["JSON"]["input"];
  mark_for_sale?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
  price?: InputMaybe<Scalars["Float"]["input"]>;
  slug: Scalars["String"]["input"];
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
  allow_negotiation?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["String"]["input"]>;
  images?: InputMaybe<Scalars["JSON"]["input"]>;
  mark_for_sale?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
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
  id: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
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
  skip?: InputMaybe<Scalars["Float"]["input"]>;
  take?: InputMaybe<Scalars["Float"]["input"]>;
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
  skip?: InputMaybe<Scalars["Float"]["input"]>;
  take?: InputMaybe<Scalars["Float"]["input"]>;
  where?: InputMaybe<ProfileWhereInput>;
};

export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type QueryProjectsArgs = {
  orderBy?: InputMaybe<Array<ProjectOrderByInput>>;
  skip?: InputMaybe<Scalars["Float"]["input"]>;
  take?: InputMaybe<Scalars["Float"]["input"]>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  skip?: InputMaybe<Scalars["Float"]["input"]>;
  take?: InputMaybe<Scalars["Float"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = "Default",
  Insensitive = "Insensitive",
}

export type Register = {
  discipline?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  employmentType?: InputMaybe<Scalars["String"]["input"]>;
  experience?: InputMaybe<Scalars["String"]["input"]>;
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  skills?: InputMaybe<Array<Scalars["String"]["input"]>>;
  userType: EnumUserUserType;
};

export enum SortOrder {
  Asc = "Asc",
  Desc = "Desc",
}

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  categories: Array<Category>;
  createdAt: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  emailVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  phoneVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  profile?: Maybe<Profile>;
  project: Array<Project>;
  roles: Scalars["JSON"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  userType?: Maybe<EnumUserUserType>;
};

export type UserCategoriesArgs = {
  orderBy?: InputMaybe<Array<CategoryOrderByInput>>;
  skip?: InputMaybe<Scalars["Float"]["input"]>;
  take?: InputMaybe<Scalars["Float"]["input"]>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type UserProjectArgs = {
  orderBy?: InputMaybe<Array<ProjectOrderByInput>>;
  skip?: InputMaybe<Scalars["Float"]["input"]>;
  take?: InputMaybe<Scalars["Float"]["input"]>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type UserCreateInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutUsersInput>;
  email: Scalars["String"]["input"];
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  profile?: InputMaybe<ProfileWhereUniqueInput>;
  project?: InputMaybe<ProjectCreateNestedManyWithoutUsersInput>;
  roles: Scalars["JSON"]["input"];
  userType: EnumUserUserType;
};

export type UserCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedManyWithoutProjectsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserInfo = {
  __typename?: "UserInfo";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  emailVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["String"]["output"];
  phoneVerifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  roles: Scalars["JSON"]["output"];
  type?: Maybe<EnumUserUserType>;
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
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  profile?: InputMaybe<ProfileWhereUniqueInput>;
  project?: InputMaybe<ProjectUpdateManyWithoutUsersInput>;
  roles?: InputMaybe<Scalars["JSON"]["input"]>;
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
  id: Scalars["String"]["input"];
};

export type LoginMutationVariables = Exact<{
  credentials: Credentials;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "UserInfo";
    accessToken?: string | null;
    email: string;
    emailVerifiedAt?: any | null;
    id: string;
    phoneVerifiedAt?: any | null;
    roles: any;
    type?: EnumUserUserType | null;
  };
};

export type RegisterMutationVariables = Exact<{
  credentials: Register;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "UserInfo";
    accessToken?: string | null;
    email: string;
    emailVerifiedAt?: any | null;
    id: string;
    phoneVerifiedAt?: any | null;
    roles: any;
    type?: EnumUserUserType | null;
  };
};

export type TriggerEmailVerificationMutationVariables = Exact<{
  [key: string]: never;
}>;

export type TriggerEmailVerificationMutation = {
  __typename?: "Mutation";
  triggerEmailVerification: string;
};

export type TriggerPhoneVerificationMutationVariables = Exact<{
  [key: string]: never;
}>;

export type TriggerPhoneVerificationMutation = {
  __typename?: "Mutation";
  triggerPhoneVerification: string;
};

export type VerifyEmailMutationVariables = Exact<{
  otp: Scalars["String"]["input"];
}>;

export type VerifyEmailMutation = {
  __typename?: "Mutation";
  verifyEmail: boolean;
};

export type VerifyPhoneMutationVariables = Exact<{
  otp: Scalars["String"]["input"];
}>;

export type VerifyPhoneMutation = {
  __typename?: "Mutation";
  verifyPhone: boolean;
};

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
  orderBy?: InputMaybe<Array<CategoryOrderByInput> | CategoryOrderByInput>;
  skip?: InputMaybe<Scalars["Float"]["input"]>;
  take?: InputMaybe<Scalars["Float"]["input"]>;
  categoriesWhere2?: InputMaybe<CategoryWhereInput>;
}>;

export type UserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    createdAt: any;
    email: string;
    emailVerifiedAt?: any | null;
    firstName?: string | null;
    id: string;
    lastName?: string | null;
    phoneVerifiedAt?: any | null;
    roles: any;
    updatedAt: any;
    userType?: EnumUserUserType | null;
    categories: Array<{
      __typename?: "Category";
      createdAt: any;
      description?: string | null;
      icon?: string | null;
      id: string;
      name?: string | null;
      updatedAt: any;
    }>;
    profile?: {
      __typename?: "Profile";
      aboutProfile?: string | null;
      createdAt: any;
      gender?: string | null;
      id: string;
      profile_category_details?: any | null;
      profile_educational_qualification?: any | null;
      profile_image_url?: string | null;
      updatedAt: any;
      user_Address?: any | null;
      user_social_profiles?: any | null;
    } | null;
    project: Array<{
      __typename?: "Project";
      allow_negotiation?: boolean | null;
      createdAt: any;
      description: string;
      icon?: string | null;
      id: string;
      images: any;
      mark_for_sale?: boolean | null;
      name: string;
      price?: number | null;
      slug: string;
      updatedAt: any;
    }>;
  } | null;
};

export const LoginDocument = gql`
  mutation Login($credentials: Credentials!) {
    login(credentials: $credentials) {
      accessToken
      email
      emailVerifiedAt
      id
      phoneVerifiedAt
      roles
      type
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($credentials: Register!) {
    register(credentials: $credentials) {
      accessToken
      email
      emailVerifiedAt
      id
      phoneVerifiedAt
      roles
      type
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const TriggerEmailVerificationDocument = gql`
  mutation TriggerEmailVerification {
    triggerEmailVerification
  }
`;
export type TriggerEmailVerificationMutationFn = Apollo.MutationFunction<
  TriggerEmailVerificationMutation,
  TriggerEmailVerificationMutationVariables
>;

/**
 * __useTriggerEmailVerificationMutation__
 *
 * To run a mutation, you first call `useTriggerEmailVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTriggerEmailVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [triggerEmailVerificationMutation, { data, loading, error }] = useTriggerEmailVerificationMutation({
 *   variables: {
 *   },
 * });
 */
export function useTriggerEmailVerificationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TriggerEmailVerificationMutation,
    TriggerEmailVerificationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    TriggerEmailVerificationMutation,
    TriggerEmailVerificationMutationVariables
  >(TriggerEmailVerificationDocument, options);
}
export type TriggerEmailVerificationMutationHookResult = ReturnType<
  typeof useTriggerEmailVerificationMutation
>;
export type TriggerEmailVerificationMutationResult =
  Apollo.MutationResult<TriggerEmailVerificationMutation>;
export type TriggerEmailVerificationMutationOptions =
  Apollo.BaseMutationOptions<
    TriggerEmailVerificationMutation,
    TriggerEmailVerificationMutationVariables
  >;
export const TriggerPhoneVerificationDocument = gql`
  mutation TriggerPhoneVerification {
    triggerPhoneVerification
  }
`;
export type TriggerPhoneVerificationMutationFn = Apollo.MutationFunction<
  TriggerPhoneVerificationMutation,
  TriggerPhoneVerificationMutationVariables
>;

/**
 * __useTriggerPhoneVerificationMutation__
 *
 * To run a mutation, you first call `useTriggerPhoneVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTriggerPhoneVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [triggerPhoneVerificationMutation, { data, loading, error }] = useTriggerPhoneVerificationMutation({
 *   variables: {
 *   },
 * });
 */
export function useTriggerPhoneVerificationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TriggerPhoneVerificationMutation,
    TriggerPhoneVerificationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    TriggerPhoneVerificationMutation,
    TriggerPhoneVerificationMutationVariables
  >(TriggerPhoneVerificationDocument, options);
}
export type TriggerPhoneVerificationMutationHookResult = ReturnType<
  typeof useTriggerPhoneVerificationMutation
>;
export type TriggerPhoneVerificationMutationResult =
  Apollo.MutationResult<TriggerPhoneVerificationMutation>;
export type TriggerPhoneVerificationMutationOptions =
  Apollo.BaseMutationOptions<
    TriggerPhoneVerificationMutation,
    TriggerPhoneVerificationMutationVariables
  >;
export const VerifyEmailDocument = gql`
  mutation VerifyEmail($otp: String!) {
    verifyEmail(otp: $otp)
  }
`;
export type VerifyEmailMutationFn = Apollo.MutationFunction<
  VerifyEmailMutation,
  VerifyEmailMutationVariables
>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      otp: // value for 'otp'
 *   },
 * });
 */
export function useVerifyEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyEmailMutation,
    VerifyEmailMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(
    VerifyEmailDocument,
    options
  );
}
export type VerifyEmailMutationHookResult = ReturnType<
  typeof useVerifyEmailMutation
>;
export type VerifyEmailMutationResult =
  Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<
  VerifyEmailMutation,
  VerifyEmailMutationVariables
>;
export const VerifyPhoneDocument = gql`
  mutation VerifyPhone($otp: String!) {
    verifyPhone(otp: $otp)
  }
`;
export type VerifyPhoneMutationFn = Apollo.MutationFunction<
  VerifyPhoneMutation,
  VerifyPhoneMutationVariables
>;

/**
 * __useVerifyPhoneMutation__
 *
 * To run a mutation, you first call `useVerifyPhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyPhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyPhoneMutation, { data, loading, error }] = useVerifyPhoneMutation({
 *   variables: {
 *      otp: // value for 'otp'
 *   },
 * });
 */
export function useVerifyPhoneMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyPhoneMutation,
    VerifyPhoneMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<VerifyPhoneMutation, VerifyPhoneMutationVariables>(
    VerifyPhoneDocument,
    options
  );
}
export type VerifyPhoneMutationHookResult = ReturnType<
  typeof useVerifyPhoneMutation
>;
export type VerifyPhoneMutationResult =
  Apollo.MutationResult<VerifyPhoneMutation>;
export type VerifyPhoneMutationOptions = Apollo.BaseMutationOptions<
  VerifyPhoneMutation,
  VerifyPhoneMutationVariables
>;
export const UserDocument = gql`
  query User(
    $where: UserWhereUniqueInput!
    $orderBy: [CategoryOrderByInput!]
    $skip: Float
    $take: Float
    $categoriesWhere2: CategoryWhereInput
  ) {
    user(where: $where) {
      categories(
        orderBy: $orderBy
        skip: $skip
        take: $take
        where: $categoriesWhere2
      ) {
        createdAt
        description
        icon
        id
        name
        updatedAt
      }
      createdAt
      email
      emailVerifiedAt
      firstName
      id
      lastName
      phoneVerifiedAt
      profile {
        aboutProfile
        createdAt
        gender
        id
        profile_category_details
        profile_educational_qualification
        profile_image_url
        updatedAt
        user_Address
        user_social_profiles
      }
      project {
        allow_negotiation
        createdAt
        description
        icon
        id
        images
        mark_for_sale
        name
        price
        slug
        updatedAt
      }
      roles
      updatedAt
      userType
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      categoriesWhere2: // value for 'categoriesWhere2'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables> &
    ({ variables: UserQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options
  );
}
export function useUserSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<
  typeof useUserSuspenseQuery
>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
