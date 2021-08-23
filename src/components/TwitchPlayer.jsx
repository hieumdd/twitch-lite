import React from 'react';
import PropTypes from 'prop-types';
import { AspectRatio, Flex, Skeleton } from '@chakra-ui/react';

import queryString from 'query-string';

const TwitchPlayer = ({ loading, handleLoading, channel }) => {
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
      <Skeleton isLoaded={!loading} w="100%" h="100%">
        <iframe
          width="100%"
          height="100%"
          title="Twitch Player"
          allowFullScreen
          src={src}
          onLoad={handleLoading}
        />
      </Skeleton>
    </AspectRatio>
  );
};

TwitchPlayer.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleLoading: PropTypes.func.isRequired,
  channel: PropTypes.string.isRequired,
};

export default TwitchPlayer;
