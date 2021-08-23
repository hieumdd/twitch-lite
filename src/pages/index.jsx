import React, { useState, useEffect } from 'react';

import { Center, Wrap, WrapItem } from '@chakra-ui/react';

import Header from '../components/Header';
import TwitchChannel from '../components/TwitchChannel';
import TwitchPlayer from '../components/TwitchPlayer';
import TwitchChat from '../components/TwitchChat';

const DEFAULT_CHANNEL = 'monstercat';

const App = () => {
  const [channel, setChannel] = useState(
    localStorage.getItem('channel') ?? DEFAULT_CHANNEL,
  );
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    const channelToSet = event.target.value ?? DEFAULT_CHANNEL;
    setLoading(true);
    setChannel(channelToSet);
  };

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    localStorage.setItem('channel', channel);
  }, [channel]);

  return (
    <Center w="100vw" h="100vh">
      <Center w="90%" h="90%">
        <Wrap className="shadow" p="1rem" w="100%" spacing="1rem">
          <WrapItem flex="1 0 calc(70% - 1rem)">
            <Header />
          </WrapItem>
          <WrapItem className="shadow" flex="1 0 calc(30% - 1rem)">
            <TwitchChannel channel={channel} onChange={handleChange} />
          </WrapItem>
          <WrapItem className="shadow" flex="1 0 calc(70% - 1rem)">
            <TwitchPlayer
              loading={loading}
              handleLoading={handleLoading}
              channel={channel}
            />
          </WrapItem>
          <WrapItem className="shadow" flex="1 0 calc(30% - 1rem)">
            <TwitchChat
              loading={loading}
              handleLoading={handleLoading}
              channel={channel}
            />
          </WrapItem>
        </Wrap>
      </Center>
    </Center>
  );
};

export default App;
