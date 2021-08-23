import React from 'react';
import PropTypes from 'prop-types';

import { Center } from '@chakra-ui/react';

import SEO from './SEO';

const Layout = ({ title, children }) => (
  <Center w="100vw" h="100vh">
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
