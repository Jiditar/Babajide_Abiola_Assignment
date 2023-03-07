/*
the querystring module provides functions for working with query strings. 
Query strings are commonly used in URLs to pass data to a server or web application.
*/

querystring =require('querystring')

const queryString = 'foo=bar&baz=qux';
const params = querystring.parse(queryString);
console.log(params);

const param = { foo: 'bar', baz: 'qux' };
const QueryString = querystring.stringify(params);
console.log(QueryString);

