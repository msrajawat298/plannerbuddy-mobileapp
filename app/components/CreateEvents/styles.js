import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';

const getStyles = () => {
  const theme = useTheme();
  const screen = Dimensions.get('window');
  const Height = screen.height;
  return StyleSheet.create({
    actionsContainer: {
      //   marginVertical: 10,
    },
    container: {
      backgroundColor: theme.colors.primaryContainer,
      flex: 1,
    },
    contentContainer: {
      flex: 1,
    },
    eventCard: {
      margin: 5,
    },
    eventTitle: {
      fontFamily: 'Arial',
      fontWeight: 'bold',
    },
    input: {
      marginVertical: 2,
      multiline: true,
      textAlignVertical: 'top',
    },
    locationContainer: {
      flexDirection: 'row',
      gap: 5,
      margin: 15,
    },
    locationImage: {
      marginLeft: '5%',
    },
    locationText: {
      position: 'relative',
      width: '80%',
    },
  });
};
export default getStyles;
