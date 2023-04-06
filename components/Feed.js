import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { db, collection, getDocs, updateDoc, doc } from "../firebase/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

let userId = "";
const Feed = () => {
  const navigation = useNavigation();
  const [feedInfo, setFeedInfo] = useState([]);
  const [docId, setDocId] = useState();
  const [likedPost, setIsLikedPost] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  useEffect(() => {
    getData();
  }, [refreshing, likedPost]);
  useEffect(() => {
    getDataAsyn();
  }, []);
  const getDataAsyn = async () => {
    try {
      userId = await AsyncStorage.getItem("userId");
    } catch (err) {
      console.log(err);
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const getData = async () => {
    let records = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      records.push({ key: doc.id, data: doc.data() });
      setDocId(doc.id);
    });
    setFeedInfo(records);
  };

  const getLikeStatus = (likes) => {
    let status = false;
    likes.map((item) => {
      if (item === userId) {
        status = true;
      } else {
        status = false;
      }
    });
    return status;
  };
  const onLike = async (item, indd) => {
    let tempLikes = item.likes;
    if (tempLikes.length > 0) {
      tempLikes.map((val) => {
        if (val === userId) {
          const index = tempLikes.indexOf(val);
          if (index > -1) {
            tempLikes.splice(index, 1);
          }
        } else {
          tempLikes[indd].push(userId);
        }
      });
    } else {
      tempLikes.push(userId);
    }
    const postRef = doc(db, "posts", docId);
    await updateDoc(postRef, {
      likes: tempLikes,
    });
    setIsLikedPost((prev) => !prev);
  };
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
            source={require("../assets/plus.png")}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
          {feedInfo.map((item, index) => {
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
                        To {item.data.searchQuery}-{item.data.rating} Points
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.feedText}>{item.data.comments}</Text>
                    </View>
                    <View>
                      <Text style={styles.feedText}>
                        From {item.data.searchQuery}
                      </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text>{item.data.createdAt}</Text>
                    </View>
                    <View style={styles.socialSection}>
                      <TouchableOpacity
                        onPress={() => onLike(item.data, index)}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "baseline",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <View style={{ marginRight: 10 }}>
                            <Text>{item.data.likes.length}</Text>
                          </View>
                          <View>
                            {getLikeStatus(item.data.likes) ? (
                              <FontAwesome
                                name="thumbs-up"
                                color="red"
                                style={styles.iconPhoneAwesome}
                              />
                            ) : (
                              <FontAwesome
                                name="thumbs-up"
                                style={styles.iconPhoneAwesome}
                              />
                            )}
                          </View>
                        </View>
                      </TouchableOpacity>
                      <Text>{item.data.postComments.length}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Comments",{
                            postId: item.data.postId,
                            postComments: item.data.postComments,
                            docId: docId
                          });
                        }}
                      >
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
    alignItems: "center",
    justifyContent: "center",
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
