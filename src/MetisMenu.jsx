/*
 * src/MetisMenu.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 23.03.2016
 */

import React, { PropTypes } from 'react';
import Container from './Container';

/**
 * Main container of MetisMenu
 *
 * If props are not given, it sets default props for first depth container
 * @constructor
 * @extends React.Component
 *
 * Props come from top component
 * @prop {string} props.iconClassPrefix - Prefix for all icon's style class name
 * @prop {string} props.iconLevelDown - Icon name for state of collapsed containers
 * @prop {string} props.iconLevelUp - Icon name for state of opened containers
 * @prop {Object[]} props.content - Recursive menu stracture
 */
const MetisMenu = (props) => (
  <div className="metismenu">
    <Container
      iconClassPrefix={props.iconClassPrefix || 'fa fa-'}
      iconLevelDown={props.iconLevelDown || 'caret-left'}
      iconLevelUp={props.iconLevelUp || 'caret-down'}
      content={props.content || []}
    />
  </div>
);

MetisMenu.propTypes = {
  iconClassPrefix: PropTypes.string,
  iconLevelDown: PropTypes.string,
  iconLevelUp: PropTypes.string,
  content: PropTypes.array,
};

export default MetisMenu;
