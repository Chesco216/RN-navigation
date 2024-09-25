
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export const Sec2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Section 2 page</Text>
      <StatusBar style="auto" />
      <Button
        title='Go to Home'
        onPress={() => 
          navigation.navigate('Home')
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
