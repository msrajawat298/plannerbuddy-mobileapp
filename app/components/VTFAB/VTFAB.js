import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { FAB, Portal } from 'react-native-paper';
import { SETTING_ACTIONS } from '../../utils/utils';
import { useAuth } from '../../store/AuthContext';

const VTFAB = ({ children, actionsButton }) => {
  const { onLogout } = useAuth();
  const navigation = useNavigation();
  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const defaultOptions = [
    { icon: 'logout', label: 'Logout', onPress: () => onLogout() },
    ...SETTING_ACTIONS(navigation),
  ];

  const actions = actionsButton.length ? actionsButton : defaultOptions;

  return (
    <Portal.Host>
      {children}
      <FAB.Group
        open={open}
        visible
        icon={open ? 'close' : 'plus'}
        actions={actions}
        onStateChange={onStateChange}
      />
    </Portal.Host>
  );
};
VTFAB.defaultProps = {
  actionsButton: [],
};

VTFAB.propTypes = {
  children: PropTypes.node.isRequired,
  actionsButton: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string,
      onPress: PropTypes.func.isRequired,
    }),
  ),
};

export default VTFAB;
