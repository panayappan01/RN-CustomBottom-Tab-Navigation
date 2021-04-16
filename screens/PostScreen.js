import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Post Screen</Text>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lightgray',
  },
});
