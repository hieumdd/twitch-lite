import React from 'react';
import PropTypes from 'prop-types';
import { AspectRatio, Flex } from '@chakra-ui/react';

import queryString from 'query-string';

const TwitchPlayer = ({ channel }) => {
  const src = queryString.stringifyUrl({
    url: 'https://player.twitch.tv/',
    query: {
      volume: 0.3,
      channel,
      autoplay: false,
      parent: process.env.GATSBY_PUBLIC_URL,
    },
  });

  return (
    <AspectRatio as={Flex} w="100%" h="100%" ratio={16 / 9}>
      <iframe
        width="100%"
        height="100%"
        title="Twitch Player"
        allowFullScreen
        src={src}
      />
    </AspectRatio>
  );
};

TwitchPlayer.propTypes = {
  channel: PropTypes.string.isRequired,
};

export default TwitchPlayer;
