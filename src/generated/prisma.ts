import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    businesses: <T = Business[]>(args: { where?: BusinessWhereInput, orderBy?: BusinessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    hotels: <T = Hotel[]>(args: { where?: HotelWhereInput, orderBy?: HotelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    houses: <T = House[]>(args: { where?: HouseWhereInput, orderBy?: HouseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foods: <T = Food[]>(args: { where?: FoodWhereInput, orderBy?: FoodOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questions: <T = Question[]>(args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    answers: <T = Answer[]>(args: { where?: AnswerWhereInput, orderBy?: AnswerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    business: <T = Business | null>(args: { where: BusinessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    hotel: <T = Hotel | null>(args: { where: HotelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    house: <T = House | null>(args: { where: HouseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    food: <T = Food | null>(args: { where: FoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    question: <T = Question | null>(args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    answer: <T = Answer | null>(args: { where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    businessesConnection: <T = BusinessConnection>(args: { where?: BusinessWhereInput, orderBy?: BusinessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    hotelsConnection: <T = HotelConnection>(args: { where?: HotelWhereInput, orderBy?: HotelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    housesConnection: <T = HouseConnection>(args: { where?: HouseWhereInput, orderBy?: HouseOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    foodsConnection: <T = FoodConnection>(args: { where?: FoodWhereInput, orderBy?: FoodOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    questionsConnection: <T = QuestionConnection>(args: { where?: QuestionWhereInput, orderBy?: QuestionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    answersConnection: <T = AnswerConnection>(args: { where?: AnswerWhereInput, orderBy?: AnswerOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBusiness: <T = Business>(args: { data: BusinessCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createHotel: <T = Hotel>(args: { data: HotelCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createHouse: <T = House>(args: { data: HouseCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFood: <T = Food>(args: { data: FoodCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createQuestion: <T = Question>(args: { data: QuestionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAnswer: <T = Answer>(args: { data: AnswerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBusiness: <T = Business | null>(args: { data: BusinessUpdateInput, where: BusinessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateHotel: <T = Hotel | null>(args: { data: HotelUpdateInput, where: HotelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateHouse: <T = House | null>(args: { data: HouseUpdateInput, where: HouseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFood: <T = Food | null>(args: { data: FoodUpdateInput, where: FoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateQuestion: <T = Question | null>(args: { data: QuestionUpdateInput, where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAnswer: <T = Answer | null>(args: { data: AnswerUpdateInput, where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBusiness: <T = Business | null>(args: { where: BusinessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteHotel: <T = Hotel | null>(args: { where: HotelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteHouse: <T = House | null>(args: { where: HouseWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFood: <T = Food | null>(args: { where: FoodWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteQuestion: <T = Question | null>(args: { where: QuestionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAnswer: <T = Answer | null>(args: { where: AnswerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBusiness: <T = Business>(args: { where: BusinessWhereUniqueInput, create: BusinessCreateInput, update: BusinessUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertHotel: <T = Hotel>(args: { where: HotelWhereUniqueInput, create: HotelCreateInput, update: HotelUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertHouse: <T = House>(args: { where: HouseWhereUniqueInput, create: HouseCreateInput, update: HouseUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFood: <T = Food>(args: { where: FoodWhereUniqueInput, create: FoodCreateInput, update: FoodUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertQuestion: <T = Question>(args: { where: QuestionWhereUniqueInput, create: QuestionCreateInput, update: QuestionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAnswer: <T = Answer>(args: { where: AnswerWhereUniqueInput, create: AnswerCreateInput, update: AnswerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBusinesses: <T = BatchPayload>(args: { data: BusinessUpdateInput, where?: BusinessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyHotels: <T = BatchPayload>(args: { data: HotelUpdateInput, where?: HotelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyHouses: <T = BatchPayload>(args: { data: HouseUpdateInput, where?: HouseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFoods: <T = BatchPayload>(args: { data: FoodUpdateInput, where?: FoodWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyQuestions: <T = BatchPayload>(args: { data: QuestionUpdateInput, where?: QuestionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAnswers: <T = BatchPayload>(args: { data: AnswerUpdateInput, where?: AnswerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBusinesses: <T = BatchPayload>(args: { where?: BusinessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyHotels: <T = BatchPayload>(args: { where?: HotelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyHouses: <T = BatchPayload>(args: { where?: HouseWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFoods: <T = BatchPayload>(args: { where?: FoodWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyQuestions: <T = BatchPayload>(args: { where?: QuestionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAnswers: <T = BatchPayload>(args: { where?: AnswerWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    business: <T = BusinessSubscriptionPayload | null>(args: { where?: BusinessSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    hotel: <T = HotelSubscriptionPayload | null>(args: { where?: HotelSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    house: <T = HouseSubscriptionPayload | null>(args: { where?: HouseSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    food: <T = FoodSubscriptionPayload | null>(args: { where?: FoodSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    question: <T = QuestionSubscriptionPayload | null>(args: { where?: QuestionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    answer: <T = AnswerSubscriptionPayload | null>(args: { where?: AnswerSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Business: (where?: BusinessWhereInput) => Promise<boolean>
  Hotel: (where?: HotelWhereInput) => Promise<boolean>
  House: (where?: HouseWhereInput) => Promise<boolean>
  Food: (where?: FoodWhereInput) => Promise<boolean>
  Post: (where?: PostWhereInput) => Promise<boolean>
  Question: (where?: QuestionWhereInput) => Promise<boolean>
  Answer: (where?: AnswerWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAnswer {
  count: Int!
}

type AggregateBusiness {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateFood {
  count: Int!
}

type AggregateHotel {
  count: Int!
}

type AggregateHouse {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateQuestion {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Answer implements Node {
  id: ID!
  question(where: QuestionWhereInput): Question
  title: String!
  content: String!
  updatedAt: DateTime!
  createdAt: DateTime!
  author: String!
}

"""A connection to a list of items."""
type AnswerConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AnswerEdge]!
  aggregate: AggregateAnswer!
}

input AnswerCreateInput {
  title: String!
  content: String!
  author: String!
  question: QuestionCreateOneWithoutAnswersInput
}

input AnswerCreateManyWithoutQuestionInput {
  create: [AnswerCreateWithoutQuestionInput!]
  connect: [AnswerWhereUniqueInput!]
}

input AnswerCreateWithoutQuestionInput {
  title: String!
  content: String!
  author: String!
}

"""An edge in a connection."""
type AnswerEdge {
  """The item at the end of the edge."""
  node: Answer!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AnswerOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
  author_ASC
  author_DESC
}

type AnswerPreviousValues {
  id: ID!
  title: String!
  content: String!
  updatedAt: DateTime!
  createdAt: DateTime!
  author: String!
}

type AnswerSubscriptionPayload {
  mutation: MutationType!
  node: Answer
  updatedFields: [String!]
  previousValues: AnswerPreviousValues
}

input AnswerSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AnswerSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnswerSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnswerSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AnswerWhereInput
}

input AnswerUpdateInput {
  title: String
  content: String
  author: String
  question: QuestionUpdateOneWithoutAnswersInput
}

input AnswerUpdateManyWithoutQuestionInput {
  create: [AnswerCreateWithoutQuestionInput!]
  connect: [AnswerWhereUniqueInput!]
  disconnect: [AnswerWhereUniqueInput!]
  delete: [AnswerWhereUniqueInput!]
  update: [AnswerUpdateWithWhereUniqueWithoutQuestionInput!]
  upsert: [AnswerUpsertWithWhereUniqueWithoutQuestionInput!]
}

input AnswerUpdateWithoutQuestionDataInput {
  title: String
  content: String
  author: String
}

input AnswerUpdateWithWhereUniqueWithoutQuestionInput {
  where: AnswerWhereUniqueInput!
  data: AnswerUpdateWithoutQuestionDataInput!
}

input AnswerUpsertWithWhereUniqueWithoutQuestionInput {
  where: AnswerWhereUniqueInput!
  update: AnswerUpdateWithoutQuestionDataInput!
  create: AnswerCreateWithoutQuestionInput!
}

input AnswerWhereInput {
  """Logical AND on all given filters."""
  AND: [AnswerWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnswerWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnswerWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  author: String

  """All values that are not equal to given value."""
  author_not: String

  """All values that are contained in given list."""
  author_in: [String!]

  """All values that are not contained in given list."""
  author_not_in: [String!]

  """All values less than the given value."""
  author_lt: String

  """All values less than or equal the given value."""
  author_lte: String

  """All values greater than the given value."""
  author_gt: String

  """All values greater than or equal the given value."""
  author_gte: String

  """All values containing the given string."""
  author_contains: String

  """All values not containing the given string."""
  author_not_contains: String

  """All values starting with the given string."""
  author_starts_with: String

  """All values not starting with the given string."""
  author_not_starts_with: String

  """All values ending with the given string."""
  author_ends_with: String

  """All values not ending with the given string."""
  author_not_ends_with: String
  question: QuestionWhereInput
}

input AnswerWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Business implements Node {
  id: ID!
  name: String!
  url: String!
  img(where: FileWhereInput): File!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type BusinessConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BusinessEdge]!
  aggregate: AggregateBusiness!
}

input BusinessCreateInput {
  name: String!
  url: String!
  img: FileCreateOneInput!
}

"""An edge in a connection."""
type BusinessEdge {
  """The item at the end of the edge."""
  node: Business!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BusinessOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BusinessPreviousValues {
  id: ID!
  name: String!
  url: String!
  createdAt: DateTime!
}

type BusinessSubscriptionPayload {
  mutation: MutationType!
  node: Business
  updatedFields: [String!]
  previousValues: BusinessPreviousValues
}

input BusinessSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BusinessSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BusinessSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BusinessSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BusinessWhereInput
}

input BusinessUpdateInput {
  name: String
  url: String
  img: FileUpdateOneInput
}

input BusinessWhereInput {
  """Logical AND on all given filters."""
  AND: [BusinessWhereInput!]

  """Logical OR on all given filters."""
  OR: [BusinessWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BusinessWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  img: FileWhereInput
}

input BusinessWhereUniqueInput {
  id: ID
}

scalar DateTime

type File implements Node {
  id: ID!
  url: String!
  filename: String!
  mimetype: String!
  encoding: String!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  url: String!
  filename: String!
  mimetype: String!
  encoding: String!
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FilePreviousValues {
  id: ID!
  url: String!
  filename: String!
  mimetype: String!
  encoding: String!
  createdAt: DateTime!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateDataInput {
  url: String
  filename: String
  mimetype: String
  encoding: String
}

input FileUpdateInput {
  url: String
  filename: String
  mimetype: String
  encoding: String
}

input FileUpdateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
  delete: Boolean
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
}

input FileWhereUniqueInput {
  id: ID
}

type Food implements Node {
  id: ID!
  name: String!
  img(where: FileWhereInput): File
  createdAt: DateTime!
}

"""A connection to a list of items."""
type FoodConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FoodEdge]!
  aggregate: AggregateFood!
}

input FoodCreateInput {
  name: String!
  img: FileCreateOneInput
}

"""An edge in a connection."""
type FoodEdge {
  """The item at the end of the edge."""
  node: Food!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FoodOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FoodPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
}

type FoodSubscriptionPayload {
  mutation: MutationType!
  node: Food
  updatedFields: [String!]
  previousValues: FoodPreviousValues
}

input FoodSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FoodSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FoodSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FoodSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FoodWhereInput
}

input FoodUpdateInput {
  name: String
  img: FileUpdateOneInput
}

input FoodWhereInput {
  """Logical AND on all given filters."""
  AND: [FoodWhereInput!]

  """Logical OR on all given filters."""
  OR: [FoodWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FoodWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  img: FileWhereInput
}

input FoodWhereUniqueInput {
  id: ID
}

type Hotel implements Node {
  id: ID!
  name: String!
  address: String!
  introduction: String!
  houses(where: HouseWhereInput, orderBy: HouseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [House!]
  score: Int
  img(where: FileWhereInput): File
  url: String!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type HotelConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [HotelEdge]!
  aggregate: AggregateHotel!
}

input HotelCreateInput {
  name: String!
  address: String!
  introduction: String!
  score: Int
  url: String!
  houses: HouseCreateManyInput
  img: FileCreateOneInput
}

"""An edge in a connection."""
type HotelEdge {
  """The item at the end of the edge."""
  node: Hotel!

  """A cursor for use in pagination."""
  cursor: String!
}

enum HotelOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  address_ASC
  address_DESC
  introduction_ASC
  introduction_DESC
  score_ASC
  score_DESC
  url_ASC
  url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HotelPreviousValues {
  id: ID!
  name: String!
  address: String!
  introduction: String!
  score: Int
  url: String!
  createdAt: DateTime!
}

type HotelSubscriptionPayload {
  mutation: MutationType!
  node: Hotel
  updatedFields: [String!]
  previousValues: HotelPreviousValues
}

input HotelSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [HotelSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [HotelSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HotelSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: HotelWhereInput
}

input HotelUpdateInput {
  name: String
  address: String
  introduction: String
  score: Int
  url: String
  houses: HouseUpdateManyInput
  img: FileUpdateOneInput
}

input HotelWhereInput {
  """Logical AND on all given filters."""
  AND: [HotelWhereInput!]

  """Logical OR on all given filters."""
  OR: [HotelWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HotelWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  introduction: String

  """All values that are not equal to given value."""
  introduction_not: String

  """All values that are contained in given list."""
  introduction_in: [String!]

  """All values that are not contained in given list."""
  introduction_not_in: [String!]

  """All values less than the given value."""
  introduction_lt: String

  """All values less than or equal the given value."""
  introduction_lte: String

  """All values greater than the given value."""
  introduction_gt: String

  """All values greater than or equal the given value."""
  introduction_gte: String

  """All values containing the given string."""
  introduction_contains: String

  """All values not containing the given string."""
  introduction_not_contains: String

  """All values starting with the given string."""
  introduction_starts_with: String

  """All values not starting with the given string."""
  introduction_not_starts_with: String

  """All values ending with the given string."""
  introduction_ends_with: String

  """All values not ending with the given string."""
  introduction_not_ends_with: String
  score: Int

  """All values that are not equal to given value."""
  score_not: Int

  """All values that are contained in given list."""
  score_in: [Int!]

  """All values that are not contained in given list."""
  score_not_in: [Int!]

  """All values less than the given value."""
  score_lt: Int

  """All values less than or equal the given value."""
  score_lte: Int

  """All values greater than the given value."""
  score_gt: Int

  """All values greater than or equal the given value."""
  score_gte: Int
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  houses_every: HouseWhereInput
  houses_some: HouseWhereInput
  houses_none: HouseWhereInput
  img: FileWhereInput
}

input HotelWhereUniqueInput {
  id: ID
}

type House implements Node {
  id: ID!
  name: String!
  price: Float!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type HouseConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [HouseEdge]!
  aggregate: AggregateHouse!
}

input HouseCreateInput {
  name: String!
  price: Float!
}

input HouseCreateManyInput {
  create: [HouseCreateInput!]
  connect: [HouseWhereUniqueInput!]
}

"""An edge in a connection."""
type HouseEdge {
  """The item at the end of the edge."""
  node: House!

  """A cursor for use in pagination."""
  cursor: String!
}

enum HouseOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HousePreviousValues {
  id: ID!
  name: String!
  price: Float!
  createdAt: DateTime!
}

type HouseSubscriptionPayload {
  mutation: MutationType!
  node: House
  updatedFields: [String!]
  previousValues: HousePreviousValues
}

input HouseSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [HouseSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [HouseSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HouseSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: HouseWhereInput
}

input HouseUpdateDataInput {
  name: String
  price: Float
}

input HouseUpdateInput {
  name: String
  price: Float
}

input HouseUpdateManyInput {
  create: [HouseCreateInput!]
  connect: [HouseWhereUniqueInput!]
  disconnect: [HouseWhereUniqueInput!]
  delete: [HouseWhereUniqueInput!]
  update: [HouseUpdateWithWhereUniqueNestedInput!]
  upsert: [HouseUpsertWithWhereUniqueNestedInput!]
}

input HouseUpdateWithWhereUniqueNestedInput {
  where: HouseWhereUniqueInput!
  data: HouseUpdateDataInput!
}

input HouseUpsertWithWhereUniqueNestedInput {
  where: HouseWhereUniqueInput!
  update: HouseUpdateDataInput!
  create: HouseCreateInput!
}

input HouseWhereInput {
  """Logical AND on all given filters."""
  AND: [HouseWhereInput!]

  """Logical OR on all given filters."""
  OR: [HouseWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [HouseWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
}

input HouseWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createFile(data: FileCreateInput!): File!
  createBusiness(data: BusinessCreateInput!): Business!
  createHotel(data: HotelCreateInput!): Hotel!
  createHouse(data: HouseCreateInput!): House!
  createFood(data: FoodCreateInput!): Food!
  createPost(data: PostCreateInput!): Post!
  createQuestion(data: QuestionCreateInput!): Question!
  createAnswer(data: AnswerCreateInput!): Answer!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateBusiness(data: BusinessUpdateInput!, where: BusinessWhereUniqueInput!): Business
  updateHotel(data: HotelUpdateInput!, where: HotelWhereUniqueInput!): Hotel
  updateHouse(data: HouseUpdateInput!, where: HouseWhereUniqueInput!): House
  updateFood(data: FoodUpdateInput!, where: FoodWhereUniqueInput!): Food
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateQuestion(data: QuestionUpdateInput!, where: QuestionWhereUniqueInput!): Question
  updateAnswer(data: AnswerUpdateInput!, where: AnswerWhereUniqueInput!): Answer
  deleteUser(where: UserWhereUniqueInput!): User
  deleteFile(where: FileWhereUniqueInput!): File
  deleteBusiness(where: BusinessWhereUniqueInput!): Business
  deleteHotel(where: HotelWhereUniqueInput!): Hotel
  deleteHouse(where: HouseWhereUniqueInput!): House
  deleteFood(where: FoodWhereUniqueInput!): Food
  deletePost(where: PostWhereUniqueInput!): Post
  deleteQuestion(where: QuestionWhereUniqueInput!): Question
  deleteAnswer(where: AnswerWhereUniqueInput!): Answer
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertBusiness(where: BusinessWhereUniqueInput!, create: BusinessCreateInput!, update: BusinessUpdateInput!): Business!
  upsertHotel(where: HotelWhereUniqueInput!, create: HotelCreateInput!, update: HotelUpdateInput!): Hotel!
  upsertHouse(where: HouseWhereUniqueInput!, create: HouseCreateInput!, update: HouseUpdateInput!): House!
  upsertFood(where: FoodWhereUniqueInput!, create: FoodCreateInput!, update: FoodUpdateInput!): Food!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertQuestion(where: QuestionWhereUniqueInput!, create: QuestionCreateInput!, update: QuestionUpdateInput!): Question!
  upsertAnswer(where: AnswerWhereUniqueInput!, create: AnswerCreateInput!, update: AnswerUpdateInput!): Answer!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  updateManyBusinesses(data: BusinessUpdateInput!, where: BusinessWhereInput): BatchPayload!
  updateManyHotels(data: HotelUpdateInput!, where: HotelWhereInput): BatchPayload!
  updateManyHouses(data: HouseUpdateInput!, where: HouseWhereInput): BatchPayload!
  updateManyFoods(data: FoodUpdateInput!, where: FoodWhereInput): BatchPayload!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyQuestions(data: QuestionUpdateInput!, where: QuestionWhereInput): BatchPayload!
  updateManyAnswers(data: AnswerUpdateInput!, where: AnswerWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyBusinesses(where: BusinessWhereInput): BatchPayload!
  deleteManyHotels(where: HotelWhereInput): BatchPayload!
  deleteManyHouses(where: HouseWhereInput): BatchPayload!
  deleteManyFoods(where: FoodWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyQuestions(where: QuestionWhereInput): BatchPayload!
  deleteManyAnswers(where: AnswerWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  title: String!
  category: PostCategory!
  author: String!
  content: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

enum PostCategory {
  ANIMAL_FARMING
  PLANTING
  FRUIT_CULTIVATION
  POLICY
  NEWS
  TREND
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  category: PostCategory!
  author: String!
  content: String!
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  category_ASC
  category_DESC
  author_ASC
  author_DESC
  content_ASC
  content_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  category: PostCategory!
  author: String!
  content: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  title: String
  category: PostCategory
  author: String
  content: String
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  category: PostCategory

  """All values that are not equal to given value."""
  category_not: PostCategory

  """All values that are contained in given list."""
  category_in: [PostCategory!]

  """All values that are not contained in given list."""
  category_not_in: [PostCategory!]
  author: String

  """All values that are not equal to given value."""
  author_not: String

  """All values that are contained in given list."""
  author_in: [String!]

  """All values that are not contained in given list."""
  author_not_in: [String!]

  """All values less than the given value."""
  author_lt: String

  """All values less than or equal the given value."""
  author_lte: String

  """All values greater than the given value."""
  author_gt: String

  """All values greater than or equal the given value."""
  author_gte: String

  """All values containing the given string."""
  author_contains: String

  """All values not containing the given string."""
  author_not_contains: String

  """All values starting with the given string."""
  author_starts_with: String

  """All values not starting with the given string."""
  author_not_starts_with: String

  """All values ending with the given string."""
  author_ends_with: String

  """All values not ending with the given string."""
  author_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  businesses(where: BusinessWhereInput, orderBy: BusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Business]!
  hotels(where: HotelWhereInput, orderBy: HotelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hotel]!
  houses(where: HouseWhereInput, orderBy: HouseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [House]!
  foods(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Food]!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question]!
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer]!
  user(where: UserWhereUniqueInput!): User
  file(where: FileWhereUniqueInput!): File
  business(where: BusinessWhereUniqueInput!): Business
  hotel(where: HotelWhereUniqueInput!): Hotel
  house(where: HouseWhereUniqueInput!): House
  food(where: FoodWhereUniqueInput!): Food
  post(where: PostWhereUniqueInput!): Post
  question(where: QuestionWhereUniqueInput!): Question
  answer(where: AnswerWhereUniqueInput!): Answer
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  businessesConnection(where: BusinessWhereInput, orderBy: BusinessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BusinessConnection!
  hotelsConnection(where: HotelWhereInput, orderBy: HotelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HotelConnection!
  housesConnection(where: HouseWhereInput, orderBy: HouseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HouseConnection!
  foodsConnection(where: FoodWhereInput, orderBy: FoodOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoodConnection!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  questionsConnection(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionConnection!
  answersConnection(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnswerConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Question implements Node {
  id: ID!
  title: String!
  content: String!
  updatedAt: DateTime!
  createdAt: DateTime!
  answers(where: AnswerWhereInput, orderBy: AnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Answer!]
}

"""A connection to a list of items."""
type QuestionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [QuestionEdge]!
  aggregate: AggregateQuestion!
}

input QuestionCreateInput {
  title: String!
  content: String!
  answers: AnswerCreateManyWithoutQuestionInput
}

input QuestionCreateOneWithoutAnswersInput {
  create: QuestionCreateWithoutAnswersInput
  connect: QuestionWhereUniqueInput
}

input QuestionCreateWithoutAnswersInput {
  title: String!
  content: String!
}

"""An edge in a connection."""
type QuestionEdge {
  """The item at the end of the edge."""
  node: Question!

  """A cursor for use in pagination."""
  cursor: String!
}

enum QuestionOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type QuestionPreviousValues {
  id: ID!
  title: String!
  content: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type QuestionSubscriptionPayload {
  mutation: MutationType!
  node: Question
  updatedFields: [String!]
  previousValues: QuestionPreviousValues
}

input QuestionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: QuestionWhereInput
}

input QuestionUpdateInput {
  title: String
  content: String
  answers: AnswerUpdateManyWithoutQuestionInput
}

input QuestionUpdateOneWithoutAnswersInput {
  create: QuestionCreateWithoutAnswersInput
  connect: QuestionWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: QuestionUpdateWithoutAnswersDataInput
  upsert: QuestionUpsertWithoutAnswersInput
}

input QuestionUpdateWithoutAnswersDataInput {
  title: String
  content: String
}

input QuestionUpsertWithoutAnswersInput {
  update: QuestionUpdateWithoutAnswersDataInput!
  create: QuestionCreateWithoutAnswersInput!
}

input QuestionWhereInput {
  """Logical AND on all given filters."""
  AND: [QuestionWhereInput!]

  """Logical OR on all given filters."""
  OR: [QuestionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [QuestionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  answers_every: AnswerWhereInput
  answers_some: AnswerWhereInput
  answers_none: AnswerWhereInput
}

input QuestionWhereUniqueInput {
  id: ID
}

enum Role {
  ADMIN
  SUB_ADMIN_1
  SUB_ADMIN_2
  SUB_ADMIN_3
  SUB_ADMIN_4
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  business(where: BusinessSubscriptionWhereInput): BusinessSubscriptionPayload
  hotel(where: HotelSubscriptionWhereInput): HotelSubscriptionPayload
  house(where: HouseSubscriptionWhereInput): HouseSubscriptionPayload
  food(where: FoodSubscriptionWhereInput): FoodSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  question(where: QuestionSubscriptionWhereInput): QuestionSubscriptionPayload
  answer(where: AnswerSubscriptionWhereInput): AnswerSubscriptionPayload
}

type User implements Node {
  id: ID!
  password: String!
  name: String!
  role: [Role!]
  createdAt: DateTime!
  lastLoginAt: DateTime
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  password: String!
  name: String!
  lastLoginAt: DateTime
  role: UserCreateroleInput
}

input UserCreateroleInput {
  set: [Role!]
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  lastLoginAt_ASC
  lastLoginAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  password: String!
  name: String!
  role: [Role!]
  createdAt: DateTime!
  lastLoginAt: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  password: String
  name: String
  lastLoginAt: DateTime
  role: UserUpdateroleInput
}

input UserUpdateroleInput {
  set: [Role!]
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  lastLoginAt: DateTime

  """All values that are not equal to given value."""
  lastLoginAt_not: DateTime

  """All values that are contained in given list."""
  lastLoginAt_in: [DateTime!]

  """All values that are not contained in given list."""
  lastLoginAt_not_in: [DateTime!]

  """All values less than the given value."""
  lastLoginAt_lt: DateTime

  """All values less than or equal the given value."""
  lastLoginAt_lte: DateTime

  """All values greater than the given value."""
  lastLoginAt_gt: DateTime

  """All values greater than or equal the given value."""
  lastLoginAt_gte: DateTime
}

input UserWhereUniqueInput {
  id: ID
  name: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type Role =   'ADMIN' |
  'SUB_ADMIN_1' |
  'SUB_ADMIN_2' |
  'SUB_ADMIN_3' |
  'SUB_ADMIN_4'

export type HotelOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'address_ASC' |
  'address_DESC' |
  'introduction_ASC' |
  'introduction_DESC' |
  'score_ASC' |
  'score_DESC' |
  'url_ASC' |
  'url_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type FoodOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'lastLoginAt_ASC' |
  'lastLoginAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type BusinessOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'url_ASC' |
  'url_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type HouseOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'url_ASC' |
  'url_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'encoding_ASC' |
  'encoding_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type QuestionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'content_ASC' |
  'content_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AnswerOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'content_ASC' |
  'content_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'author_ASC' |
  'author_DESC'

export type PostCategory =   'ANIMAL_FARMING' |
  'PLANTING' |
  'FRUIT_CULTIVATION' |
  'POLICY' |
  'NEWS' |
  'TREND'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'category_ASC' |
  'category_DESC' |
  'author_ASC' |
  'author_DESC' |
  'content_ASC' |
  'content_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface HouseCreateInput {
  name: String
  price: Float
}

export interface AnswerUpdateManyWithoutQuestionInput {
  create?: AnswerCreateWithoutQuestionInput[] | AnswerCreateWithoutQuestionInput
  connect?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
  disconnect?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
  delete?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
  update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput[] | AnswerUpdateWithWhereUniqueWithoutQuestionInput
  upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput[] | AnswerUpsertWithWhereUniqueWithoutQuestionInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  lastLoginAt?: DateTime
  lastLoginAt_not?: DateTime
  lastLoginAt_in?: DateTime[] | DateTime
  lastLoginAt_not_in?: DateTime[] | DateTime
  lastLoginAt_lt?: DateTime
  lastLoginAt_lte?: DateTime
  lastLoginAt_gt?: DateTime
  lastLoginAt_gte?: DateTime
}

export interface QuestionUpdateInput {
  title?: String
  content?: String
  answers?: AnswerUpdateManyWithoutQuestionInput
}

export interface HotelWhereInput {
  AND?: HotelWhereInput[] | HotelWhereInput
  OR?: HotelWhereInput[] | HotelWhereInput
  NOT?: HotelWhereInput[] | HotelWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  introduction?: String
  introduction_not?: String
  introduction_in?: String[] | String
  introduction_not_in?: String[] | String
  introduction_lt?: String
  introduction_lte?: String
  introduction_gt?: String
  introduction_gte?: String
  introduction_contains?: String
  introduction_not_contains?: String
  introduction_starts_with?: String
  introduction_not_starts_with?: String
  introduction_ends_with?: String
  introduction_not_ends_with?: String
  score?: Int
  score_not?: Int
  score_in?: Int[] | Int
  score_not_in?: Int[] | Int
  score_lt?: Int
  score_lte?: Int
  score_gt?: Int
  score_gte?: Int
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  houses_every?: HouseWhereInput
  houses_some?: HouseWhereInput
  houses_none?: HouseWhereInput
  img?: FileWhereInput
}

export interface PostUpdateInput {
  title?: String
  category?: PostCategory
  author?: String
  content?: String
}

export interface BusinessSubscriptionWhereInput {
  AND?: BusinessSubscriptionWhereInput[] | BusinessSubscriptionWhereInput
  OR?: BusinessSubscriptionWhereInput[] | BusinessSubscriptionWhereInput
  NOT?: BusinessSubscriptionWhereInput[] | BusinessSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BusinessWhereInput
}

export interface FoodUpdateInput {
  name?: String
  img?: FileUpdateOneInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface HouseUpdateInput {
  name?: String
  price?: Float
}

export interface HouseSubscriptionWhereInput {
  AND?: HouseSubscriptionWhereInput[] | HouseSubscriptionWhereInput
  OR?: HouseSubscriptionWhereInput[] | HouseSubscriptionWhereInput
  NOT?: HouseSubscriptionWhereInput[] | HouseSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: HouseWhereInput
}

export interface HouseUpsertWithWhereUniqueNestedInput {
  where: HouseWhereUniqueInput
  update: HouseUpdateDataInput
  create: HouseCreateInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  encoding?: String
  encoding_not?: String
  encoding_in?: String[] | String
  encoding_not_in?: String[] | String
  encoding_lt?: String
  encoding_lte?: String
  encoding_gt?: String
  encoding_gte?: String
  encoding_contains?: String
  encoding_not_contains?: String
  encoding_starts_with?: String
  encoding_not_starts_with?: String
  encoding_ends_with?: String
  encoding_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
}

export interface HouseUpdateDataInput {
  name?: String
  price?: Float
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  category?: PostCategory
  category_not?: PostCategory
  category_in?: PostCategory[] | PostCategory
  category_not_in?: PostCategory[] | PostCategory
  author?: String
  author_not?: String
  author_in?: String[] | String
  author_not_in?: String[] | String
  author_lt?: String
  author_lte?: String
  author_gt?: String
  author_gte?: String
  author_contains?: String
  author_not_contains?: String
  author_starts_with?: String
  author_not_starts_with?: String
  author_ends_with?: String
  author_not_ends_with?: String
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
}

export interface HouseUpdateWithWhereUniqueNestedInput {
  where: HouseWhereUniqueInput
  data: HouseUpdateDataInput
}

export interface FoodSubscriptionWhereInput {
  AND?: FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput
  OR?: FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput
  NOT?: FoodSubscriptionWhereInput[] | FoodSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FoodWhereInput
}

export interface HouseUpdateManyInput {
  create?: HouseCreateInput[] | HouseCreateInput
  connect?: HouseWhereUniqueInput[] | HouseWhereUniqueInput
  disconnect?: HouseWhereUniqueInput[] | HouseWhereUniqueInput
  delete?: HouseWhereUniqueInput[] | HouseWhereUniqueInput
  update?: HouseUpdateWithWhereUniqueNestedInput[] | HouseUpdateWithWhereUniqueNestedInput
  upsert?: HouseUpsertWithWhereUniqueNestedInput[] | HouseUpsertWithWhereUniqueNestedInput
}

export interface QuestionWhereInput {
  AND?: QuestionWhereInput[] | QuestionWhereInput
  OR?: QuestionWhereInput[] | QuestionWhereInput
  NOT?: QuestionWhereInput[] | QuestionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  answers_every?: AnswerWhereInput
  answers_some?: AnswerWhereInput
  answers_none?: AnswerWhereInput
}

export interface HotelUpdateInput {
  name?: String
  address?: String
  introduction?: String
  score?: Int
  url?: String
  houses?: HouseUpdateManyInput
  img?: FileUpdateOneInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface QuestionSubscriptionWhereInput {
  AND?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  OR?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  NOT?: QuestionSubscriptionWhereInput[] | QuestionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: QuestionWhereInput
}

export interface FileUpdateDataInput {
  url?: String
  filename?: String
  mimetype?: String
  encoding?: String
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface BusinessWhereUniqueInput {
  id?: ID_Input
}

export interface BusinessUpdateInput {
  name?: String
  url?: String
  img?: FileUpdateOneInput
}

export interface HouseWhereUniqueInput {
  id?: ID_Input
}

export interface FileUpdateInput {
  url?: String
  filename?: String
  mimetype?: String
  encoding?: String
}

export interface AnswerSubscriptionWhereInput {
  AND?: AnswerSubscriptionWhereInput[] | AnswerSubscriptionWhereInput
  OR?: AnswerSubscriptionWhereInput[] | AnswerSubscriptionWhereInput
  NOT?: AnswerSubscriptionWhereInput[] | AnswerSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AnswerWhereInput
}

export interface UserUpdateroleInput {
  set?: Role[] | Role
}

export interface AnswerWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateInput {
  password?: String
  name?: String
  lastLoginAt?: DateTime
  role?: UserUpdateroleInput
}

export interface AnswerUpsertWithWhereUniqueWithoutQuestionInput {
  where: AnswerWhereUniqueInput
  update: AnswerUpdateWithoutQuestionDataInput
  create: AnswerCreateWithoutQuestionInput
}

export interface QuestionCreateWithoutAnswersInput {
  title: String
  content: String
}

export interface AnswerUpdateWithWhereUniqueWithoutQuestionInput {
  where: AnswerWhereUniqueInput
  data: AnswerUpdateWithoutQuestionDataInput
}

export interface QuestionCreateOneWithoutAnswersInput {
  create?: QuestionCreateWithoutAnswersInput
  connect?: QuestionWhereUniqueInput
}

export interface HotelSubscriptionWhereInput {
  AND?: HotelSubscriptionWhereInput[] | HotelSubscriptionWhereInput
  OR?: HotelSubscriptionWhereInput[] | HotelSubscriptionWhereInput
  NOT?: HotelSubscriptionWhereInput[] | HotelSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: HotelWhereInput
}

export interface AnswerCreateInput {
  title: String
  content: String
  author: String
  question?: QuestionCreateOneWithoutAnswersInput
}

export interface FoodWhereInput {
  AND?: FoodWhereInput[] | FoodWhereInput
  OR?: FoodWhereInput[] | FoodWhereInput
  NOT?: FoodWhereInput[] | FoodWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  img?: FileWhereInput
}

export interface AnswerCreateWithoutQuestionInput {
  title: String
  content: String
  author: String
}

export interface AnswerWhereInput {
  AND?: AnswerWhereInput[] | AnswerWhereInput
  OR?: AnswerWhereInput[] | AnswerWhereInput
  NOT?: AnswerWhereInput[] | AnswerWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  author?: String
  author_not?: String
  author_in?: String[] | String
  author_not_in?: String[] | String
  author_lt?: String
  author_lte?: String
  author_gt?: String
  author_gte?: String
  author_contains?: String
  author_not_contains?: String
  author_starts_with?: String
  author_not_starts_with?: String
  author_ends_with?: String
  author_not_ends_with?: String
  question?: QuestionWhereInput
}

export interface AnswerCreateManyWithoutQuestionInput {
  create?: AnswerCreateWithoutQuestionInput[] | AnswerCreateWithoutQuestionInput
  connect?: AnswerWhereUniqueInput[] | AnswerWhereUniqueInput
}

export interface QuestionUpdateOneWithoutAnswersInput {
  create?: QuestionCreateWithoutAnswersInput
  connect?: QuestionWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: QuestionUpdateWithoutAnswersDataInput
  upsert?: QuestionUpsertWithoutAnswersInput
}

export interface QuestionCreateInput {
  title: String
  content: String
  answers?: AnswerCreateManyWithoutQuestionInput
}

export interface HotelWhereUniqueInput {
  id?: ID_Input
}

export interface PostCreateInput {
  title: String
  category: PostCategory
  author: String
  content: String
}

export interface QuestionWhereUniqueInput {
  id?: ID_Input
}

export interface FoodCreateInput {
  name: String
  img?: FileCreateOneInput
}

export interface AnswerUpdateWithoutQuestionDataInput {
  title?: String
  content?: String
  author?: String
}

export interface UserCreateInput {
  password: String
  name: String
  lastLoginAt?: DateTime
  role?: UserCreateroleInput
}

export interface BusinessWhereInput {
  AND?: BusinessWhereInput[] | BusinessWhereInput
  OR?: BusinessWhereInput[] | BusinessWhereInput
  NOT?: BusinessWhereInput[] | BusinessWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  img?: FileWhereInput
}

export interface UserCreateroleInput {
  set?: Role[] | Role
}

export interface QuestionUpsertWithoutAnswersInput {
  update: QuestionUpdateWithoutAnswersDataInput
  create: QuestionCreateWithoutAnswersInput
}

export interface FileCreateInput {
  url: String
  filename: String
  mimetype: String
  encoding: String
}

export interface FileWhereUniqueInput {
  id?: ID_Input
}

export interface HouseCreateManyInput {
  create?: HouseCreateInput[] | HouseCreateInput
  connect?: HouseWhereUniqueInput[] | HouseWhereUniqueInput
}

export interface HotelCreateInput {
  name: String
  address: String
  introduction: String
  score?: Int
  url: String
  houses?: HouseCreateManyInput
  img?: FileCreateOneInput
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface BusinessCreateInput {
  name: String
  url: String
  img: FileCreateOneInput
}

export interface FoodWhereUniqueInput {
  id?: ID_Input
}

export interface QuestionUpdateWithoutAnswersDataInput {
  title?: String
  content?: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface HouseWhereInput {
  AND?: HouseWhereInput[] | HouseWhereInput
  OR?: HouseWhereInput[] | HouseWhereInput
  NOT?: HouseWhereInput[] | HouseWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
}

export interface AnswerUpdateInput {
  title?: String
  content?: String
  author?: String
  question?: QuestionUpdateOneWithoutAnswersInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface AnswerEdge {
  node: Answer
  cursor: String
}

export interface Post extends Node {
  id: ID_Output
  title: String
  category: PostCategory
  author: String
  content: String
  updatedAt: DateTime
  createdAt: DateTime
}

export interface AnswerPreviousValues {
  id: ID_Output
  title: String
  content: String
  updatedAt: DateTime
  createdAt: DateTime
  author: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateAnswer {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface AnswerConnection {
  pageInfo: PageInfo
  edges: AnswerEdge[]
  aggregate: AggregateAnswer
}

/*
 * An edge in a connection.

 */
export interface QuestionEdge {
  node: Question
  cursor: String
}

export interface Food extends Node {
  id: ID_Output
  name: String
  img?: File
  createdAt: DateTime
}

export interface AggregatePost {
  count: Int
}

export interface House extends Node {
  id: ID_Output
  name: String
  price: Float
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface FoodEdge {
  node: Food
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  password: String
  name: String
  role?: Role[]
  createdAt: DateTime
  lastLoginAt?: DateTime
}

export interface AggregateHouse {
  count: Int
}

export interface Hotel extends Node {
  id: ID_Output
  name: String
  address: String
  introduction: String
  houses?: House[]
  score?: Int
  img?: File
  url: String
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface HouseConnection {
  pageInfo: PageInfo
  edges: HouseEdge[]
  aggregate: AggregateHouse
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

/*
 * An edge in a connection.

 */
export interface HotelEdge {
  node: Hotel
  cursor: String
}

export interface FilePreviousValues {
  id: ID_Output
  url: String
  filename: String
  mimetype: String
  encoding: String
  createdAt: DateTime
}

export interface AggregateBusiness {
  count: Int
}

export interface AggregateHotel {
  count: Int
}

export interface PostPreviousValues {
  id: ID_Output
  title: String
  category: PostCategory
  author: String
  content: String
  updatedAt: DateTime
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface HotelConnection {
  pageInfo: PageInfo
  edges: HotelEdge[]
  aggregate: AggregateHotel
}

/*
 * A connection to a list of items.

 */
export interface BusinessConnection {
  pageInfo: PageInfo
  edges: BusinessEdge[]
  aggregate: AggregateBusiness
}

/*
 * An edge in a connection.

 */
export interface BusinessEdge {
  node: Business
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

export interface AggregateFile {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface BusinessSubscriptionPayload {
  mutation: MutationType
  node?: Business
  updatedFields?: String[]
  previousValues?: BusinessPreviousValues
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface BusinessPreviousValues {
  id: ID_Output
  name: String
  url: String
  createdAt: DateTime
}

export interface Answer extends Node {
  id: ID_Output
  question?: Question
  title: String
  content: String
  updatedAt: DateTime
  createdAt: DateTime
  author: String
}

export interface Business extends Node {
  id: ID_Output
  name: String
  url: String
  img: File
  createdAt: DateTime
}

export interface QuestionPreviousValues {
  id: ID_Output
  title: String
  content: String
  updatedAt: DateTime
  createdAt: DateTime
}

export interface HotelSubscriptionPayload {
  mutation: MutationType
  node?: Hotel
  updatedFields?: String[]
  previousValues?: HotelPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface QuestionConnection {
  pageInfo: PageInfo
  edges: QuestionEdge[]
  aggregate: AggregateQuestion
}

export interface HotelPreviousValues {
  id: ID_Output
  name: String
  address: String
  introduction: String
  score?: Int
  url: String
  createdAt: DateTime
}

export interface AggregateFood {
  count: Int
}

export interface File extends Node {
  id: ID_Output
  url: String
  filename: String
  mimetype: String
  encoding: String
  createdAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface HouseEdge {
  node: House
  cursor: String
}

export interface HouseSubscriptionPayload {
  mutation: MutationType
  node?: House
  updatedFields?: String[]
  previousValues?: HousePreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface HousePreviousValues {
  id: ID_Output
  name: String
  price: Float
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  password: String
  name: String
  role?: Role[]
  createdAt: DateTime
  lastLoginAt?: DateTime
}

export interface AggregateQuestion {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface FoodConnection {
  pageInfo: PageInfo
  edges: FoodEdge[]
  aggregate: AggregateFood
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface QuestionSubscriptionPayload {
  mutation: MutationType
  node?: Question
  updatedFields?: String[]
  previousValues?: QuestionPreviousValues
}

export interface FoodPreviousValues {
  id: ID_Output
  name: String
  createdAt: DateTime
}

export interface FoodSubscriptionPayload {
  mutation: MutationType
  node?: Food
  updatedFields?: String[]
  previousValues?: FoodPreviousValues
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface Question extends Node {
  id: ID_Output
  title: String
  content: String
  updatedAt: DateTime
  createdAt: DateTime
  answers?: Answer[]
}

export interface AnswerSubscriptionPayload {
  mutation: MutationType
  node?: Answer
  updatedFields?: String[]
  previousValues?: AnswerPreviousValues
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export type DateTime = Date | string