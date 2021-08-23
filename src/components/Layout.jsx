import React from 'react';
import PropTypes from 'prop-types';

import { Center } from '@chakra-ui/react';

import SEO from './SEO';

const Layout = ({ title, children }) => (
  <Center
    className="container"
    w="100vw"
    h="100vh"
    bgColor="#6441a5"
    bgGradient="radial-gradient(#2a0845, #6441A5)"
  >
    <SEO title={title} />
    <Center w="90%" h="90%">
      {children}
    </Center>
  </Center>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
