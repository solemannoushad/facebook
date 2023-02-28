import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from "react-native";
import Signup from "./Signup";
const logo = require("./assets/fb.png");

export default function App() {



  return (
    <>

    <View style={styles.container}>
      <View style={styles.logoMain}>
        <Image style={styles.logo} source={logo} />
        <Text style={{fontSize: 22 , marginLeft: 50 , marginRight: 50 , textAlign: 'center' , fontWeight: '400'}}>Facebook helps you connect and share with the people in your life</Text>
      </View>
      <View style={styles.inputMain}>
        <TextInput style={styles.input}  placeholder="Email address or phone number"/>
        <TextInput style={styles.input}  placeholder="Password"/>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>
        <Text style={{color: '#1877f2' , marginTop: 10}}>Forgetten Password?</Text>
      </View>
      <View style={styles.btnMain}>
      <TouchableOpacity style={styles.buttonNew} onPress={()=>Linking.openURL("http://google.com")}>
        <Text style={styles.btnText}>Create new account</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 20}}><Text style={{fontWeight: 600}}>Create a Page</Text> for a celebrity, brand or business.</Text>
      </View>
    </View>
    {/* <Signup/> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f",
  },
  logoMain: {
    flex: 0.3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25
  },
  logo: {
    width: 200,
    height: 100,
  },
  inputMain: {
    flex: 0.3,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dddfe2',
    color: 'grey',
    marginBottom: 18,
    borderRadius: 5,
    padding: 10,
    width: 300,
    fontSize: 15,
  },
  btnMain: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: '#1877f2',
    width: 300,
    textAlign: 'center',
    padding: 10,
    borderRadius: 5
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    alignItems: 'center',
    textAlign: 'center'
  },
  buttonNew: {
    backgroundColor: '#42b72a',
    width: 200,
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
});
