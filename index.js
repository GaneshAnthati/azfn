
const ncSchema = require('./schema');
const{graphql} = require('graphql');
const graphqlHTTP = require('express-graphql');
module.exports = function (context, req) {
    //context.log(process.env.NODE_ENV);
    
    graphql(ncSchema, req.body).then(result => {
        res = result;
  console.log(result);
});
   
    context.done(null, res);
};