import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-paper';
import { PLACEHOLDER_IMAGE } from '../../constants/constants';

const RenderAvatar = ({ imageUri = PLACEHOLDER_IMAGE, ...props }) => (
  <Avatar.Image size={50} {...props} source={{ uri: imageUri }} />
);

RenderAvatar.propTypes = {
  // eslint-disable-next-line react/require-default-props
  imageUri: PropTypes.string,
};

export default RenderAvatar;
