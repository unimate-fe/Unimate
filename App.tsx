import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import RootStackNavigator from './src/navigations/RootStackNavigator';
import useRegisterStore from '@src/hooks/useRegisterStore';

const queryClient = new QueryClient();

function App() {
  const state = useRegisterStore();

  useEffect(() => {
    console.log('state: ', state);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
export default App;
