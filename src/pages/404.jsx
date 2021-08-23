import React from 'react';
import { Link } from 'gatsby';

import { Flex, Heading, Icon, LinkOverlay, LinkBox } from '@chakra-ui/react';

import { FaHome } from 'react-icons/fa';

import Layout from '../components/Layout';

const NotFound = () => (
  <Layout title="404">
    <Flex as={LinkBox} direction="column" justify="center" align="center">
      <Icon as={FaHome} color="white" boxSize="8rem" />
      <LinkOverlay as={Link} to="/">
        <Heading as="h1" textColor="white">
          404
        </Heading>
      </LinkOverlay>
    </Flex>
  </Layout>
);

export default NotFound;
