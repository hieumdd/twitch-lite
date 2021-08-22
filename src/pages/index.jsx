import React, { useState } from 'react';

import { Center, Wrap, WrapItem } from '@chakra-ui/react';

import Header from '../components/Header';
import TwitchPlayer from '../components/TwitchPlayer';
import TwitchChat from '../components/TwitchChat';

const DEFAULT_CHANNEL = 'monstercat';

const App = () => {
  const [channel, setChannel] = useState(DEFAULT_CHANNEL);

  const handleChange = (event) => {
    if (event.target.value) {
      setChannel(event.target.value);
    } else {
      setChannel(DEFAULT_CHANNEL);
    }
  };

  return (
    <Center w="100vw" h="100vh">
      <Center w="90%" h="90%">
        <Wrap className="shadow" p="1rem" w="100%" spacing="1rem">
          <WrapItem flex="1 0 calc(100% - 1rem)">
            <Header channel={channel} onChange={handleChange} />
          </WrapItem>
          <WrapItem className="shadow" flex="1 0 calc(70% - 1rem)">
            <TwitchPlayer channel={channel} />
          </WrapItem>
          <WrapItem className="shadow" flex="1 0 calc(30% - 1rem)">
            <TwitchChat channel={channel} />
          </WrapItem>
        </Wrap>
      </Center>
    </Center>
  );
};

export default App;
