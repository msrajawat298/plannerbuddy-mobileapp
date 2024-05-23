import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';

const getStyles = () => {
  const theme = useTheme();
  const screen = Dimensions.get('window');
  const Height = screen.height;
  return StyleSheet.create({
    bottomSheet: {
      backgroundColor: theme.colors.primaryContainer,
    },
    container: {
      backgroundColor: theme.colors.primary,
      flex: 1,
    },
    content: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      padding: 20,
    },
    image: {
      alignSelf: 'center',
      height: Height * 0.3,
    },
  });
};
export default getStyles;
