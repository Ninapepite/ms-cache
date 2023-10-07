import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    getRequestResponse(location: String!, personality: String!): String!
  }

  # Pour la fédération, nous marquons notre type principal (par exemple RequestResponse, s'il était présent) avec @key 
  # et indiquons quel champ est le champ clé.
  # Dans cet exemple, je vais supposer que vous auriez un type RequestResponse avec un champ 'id' comme clé.
  # type RequestResponse @key(fields: "id") {
  #   id: ID!
  #   location: String
  #   personality: String
  #   response: String
  # }

  # Ces types et champs supplémentaires sont nécessaires pour configurer la fédération
  extend type Query {
    _service: _Service!
  }

  type _Service {
    sdl: String
  }
`;

export default typeDefs;
