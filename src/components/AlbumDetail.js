import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const AlbumDetail = ({ album }) => {
  return (
    <View>
      <Card>
        <Text>{album.title}</Text>
      </Card>
    </View>
  );
};

export default AlbumDetail;
