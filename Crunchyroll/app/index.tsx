import { Text, View,Button,StyleSheet } from "react-native";

export default function Index() {
  return (
    <View>
      <Text style={styles.titulo} >Quem vai partir em uma aventura?</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titulo:{
    justifyContent:"center",
    alignItems:"center",
  }




})