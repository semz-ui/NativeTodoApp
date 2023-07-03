import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { reset, getGoals, deleteGoal } from "../features/goals/goalSlice";
import Header from "../components/Header";

export default function Todo() {
  const dispatch = useDispatch();
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getGoals());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  const deletegoal = (goal) => {
    dispatch(deleteGoal(goal._id));
    dispatch(reset());
  };

  if (isLoading) {
    <Text>Loading</Text>;
  }
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <View>
        {goals.length !== 0 ? (
          goals.map((goal) => {
            return (
              <View key={goal._id} style={styles.con}>
                <Text style={{ fontSize: 45 }}>{goal.text}</Text>
                <TouchableOpacity onPress={() => deletegoal(goal)}>
                  <MaterialCommunityIcons
                    name="delete"
                    size={20}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <View style={styles.con1}>
            <Text style={{ fontSize: 45 }}>You have no goals yet</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  con1: {
    justifyContent: "center",
    alignItems: "center",
  },
  con: {
    // flex: 1,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 50,
    padding: 10,
  },
});
