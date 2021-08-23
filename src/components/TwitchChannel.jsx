import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  FormControl,
  InputGroup,
  Input,
  InputLeftAddon,
} from '@chakra-ui/react';

const TwitchChannel = ({ channel, onChange }) => (
  <Flex as="form" flex="3">
    <FormControl isRequired>
      <InputGroup>
        <InputLeftAddon children="https://twitch.tv/" textColor="gray.800" />
        <Input
          type="text"
          bgColor="white"
          textColor="gray.800"
          value={channel}
          onChange={onChange}
        />
      </InputGroup>
    </FormControl>
  </Flex>
);

TwitchChannel.propTypes = {
  onChange: PropTypes.func.isRequired,
  channel: PropTypes.string.isRequired,
};

export default TwitchChannel;
