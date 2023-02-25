import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
const logo = require("./assets/fbLogo.svg");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoMain}>
        <Image style={styles.logo} source={logo} />
        <Text style={{fontSize: 24 , marginLeft: '70px' , marginRight: '70px' , textAlign: 'center' , fontWeight: '400'}}>Facebook helps you connect and share with the people in your life</Text>
      </View>
      <View style={styles.inputMain}>
        <TextInput style={styles.input}  placeholder="Email address or phone number" />
        <TextInput style={styles.input}  placeholder="Password" />
        <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>
        <Text style={{color: '#1877f2' , marginTop: '10px'}}>Forgetten Password?</Text>
      </View>
      <View style={styles.btnMain}>
      <TouchableOpacity style={styles.buttonNew}>
        <Text style={styles.btnText}>Create new account</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoMain: {
    flex: 0.3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 100,
  },
  inputMain: {
    flex: 0.3,
    width: "100%",
    alignItems: "center",
    marginTop: '10px',
  },
  input: {
    borderWidth: 1,
    borderColor: '#dddfe2',
    color: 'grey',
    marginBottom: '18px',
    borderRadius: '5px',
    padding: '10px',
    width: 350,
    fontSize: 15,
  },
  btnMain: {
    flex: 0.2,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: '#1877f2',
    width: 350,
    textAlign: 'center',
    padding: '10px',
    borderRadius: '5px'
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '17px'
  },
  buttonNew: {
    backgroundColor: '#42b72a',
    width: 180,
    textAlign: 'center',
    padding: '10px',
    borderRadius: '5px'
  },
});
