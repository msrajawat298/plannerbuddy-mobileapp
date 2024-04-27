import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-paper';
import AddEventModal from '../../components/CreateEvents/AddEvent';
import getStyles from '../../components/CreateEvents/styles';
import EventCard from '../../components/Event/Event';
import { useEventContext } from '../../store/EventContext';

const Events = () => {
  const styles = getStyles();
  const { events, showModal, openDialog } = useEventContext();
  return (
    <>
      {showModal && <AddEventModal />}
      <ScrollView>
        {events &&
          events.map((event, idx) => <EventCard key={idx} styles={styles} event={event} />)}
      </ScrollView>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Button
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            bottom: 15,
            right: 15,
          }}
          icon="calendar-plus"
          mode="elevated"
          onPress={openDialog}
        >
          Create Event
        </Button>
      </View>
    </>
  );
};

export default Events;
