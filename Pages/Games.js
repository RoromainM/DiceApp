import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Box } from "@react-native-material/core";


export default function App() {
  return (
    <View>


      {/* barTop */}

      <View style={styles.container}>
        <Box
          w={400}
          h={115}
          m={0}
          style={{
            backgroundColor: "white",
            borderBottomColor: "lightgrey",
            borderBottomWidth: 3,
          }}
        >
          <Image
            style={styles.icon}
            source={require("../assets/LOGO_Black.png")}
          />
        </Box>
      </View>



      {/* GamesSection */}

      <View style={styles.titleBox}>
            <Box
              w={200}
              h={60}
              style={{
                backgroundColor: '#E9BD1F',
                borderRadius: 5,
              }}
            >
              <Text style={styles.title}> 
                GAMES
              </Text>
            </Box>  
          </View>




          {/* NavbarBot */}

        <View>
          <Box
            w={400}
            h={115}
            top={420}
            style={{
              backgroundColor: "white",
              borderColor: "lightgrey",
              borderTopWidth: 3,
            }}
          >

            <View style={styles.navbar}>
              <TouchableOpacity>
                <Image
                  style={styles.boticon}
                  source={require("../assets/menu.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.boticon}
                  source={require("../assets/speech-bubble.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.boticon}
                  source={require("../assets/game.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.boticon}
                  source={require("../assets/menu.png")}
                />
              </TouchableOpacity>
            </View>
          </Box>
        </View>

    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff  ',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    top: 25,
    left: 150,
    width: 90,
    height: 70,
  },
  boticon: {
    top: 18,
    width: 60,
    height: 60,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    top: 5,
  },
  titleBox: {
    flex: 1,
    alignItems: 'center',
    top: 25,
  },
});
