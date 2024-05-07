import React, { lazy, useRef, Suspense } from 'react';
import { View } from 'react-native';
import { Button, ActivityIndicator } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import GuestLists from '../components/GuestLists/GuestLists';
import VTFAB from '../components/VTFAB/VTFAB';
import commonStyles from '../styles/common.style';
import AddGuestModal from '../components/AddGuest/AddGuest';
import getStyles from '../styles/settings.style';
import { guestActions } from '../store/GuestContext';
import WithErrorBoundary from '../components/ErrorBoundary/WithErrorBoundary';

const FetchContactDetails = lazy(() => import('../components/Guests/FetchContactDetails'));

const GuestListsWithErrorBoundary = WithErrorBoundary(GuestLists);
const FetchContactDetailsWithErrorBoundary = WithErrorBoundary(FetchContactDetails);

const ViewGuests = () => {
  const refStandard = useRef();
  const styles = { ...getStyles(), ...commonStyles() };
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.guest.showModal);
  const openDialog = () => dispatch(guestActions.openDialog());
  const addGuestOptions = [
    {
      icon: 'account-multiple-plus-outline',
      label: 'Add Manually',
      onPress: openDialog,
    },
    {
      icon: 'account-sync-outline',
      label: 'Sync from Contacts',
      onPress: () => refStandard.current.open(),
    },
  ];

  return (
    <VTFAB actionsButton={addGuestOptions}>
      {showModal && <AddGuestModal styles={styles} />}
      <View style={styles.flex1}>
        <GuestListsWithErrorBoundary selectMode={false} />
      </View>
      <RBSheet ref={refStandard} height={700}>
        <View style={styles.closeButton}>
          <Button onPress={() => refStandard.current.close()}>Close</Button>
        </View>
        <Suspense
          fallback={
            <View style={styles.centerContent}>
              <ActivityIndicator animating />
            </View>
          }
        >
          <FetchContactDetailsWithErrorBoundary />
        </Suspense>
      </RBSheet>
    </VTFAB>
  );
};

export default ViewGuests;
