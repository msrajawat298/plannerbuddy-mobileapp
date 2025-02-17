import React, { lazy, useRef, Suspense } from 'react';
import { View, Dimensions } from 'react-native';
import { Button, ActivityIndicator, useTheme, Text } from 'react-native-paper';
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
  const theme = useTheme();
  const refStandard = useRef();
  const styles = { ...getStyles(), ...commonStyles() };
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.guest.showModal);
  const openDialog = () => dispatch(guestActions.openDialog());
  const screenHeight = Dimensions.get('window').height;
  const sheetHeight = screenHeight * 0.7; // 70% of screen height
  const addGuestOptions = [
    {
      icon: 'account-multiple-plus-outline',
      label: 'Add Manually',
      style: { backgroundColor: theme.colors.background },
      onPress: openDialog,
    },
    {
      icon: 'account-sync-outline',
      label: 'Sync from Contacts',
      style: { backgroundColor: theme.colors.background },
      onPress: () => refStandard.current.open(),
    },
  ];

  return (
    <VTFAB actionsButton={addGuestOptions} iconOpen="account-plus">
      {showModal && <AddGuestModal styles={styles} />}
      <View style={styles.mainContainer}>
        <GuestListsWithErrorBoundary selectMode={false} />
      </View>
      <RBSheet
        ref={refStandard}
        height={sheetHeight}
        closeOnPressMask={false}
        customStyles={{
          container: {
            backgroundColor: theme.colors.primaryContainer,
          },
        }}
      >
        <View style={styles.closeButton}>
          <Button onPress={() => refStandard.current.close()}>
            <Text>Close</Text>
          </Button>
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
