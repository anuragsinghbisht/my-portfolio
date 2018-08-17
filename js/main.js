import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
      'title': 'Portfolio Boilerplate 1',
      'href': "https://example.com",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      'image': {
        'desc': 'A Serverless Portfoliocp',
        'src': 'images/example1.png',
        'comment': ''
      }
    },
    {
      'title': 'Portfolio Boilerplate 2',
      'href': "https://example.com",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      'image': {
        'desc': 'example screenshot of a project involving chemistry',
        'src': 'images/example2.png',
        'comment': ''
      }
    },
    {
      'title': 'Portfolio Boilerplate 3',
      'href': "https://example.com",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      'image': {
        'desc': 'example screenshot of a project involving cats',
        'src': 'images/example3.png',
        'comment': ''
      }
    }
];

ReactDOM.render(
  <ExampleWork works={myWork}/>,
  document.getElementById('example-work')
);
