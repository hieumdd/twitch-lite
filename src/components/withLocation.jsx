/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable implicit-arrow-linebreak */

import React from 'react';
import { Location } from '@reach/router';
import queryString from 'query-string';

const withLocation = (WrappedComponent) => (props) =>
  (
    <Location>
      {({ location, navigate }) => (
        <WrappedComponent
          {...props}
          location={location}
          navigate={navigate}
          search={location.search ? queryString.parse(location.search) : {}}
        />
      )}
    </Location>
  );

export default withLocation;
