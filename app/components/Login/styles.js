import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const getStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    containerStyle: {
      flex: 1,
      margin: 20,
    },
    forgetPasswordButton: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 'auto',
      paddingVertical: 10,
    },
    forgotPasswordContainer: {
      marginVertical: 20,
    },
    gapStyle: { flex: 1, gap: 4, marginTop: 20 },
    image: {
      height: 100,
      resizeMode: 'contain',
      width: '100%',
    },
    loginButton: {
      backgroundColor: theme.colors.secondaryContainer,
      borderRadius: 8,
      marginTop: 10,
      paddingHorizontal: 'auto',
      paddingVertical: 10,
    },
    outlineButton: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      borderWidth: 1,
      marginVertical: 8,
    },
    positionCenter: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
    privacyPolicy: { color: theme.colors.onTertiaryContainer, fontWeight: 'medium' },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    rowSpaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textAlignCenter: {
      textAlign: 'center',
      width: '100%',
    },
    textContainer: {
      marginBottom: 20,
    },
  });
};
export default getStyles;
