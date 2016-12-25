const{
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    hello:
    {
      type: GraphQLString,
      resolve: () => 'world'
    },
     bye:
    {
      type: GraphQLString,
      resolve: () => 'bye'
    },
     good:
    {
      type: GraphQLString,
      resolve: () => 'boy'
    }
  }
});
const ncSchema = new GraphQLSchema({
  query: RootQueryType
});

module.exports=ncSchema;
