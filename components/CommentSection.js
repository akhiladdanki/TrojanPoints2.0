import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db, collection, getDocs, updateDoc, doc } from "../firebase/index";
import { useRef } from "react";
import { FlatList } from "react-native-web";
import { Avatar } from "@rneui/themed";

let userId = "";
let postComments = [];
let postId = "";
let docId= '';
const CommentSection = () => {
  const route = useRoute();
  const [comment, setComment] = useState();
  const [feedInfo, setFeedInfo] = useState([]);
  // const [docId, setDocId] = useState();
  const [commentList, setCommentList] = useState();
  const [commentList2, setCommentList2] = useState([]);
  console.log(commentList, "lsiititiit");
  console.log(feedInfo, "lsiititiit2234");
  console.log(docId, "abrakada");
  const inputRef = useRef();
  useEffect(() => {
    getUserId();
    postComments = route.params.postComments;
    setCommentList(postComment);
    postId = route.params.postId;
    docId= route.params.docId;
  }, []);
  useEffect(() => {
    getPostDataMeta();
  }, []);
  const getUserId = async () => {
    userId = await AsyncStorage.getItem("userId");
  };
  const getPostDataMeta = async () => {
    let records = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      records.push({ key: doc.id, data: doc.data() });
    });
    setFeedInfo(records);
    setCommentList2(records?.data?.postComments)
  };
  const postComment = async () => {
    let tempComments = postComments;
     tempComments.push({userId:userId , postComments: comment , postId : postId});
    const postRef = doc(db, "posts", docId);
    await updateDoc(postRef, {
      postComments: tempComments,
    });
    inputRef.current.clear();
  };
  const Itemview = ({ item }) => {
    return (
      <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-start",
        marginLeft: 15,
        alignItems: "center",
      }}
      >
        <View style={{ padding: 10 }}>
          <Avatar
            size={32}
            rounded
            containerStyle={{ backgroundColor: "blue" }}
          />
        </View>
        <View>
          <Text>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const newFeedComments = feedInfo[0]?.data?.postComments.map((item)=>console.log(item));
  console.log("grll",newFeedComments);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 60,
          flexDirection: "row",
          borderBottomColor: "#8e8e8e",
          borderBottomWidth: 0.5,
          alignContent: "center",
        }}
      >
        <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: "600" }}>
          CommentSection
        </Text>
      </View>
      <View>
        {commentList?.length > 0 ? (
          <FlatList
            data={commentList}
            keyExtractor={(item, index) => index.toString()}
            // ItemSeparatorComponent={ItemSeparatorView}
            renderItem={Itemview}
          />
        ) : null}
      </View>
      <View
        style={{
          width: "100%",
          height: 60,
          borderColor: "1px red",
          position: "absolute",
          bottom: 0,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "60%", marginLeft: 10 }}>
          <TextInput
            ref={inputRef}
            placeholder="Enter the Text"
            style={{}}
            value={comment}
            onChangeText={(txt) => setComment(txt)}
          />
        </View>
        <TouchableOpacity style={{ width: "40%", marginTop: 10 }}>
          <Text
            style={{ marginLeft: "70%", fontSize: 18, fontWeight: "600" }}
            onPress={() => postComment()}
          >
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentSection;

const styles = StyleSheet.create({});
