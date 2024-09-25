
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export const Sec1 = ({navigation, route}) => {
  const user = route.params.user
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text style={{margin: 15}}>{user.email}</Text>
      <Button 
        title='Go to sec2'
        onPress={() => 
          navigation.navigate('Section2')
        }
      />
      <StatusBar style="auto" />
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
