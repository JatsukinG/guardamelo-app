/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
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
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any };
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any };
};

export type ChangePasswordInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  currentPassword: Scalars["String"]["input"];
  newPassword: Scalars["String"]["input"];
};

export type ChangePasswordPayload = {
  __typename?: "ChangePasswordPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type CreateProjectInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export type CreateProjectPayload = {
  __typename?: "CreateProjectPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  project?: Maybe<ProjectNode>;
};

export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateUserPayload = {
  __typename?: "CreateUserPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type DocumentNode = Node & {
  __typename?: "DocumentNode";
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  project: ProjectNode;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type DocumentNodeConnection = {
  __typename?: "DocumentNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DocumentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `DocumentNode` and its cursor. */
export type DocumentNodeEdge = {
  __typename?: "DocumentNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<DocumentNode>;
};

export type Mutation = {
  __typename?: "Mutation";
  changePassword?: Maybe<ChangePasswordPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createUser?: Maybe<CreateUserPayload>;
  refreshToken?: Maybe<Refresh>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateUser?: Maybe<UpdateMePayload>;
  verifyToken?: Maybe<Verify>;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTokenAuthArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateMeInput;
};

export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars["ID"]["output"];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: "ObtainJSONWebToken";
  payload: Scalars["GenericScalar"]["output"];
  refreshExpiresIn: Scalars["Int"]["output"];
  token: Scalars["String"]["output"];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type ProjectNode = Node & {
  __typename?: "ProjectNode";
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  documents: DocumentNodeConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user: UserNode;
};

export type ProjectNodeDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectNodeConnection = {
  __typename?: "ProjectNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProjectNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ProjectNode` and its cursor. */
export type ProjectNodeEdge = {
  __typename?: "ProjectNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ProjectNode>;
};

export type Query = {
  __typename?: "Query";
  document?: Maybe<DocumentNode>;
  documents?: Maybe<DocumentNodeConnection>;
  me?: Maybe<UserNode>;
  project?: Maybe<ProjectNode>;
  projects?: Maybe<ProjectNodeConnection>;
};

export type QueryDocumentArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryProjectArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Refresh = {
  __typename?: "Refresh";
  payload: Scalars["GenericScalar"]["output"];
  refreshExpiresIn: Scalars["Int"]["output"];
  token: Scalars["String"]["output"];
};

export type UpdateMeInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateMePayload = {
  __typename?: "UpdateMePayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type UpdateProjectInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type UpdateProjectPayload = {
  __typename?: "UpdateProjectPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  project?: Maybe<ProjectNode>;
};

export type UserNode = Node & {
  __typename?: "UserNode";
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  isStaff: Scalars["Boolean"]["output"];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars["Boolean"]["output"];
  lastLogin?: Maybe<Scalars["DateTime"]["output"]>;
  lastName: Scalars["String"]["output"];
  password: Scalars["String"]["output"];
  phone?: Maybe<Scalars["String"]["output"]>;
  projects: ProjectNodeConnection;
};

export type UserNodeProjectsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Verify = {
  __typename?: "Verify";
  payload: Scalars["GenericScalar"]["output"];
};

export type ProjectFragment = {
  __typename?: "ProjectNode";
  id: string;
  name: string;
  description?: string | null;
  createdAt: any;
  updatedAt: any;
} & { " $fragmentName"?: "ProjectFragment" };

export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;

export type CreateProjectMutation = {
  __typename?: "Mutation";
  createProject?: {
    __typename?: "CreateProjectPayload";
    project?:
      | ({ __typename?: "ProjectNode" } & {
          " $fragmentRefs"?: { ProjectFragment: ProjectFragment };
        })
      | null;
  } | null;
};

export type UpdateProjectMutationVariables = Exact<{
  input: UpdateProjectInput;
}>;

export type UpdateProjectMutation = {
  __typename?: "Mutation";
  updateProject?: {
    __typename?: "UpdateProjectPayload";
    project?:
      | ({ __typename?: "ProjectNode" } & {
          " $fragmentRefs"?: { ProjectFragment: ProjectFragment };
        })
      | null;
  } | null;
};

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type ProjectsQuery = {
  __typename?: "Query";
  projects?: {
    __typename?: "ProjectNodeConnection";
    edges: Array<{
      __typename?: "ProjectNodeEdge";
      node?:
        | ({ __typename?: "ProjectNode" } & {
            " $fragmentRefs"?: { ProjectFragment: ProjectFragment };
          })
        | null;
    } | null>;
  } | null;
};

export const ProjectFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Project" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ProjectNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProjectFragment, unknown>;
export const CreateProjectDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateProject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateProjectInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createProject" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "project" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Project" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Project" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ProjectNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;
export const UpdateProjectDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateProject" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateProjectInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateProject" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "project" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Project" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Project" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ProjectNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>;
export const ProjectsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Projects" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "projects" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "Project" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Project" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ProjectNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProjectsQuery, ProjectsQueryVariables>;
