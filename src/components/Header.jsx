import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Flex, Heading, IconButton, Link, Tooltip } from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const { githubRepo } = useStaticQuery(
    graphql`
      query github {
        site {
          siteMetadata {
            githubRepo
          }
        }
      }
    `,
  ).site.siteMetadata;

  return (
    <Flex w="100%" justify="space-between" align="center">
      <Heading as="h1" textColor="white" size="lg">
        Twitch Lite
      </Heading>
      <Tooltip label="Source Code">
        <IconButton
          as={Link}
          icon={<FaGithub />}
          variant="solid"
          size="md"
          href={githubRepo}
        />
      </Tooltip>
    </Flex>
  );
};

export default Header;
