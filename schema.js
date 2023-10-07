import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type CacheChat @key(fields: "id") {
    id: ID!
    location: String!
    personality: String!
  }

  extend type Query {
    getCacheChat(location: String!, personality: String!): String!
  }
`;

export default typeDefs;
