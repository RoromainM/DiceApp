import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Box } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";


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
            source={require("./assets/LOGO_Black.png")}
          />
        </Box>
      </View>


          {/* NewGameSection */}

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
                NEW GAMES
              </Text>
            </Box>  
          </View>




          {/* caroussel */}


          








          {/* Discover Your Destiny */}


      <View>
        <TouchableOpacity>
        <Box
            w={360}
            h={130}
            left={15}
            top={270}
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              borderColor: 'lightgrey',
              borderWidth: 2, 
            }}
          >
              <View style={styles.discover}>
                <Image
                   style={styles.discoverImg}
                   source={require("./assets/testDiscover.png")}
                />
                  <View style={styles.discoverText}>
                    <Text style={styles.discoverTitle}>
                      Discover your destiny !
                    </Text>
                    <Text style={styles.discoverDescription}>
                      Games of atmosphere, card, dice, 
                      skill, memory...
                    </Text>
                  </View>
              </View>
        </Box>
        </TouchableOpacity>
      </View>




          {/* What's on */}


          <View>
            <Text style={styles.WhatsOn}>
              What's on 
            </Text>

            <View style={styles.WhatsOnBtn}>
              <TouchableOpacity>
                  <Image
                    style={styles.WhatsOnImg}
                    source={require("./assets/testDiscover.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.WhatsOnImg}
                    source={require("./assets/testDiscover.png")}
                  />
                </TouchableOpacity>
            </View>

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
                  source={require("./assets/home.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.boticon}
                  source={require("./assets/speech-bubble.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.boticon}
                  source={require("./assets/game.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Menu.js")}
              >
                <Image
                  style={styles.boticon}
                  source={require("./assets/menu.png")}
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
  discoverImg: {
    width: 110,
    height:110,
    top: 8,
    left: 8,
  },
  discover: {
    flex: 1,
    flexDirection: 'row',
  },
  discoverTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  discoverText: {
    flex: 1,
    top: 10,
    left: 20,
  },
  discoverDescription: {
    top: 20,
  },
  WhatsOn: {
    top: 290,
    left: 130,
    fontSize: 30,
  },
  WhatsOnBtn: {
    top: 300,
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  WhatsOnImg: {
    width: 100,
    height: 100,
  }
});

