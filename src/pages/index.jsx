import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';

import queryString from 'query-string';

import { Wrap, WrapItem } from '@chakra-ui/react';

import withLocation from '../components/withLocation';
import Layout from '../components/Layout';
import Header from '../components/Header';
import TwitchChannel from '../components/TwitchChannel';
import TwitchPlayer from '../components/TwitchPlayer';
import TwitchChat from '../components/TwitchChat';

const DEFAULT_CHANNEL = 'monstercat';

const App = ({ search }) => {
  // const [channel, setChannel] = useState(
  //   search.channel ||
  //     (typeof window !== 'undefined' &&
  //       window.localStorage.getItem('channel')) ||
  //     DEFAULT_CHANNEL,
  // );
  const [term, setTerm] = useState(
    search.channel ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('channel')) ||
      DEFAULT_CHANNEL,
  );
  const [channel, setChannel] = useState(term);
  const [loading, setIsLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setChannel(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.localStorage.setItem('channel', channel);
    navigate(queryString.stringifyUrl({ url: '/', query: { channel } }));
    setIsLoading(true);
  }, [channel]);

  return (
    <Layout title="App">
      <Wrap
        className="shadow"
        p="1rem"
        w="100%"
        spacing="1rem"
        bgColor="rgba( 255, 255, 255, 0.4 )"
        borderWidth="0.05rem"
        borderColor="white"
        style={{
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
        }}
      >
        <WrapItem flex="1 0 calc(70% - 1rem)">
          <Header />
        </WrapItem>
        <WrapItem
          className="shadow"
          flex={{ base: '1 0 calc(100% - 1rem)', md: '1 0 calc(30% - 1rem)' }}
        >
          <TwitchChannel
            term={term}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
        </WrapItem>
        <WrapItem
          className="shadow"
          flex={{ base: '1 0 calc(100% - 1rem)', md: '1 0 calc(70% - 1rem)' }}
        >
          <TwitchPlayer
            loading={loading}
            handleLoading={handleLoading}
            channel={channel}
          />
        </WrapItem>
        <WrapItem
          className="shadow"
          flex={{ base: '1 0 calc(100% - 1rem)', md: '1 0 calc(30% - 1rem)' }}
        >
          <TwitchChat
            loading={loading}
            handleLoading={handleLoading}
            channel={channel}
          />
        </WrapItem>
      </Wrap>
    </Layout>
  );
};

App.propTypes = {
  search: PropTypes.shape({ channel: PropTypes.string }),
};

App.defaultProps = {
  search: { channel: DEFAULT_CHANNEL },
};

export default withLocation(App);
