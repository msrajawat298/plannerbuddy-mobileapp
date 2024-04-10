import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const getStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    facebookIcon: {
      marginRight: 10,
    },
    facebookLoginButton: {
      alignItems: 'center',
      backgroundColor: '#4267b2',
      borderRadius: 500,
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    facebookLoginText: {
      color: '#fff',
    },
    forgotPasswordContainer: {
      alignItems: 'flex-end',
      marginBottom: 20,
    },
    forgotPasswordText: {
      color: '#999',
    },
    googleIcon: {
      marginRight: 10,
    },
    googleLoginButton: {
      alignItems: 'center',
      backgroundColor: theme.colors.onTertiaryContainer,
      borderRadius: 5,
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    googleLoginText: {
      color: theme.colors.background,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      backgroundColor: 'transparent',
      flex: 1,
    },
    inputContainer: {
      alignItems: 'center',
      borderBottomColor: '#999',
      borderBottomWidth: 1,
      flexDirection: 'row',
      marginBottom: 20,
      paddingBottom: 5,
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    subtitle: {
      color: '#999',
      fontSize: 18,
      marginBottom: 30,
      textAlign: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
  });
};
export default getStyles;
