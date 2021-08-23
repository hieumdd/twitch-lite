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
        <InputLeftAddon children="https://twitch.tv/" />
        <Input type="text" value={channel} onChange={onChange} />
      </InputGroup>
    </FormControl>
  </Flex>
);

TwitchChannel.propTypes = {
  onChange: PropTypes.func.isRequired,
  channel: PropTypes.string.isRequired,
};

export default TwitchChannel;
