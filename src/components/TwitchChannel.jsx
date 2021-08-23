import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  FormControl,
  InputGroup,
  Input,
  InputLeftAddon,
  InputRightElement,
  Kbd,
} from '@chakra-ui/react';

const TwitchChannel = ({ term, onSubmit, onChange }) => (
  <Flex as="form" flex="3" onSubmit={onSubmit}>
    <FormControl isRequired>
      <InputGroup as={Flex} justify="center">
        <InputLeftAddon children="https://twitch.tv/" textColor="gray.800" />
        <Input
          type="text"
          bgColor="white"
          textColor="gray.800"
          value={term}
          onChange={onChange}
        />
        <InputRightElement mr="1rem" children={<Kbd>enter</Kbd>} />
      </InputGroup>
    </FormControl>
  </Flex>
);

TwitchChannel.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TwitchChannel;
