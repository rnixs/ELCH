import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BackGround } from "../../assets/index";

function SignIn() {
  return (
    <ImageBackground style={styles.background} source={BackGround}>
      <Text style={styles.text}>Sign in</Text>
      <TextInput
        placeholder="ID를 입력해 주세요."
        style={styles.idInput}
      ></TextInput>
      <TextInput
        placeholder="비밀번호를 입력해 주세요."
        style={styles.pwInput}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button.text}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.button.text}>계정이 없다면 클릭</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  idInput: {
    width: 280,
    height: 50,
    marginTop: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 10,
  },
  pwInput: {
    width: 280,
    height: 50,
    backgroundColor: "#fff",
    marginTop: 40,
    paddingHorizontal: 20,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 10,
  },
  button: {
    width: 120,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#6F47DD",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 30,
    marginBottom: 15,
    text: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
    },
  },
});

export default SignIn;
