import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

export const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
    </>
  );
};
