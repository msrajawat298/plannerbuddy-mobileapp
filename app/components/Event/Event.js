import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import {
  Avatar,
  Card,
  IconButton,
  Button,
  Text,
  Menu,
  Divider,
  PaperProvider,
} from 'react-native-paper';
import { useEventContext } from '../../store/EventContext';
import RBSheet from 'react-native-raw-bottom-sheet';
import GuestLists from '../GuestLists/GuestLists';
import { ScrollView } from 'react-native-virtualized-view';
import FetchContactDetails from '../Guests/FetchContactDetails';

export default function EventCard({ styles, event }) {
  const refStandard = useRef();
  const [visible, setVisible] = useState(false);
  const [openSelectGuests, setOpenSelectGuests] = useState(false);
  const icon = event.name.toLowerCase().includes('birth') ? 'cake' : 'party-popper';
  const { events, setMode, openDialog, setEditIndex, deleteEvent, addGuestsToEvent } =
    useEventContext();
  console.log(events);
  const handleEditEvent = () => {
    setMode('edit');
    setEditIndex(event.id);
    openDialog();
  };

  const handleOpenSelectGuests = () => {
    setMode('getGuests');
    setEditIndex(event.id);
    setOpenSelectGuests(true);
    refStandard.current.open();
  };

  const handleSelectedGuests = () => {
    addGuestsToEvent();
  };

  return (
    <>
      <RBSheet ref={refStandard} height={700}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button style={styles.button} onPress={handleSelectedGuests}>
            Select Guests
          </Button>
          <Button style={styles.button} onPress={() => refStandard.current.close()}>
            Close
          </Button>
        </View>

        <ScrollView>
          {/* <FetchContactDetails /> */}
          <GuestLists />
        </ScrollView>
      </RBSheet>

      <Card style={styles.eventCard}>
        <Card.Title
          title={event.name}
          titleNumberOfLines={2}
          titleStyle={styles.eventTitle}
          subtitle={event.date}
          left={(props) => <Avatar.Icon {...props} icon={icon} />}
          right={(props) => (
            <IconButton
              {...props}
              icon="dots-vertical"
              onPress={() => setVisible((state) => !state)}
            />
          )}
        />
        <View style={styles.locationContainer}>
          <Avatar.Icon style={styles.locationImage} size={18} icon="map-marker" />
          <Text style={styles.locationText}>{event.address}</Text>
        </View>
        {visible && (
          <Card.Actions style={styles.actionsContainer}>
            <Button style={{ marginRight: 'auto' }} onPress={handleOpenSelectGuests}>
              Add Guests
            </Button>
            <Button onPress={() => deleteEvent(event.id)}>Delete</Button>
            <Button onPress={handleEditEvent}>Edit</Button>
          </Card.Actions>
        )}
      </Card>
    </>
  );
}
