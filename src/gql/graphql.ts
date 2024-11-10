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
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: any; output: any };
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

export type CreateNoteInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  projectId: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
};

export type CreateNotePayload = {
  __typename?: "CreateNotePayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  note?: Maybe<NoteNode>;
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

export type CreateResourceInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  content: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Scalars["JSONString"]["input"]>;
  title: Scalars["String"]["input"];
};

export type CreateResourcePayload = {
  __typename?: "CreateResourcePayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  resource?: Maybe<ResourceNode>;
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

export type DeleteNoteInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
};

export type DeleteNotePayload = {
  __typename?: "DeleteNotePayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteProjectInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
};

export type DeleteProjectPayload = {
  __typename?: "DeleteProjectPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DeleteResourceInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
};

export type DeleteResourcePayload = {
  __typename?: "DeleteResourcePayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  changePassword?: Maybe<ChangePasswordPayload>;
  createNote?: Maybe<CreateNotePayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createResource?: Maybe<CreateResourcePayload>;
  createUser?: Maybe<CreateUserPayload>;
  deleteNote?: Maybe<DeleteNotePayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteResource?: Maybe<DeleteResourcePayload>;
  refreshToken?: Maybe<Refresh>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateNote?: Maybe<UpdateNotePayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateResource?: Maybe<UpdateResourcePayload>;
  updateUser?: Maybe<UpdateMePayload>;
  verifyToken?: Maybe<Verify>;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationCreateResourceArgs = {
  input: CreateResourceInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput;
};

export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};

export type MutationDeleteResourceArgs = {
  input: DeleteResourceInput;
};

export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTokenAuthArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput;
};

export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};

export type MutationUpdateResourceArgs = {
  input: UpdateResourceInput;
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

export type NoteNode = Node & {
  __typename?: "NoteNode";
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  project: ProjectNode;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type NoteNodeConnection = {
  __typename?: "NoteNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NoteNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `NoteNode` and its cursor. */
export type NoteNodeEdge = {
  __typename?: "NoteNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<NoteNode>;
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
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  notes: NoteNodeConnection;
  updatedAt: Scalars["DateTime"]["output"];
  user: UserNode;
};

export type ProjectNodeNotesArgs = {
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
  me?: Maybe<UserNode>;
  note?: Maybe<NoteNode>;
  notes?: Maybe<NoteNodeConnection>;
  project?: Maybe<ProjectNode>;
  projects?: Maybe<ProjectNodeConnection>;
  resource?: Maybe<ResourceNode>;
  resources?: Maybe<ResourceNodeConnection>;
};

export type QueryNoteArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryNotesArgs = {
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

export type QueryResourceArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryResourcesArgs = {
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

export type ResourceNode = Node & {
  __typename?: "ResourceNode";
  author: UserNode;
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  tags: Scalars["JSONString"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type ResourceNodeConnection = {
  __typename?: "ResourceNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ResourceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ResourceNode` and its cursor. */
export type ResourceNodeEdge = {
  __typename?: "ResourceNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ResourceNode>;
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

export type UpdateNoteInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateNotePayload = {
  __typename?: "UpdateNotePayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  note?: Maybe<NoteNode>;
};

export type UpdateProjectInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type UpdateProjectPayload = {
  __typename?: "UpdateProjectPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  project?: Maybe<ProjectNode>;
};

export type UpdateResourceInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Scalars["JSONString"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateResourcePayload = {
  __typename?: "UpdateResourcePayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  resource?: Maybe<ResourceNode>;
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
  resources: ResourceNodeConnection;
};

export type UserNodeProjectsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserNodeResourcesArgs = {
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

export type NoteFragment = {
  __typename?: "NoteNode";
  id: string;
  title: string;
  content: string;
  createdAt: any;
  updatedAt: any;
} & { " $fragmentName"?: "NoteFragment" };

export type NotesQueryVariables = Exact<{ [key: string]: never }>;

export type NotesQuery = {
  __typename?: "Query";
  notes?: {
    __typename?: "NoteNodeConnection";
    edges: Array<{
      __typename?: "NoteNodeEdge";
      node?:
        | ({ __typename?: "NoteNode" } & {
            " $fragmentRefs"?: { NoteFragment: NoteFragment };
          })
        | null;
    } | null>;
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
export const NoteFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Note" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NoteNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "content" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NoteFragment, unknown>;
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
export const NotesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Notes" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notes" },
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
                              name: { kind: "Name", value: "Note" },
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
      name: { kind: "Name", value: "Note" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "NoteNode" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "content" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NotesQuery, NotesQueryVariables>;
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
