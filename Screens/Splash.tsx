import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splashy = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splashy;
