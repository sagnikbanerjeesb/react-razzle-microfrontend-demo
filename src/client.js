import React from 'react';
import { hydrate } from 'react-dom';
import Header from "./header/Header";
import Home from "./home/Home";

const elementsToHydrate = [
  {
    name: 'header',
    component: Header,
    props: {}
  },
  {
    name: 'home',
    component: Home,
    props: {}
  }
];

elementsToHydrate.every((value, index, array) => {
  let element = document.getElementById(value.name);
  if (element) {
    hydrate(
        <value.component {...value.props}/>,
        element
    );
  }
})


if (module.hot) {
  module.hot.accept();
}
