import gql from "graphql-tag";

const typeDefs = gql`
    type Query {
      greet:String
    }
`
export default typeDefs
