import CustomWebView from '../components/CustomWebView';
import { useLocalSearchParams } from 'expo-router';

export default Page = () => {
  const { uri } = useLocalSearchParams({ uri: '' });
  return <CustomWebView uri={uri} />;
};