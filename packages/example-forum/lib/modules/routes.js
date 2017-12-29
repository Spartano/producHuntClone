import { addRoute } from 'meteor/vulcan:core';

addRoute([
  {name:'posts.daily',     path: '/',                    componentName: 'PostsDaily'}, // index route
  {name:'posts.list',     path: '/posts',                    componentName: 'PostsHome'}, // index route
  {name:'contact.test',     path: '/contact',                    componentName: 'ContactTest'}, // index route
 
  {name:'posts.dailyTest',    path:'daily',                 componentName: 'PostsDaily'},
  {name:'posts.single',   path:'posts/:_id(/:slug)',    componentName: 'PostsSingle'},
  {name:'users.single',   path:'users/:slug',           componentName: 'UsersSingle'},
  {name:'users.account',  path:'account',               componentName: 'UsersAccount'},
  {name:'users.edit',     path:'users/:slug/edit',      componentName: 'UsersAccount'},
]);
