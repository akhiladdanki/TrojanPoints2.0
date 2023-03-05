import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import featureData from "../data/feedData.json";
import { useNavigation } from "@react-navigation/native";
// import Like from 'react-native-vector-icons/like1';
const Feed = () => {
  const navigation = useNavigation();
  const [feedData, setFeedData] = useState(featureData);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          alignSelf: "flex-end",
          zIndex: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("Award Trojan Points");
          }}
          style={styles.touchableOpacityStyle}
        >
          <Image
            source={require("../assets/plusgrow.png")}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Trojan Points Feed</Text>
        </View>
        <View style={styles.iconPhone}>
          <FontAwesome name="bars" style={styles.iconPhoneAwesome} />
        </View>
        <View style={styles.description}>
          <Text style={styles.textDescription}>
            We are the USC Family working together to serve the lives entrusted
            to us.
          </Text>
        </View>
        <View>
          {feedData.getData.map((feed, index) => {
            return (
              <View key={index}>
                <View
                  style={{
                    borderWidth: 1,
                    marginTop: 6,
                    width: "96%",
                    height: undefined,
                    borderRadius: 15,
                    marginLeft: 8,
                    marginBottom: 6,
                  }}
                >
                  <View style={{ marginLeft: 10, marginTop: 10 }}>
                    <View>
                      <Text style={styles.feedText}>
                        To {feed.toEmail}-{feed.pointValue} Points
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.feedText}>{feed.description}</Text>
                    </View>
                    <View>
                      <Text style={styles.feedText}>From {feed.fromEmail}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text>{feed.postedDate}</Text>
                    </View>
                    <View style={styles.socialSection}>
                      <TouchableOpacity>
                        <FontAwesome
                          name="thumbs-up"
                          style={styles.iconPhoneAwesome}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <FontAwesome
                          name="comment"
                          style={styles.iconPhoneAwesome}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <FontAwesome
                          name="share-alt"
                          style={styles.iconPhoneAwesome}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  iconPhoneAwesome: {
    position: "absolute",
    width: 50,
  },
  touchableOpacityStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  description: {
    marginTop: 10,
    border: 2,
    padding: 20,
  },
  textDescription: {
    lineHeight: 25,
    fontSize: 18,
    textAlign: "center",
  },
  iconPhone: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  textHeader: {
    fontSize: 30,
  },
  iconPhoneAwesome: {
    fontSize: 24,
  },
  feedText: {
    fontSize: 16,
    lineHeight: 25,

    fontWeight: "bold",
  },
  socialSection: {
    display: "flex",
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-around",
    marginLeft: "68%",
    marginBottom: 10,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});
