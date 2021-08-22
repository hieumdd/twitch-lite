import React from 'react';
import PropTypes from 'prop-types';
import {
  Heading,
  Stack,
  FormControl,
  InputGroup,
  Input,
  InputLeftAddon,
} from '@chakra-ui/react';

const Header = ({ channel, onChange }) => (
  <Stack
    width="100%"
    direction="row"
    justify="center"
    align="center"
    spacing="1rem"
  >
    <Heading as="h1" size="lg" flex="7">
      Twitch Lite
    </Heading>
    <Stack as="form" direction="row" spacing="1rem" flex="3" bgColor="white">
      <FormControl isRequired>
        <InputGroup>
          <InputLeftAddon children="https://twitch.tv/" />
          <Input type="text" value={channel} onChange={onChange} />
        </InputGroup>
      </FormControl>
    </Stack>
  </Stack>
);

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
  channel: PropTypes.string.isRequired,
};

export default Header;
