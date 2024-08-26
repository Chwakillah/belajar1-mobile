import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from "react-native";

export default function App() {
  const openLinkedIn = () => {
    Linking.openURL("https://www.linkedin.com/in/chwakillah");
  };

  const openGitHub = () => {
    Linking.openURL("https://github.com/chwakillah");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('./assets/profil/syaWLaptop.jpeg')} // Menggunakan require untuk mengimpor gambar lokal
          style={styles.profileImage}
        />
        <Text style={styles.name}>Chwakillah</Text>
        <Text style={styles.jobTitle}>Full Stack Developer</Text>
        <Text style={styles.description}>
          Passionate about technology, specializing in building modern, responsive web applications. Experienced in front-end and back-end development, with a strong interest in UI/UX design.
        </Text>
        
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.button} onPress={openLinkedIn}>
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openGitHub}>
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7", // Warna latar belakang khas Notion
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#000",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e2e2e", // Warna teks gelap khas Notion
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    color: "#4f4f4f", // Warna teks yang sedikit lebih terang
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#3e3e3e",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 300,
  },
  button: {
    backgroundColor: "#000", // Warna tombol hitam untuk kontras
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
