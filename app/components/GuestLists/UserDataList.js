import React from 'react';
import { List, Avatar } from 'react-native-paper';
import PropTypes from 'prop-types';
import { AvatarText } from '../../utils/utils';

const toggleContactSelection = (setSelectedContacts, contactId) => {
  setSelectedContacts((prevSelectedContacts) => {
    if (prevSelectedContacts.includes(contactId)) {
      return prevSelectedContacts.filter((id) => id !== contactId);
    }
    return [...prevSelectedContacts, contactId];
  });
};

const selector = (selectedContacts, contactId) =>
  selectedContacts?.includes(contactId) ? <Avatar.Icon size={25} icon="check" /> : '';

const UserDataList = React.memo(
  ({ userData, selectedContacts, setSelectedContacts, selectMode }) => (
    <List.Item
      title={`${userData?.firstName} ${userData?.lastName}`}
      description={`Contact : ${userData?.phone} `}
      onPress={() => toggleContactSelection(setSelectedContacts, userData.id)}
      left={(props) =>
        AvatarText({
          ...props,
          size: 45,
          label: (userData?.firstName || '')[0],
          labelStyle: { color: 'white' },
        })
      }
      right={() => (!selectMode ? '' : selector(selectedContacts, userData.id))}
    />
  ),
);
UserDataList.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    phone: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  selectedContacts: PropTypes.arrayOf(PropTypes.number).isRequired,
  setSelectedContacts: PropTypes.func.isRequired,
  selectMode: PropTypes.bool.isRequired,
};

export default UserDataList;
