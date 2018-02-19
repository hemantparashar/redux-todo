import React from 'react';
import FilterLink from '../containers/FilterLink';

let SHOW_ALL       = "SHOW_ALL";
let SHOW_ACTIVE    = "SHOW_ACTIVE";
let SHOW_COMPLETED = "SHOW_COMPLETED";

const Footer = ({onClick})=>(
    <p>
      Show :
      {"  "}
      <FilterLink filter={SHOW_ALL}>All</FilterLink>
      {"  "}
      <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
      {"  "}
      <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
    </p>
);

export default Footer;
