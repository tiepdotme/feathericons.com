import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'grid-styled';
import { space, borderWidth, borderColor } from 'styled-system';

import withSystem from '../utils/with-system';
import version from '../utils/version';
import Text from './Text';
import Container from './Container';
import IconSearch from './IconSearch';
import Link from './Link';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function Header({ className }) {
  return (
    <Box className={className}>
      <Container>
        <Link to="/" fontSize={4}>
          Feather <Text>{version}</Text>
        </Link>
        <IconSearch mt={4} />
      </Container>
    </Box>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withSystem(Header, [space, borderWidth, borderColor], {
  pt: 4,
  pb: 5,
  borderBottom: true,
  borderWidth: 1,
  borderColor: 'gray.2',
});
