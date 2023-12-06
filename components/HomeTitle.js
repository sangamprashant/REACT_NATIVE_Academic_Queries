import { View, Text } from 'react-native';
import React from 'react';

const HomeTitle = () => {
  return (
    <View style={{ alignItems: 'left', marginBottom: 20, marginTop: 20, backgroundColor: '#e3e0ff', paddingVertical: 20, borderRadius:12, paddingHorizontal:10 }}>
      <Text style={{ fontSize: 20, color: '#6f6f6f' }}>Hi! Welcome to,</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Academic Queries</Text>
    </View>
  );
};

export default HomeTitle;
