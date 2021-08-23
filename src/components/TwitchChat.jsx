import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/react';

import queryString from 'query-string';

const TwitchChat = ({ channel }) => {
  const src = queryString.stringifyUrl({
    url: `https://www.twitch.tv/embed/${channel}/chat`,
    query: {
      parent: process.env.GATSBY_PUBLIC_URL,
    },
  });

  return (
    <Flex w="100%" h="100%">
      <iframe width="100%" height="100%" title="Twitch Chat" src={src} />
    </Flex>
  );
};

TwitchChat.propTypes = {
  channel: PropTypes.string.isRequired,
};

export default TwitchChat;
