import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const getStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    actionsContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    addButton: {
      marginEnd: 'auto',
    },
    allButtons: {
      flexDirection: 'row',
    },
    closeButton: {
      alignSelf: 'center',
    },
    container: {
      backgroundColor: theme.colors.primaryContainer,
      flex: 1,
    },
    contentContainer: {
      flex: 1,
    },
    eventCard: {
      backgroundColor: theme.colors.background,
      margin: 8,
    },
    eventCartSubtitle: { marginLeft: -8 },
    eventTitle: {
      fontWeight: 'bold',
    },
    input: {
      multiline: true,
      textAlignVertical: 'top',
    },
    locationContainer: {
      flexDirection: 'row',
      gap: 5,
      marginBottom: 15,
      marginLeft: 50,
      marginTop: 'auto',
    },
    locationImage: {
      marginLeft: '5%',
    },
    locationText: {
      position: 'relative',
      width: '80%',
    },
    paddedContainer: { marginBottom: 30, paddingHorizontal: 30 },
  });
};
export default getStyles;
