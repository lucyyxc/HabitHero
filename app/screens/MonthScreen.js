import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TextInput,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { database } from "../db/index";

function MonthScreen({ navigation }) {
  const [completedDays, setCompletedDays] = useState({
    "2021-01-10": {
      selected: true,
      selectedColor: "#AE4D66",
      selectedTextColor: "#F9EDF0",
    },
  });
  const [count, setCount] = useState(1);
  const [goal, setGoal] = useState("30 min walk");
  const [reward, setReward] = useState("alexander wang heiress mini");

  let explosion;

  const handleReward = () => {
    explosion && explosion.start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{`january`}</Text>
      <Text style={styles.normalText}>{`
daily goal:`}</Text>
      <TextInput
        style={styles.typeText}
        onChangeText={(text) => setGoal(text)}
        defaultValue={goal}
      />
      <Text style={styles.normalText}>{`reward:`}</Text>
      <TextInput
        style={styles.typeText}
        onChangeText={(text) => setReward(text)}
        defaultValue={reward}
      />
      <Text>{`
      `}</Text>
      <Calendar
        style={{
          borderWidth: 4,
          borderColor: "#AE4D66",
          height: 350,
          width: 350,
        }}
        theme={{
          calendarBackground: "#F1D0D8",
          textSectionTitleColor: "#B16E4E", //mon tues etc
          // selectedDayBackgroundColor: "#AF83AA",
          // selectedDayTextColor: "#7B3673",
          todayTextColor: "#F9EDF0", //current day
          dayTextColor: "#D79E82", //each day
          textDayFontFamily: "Thonburi-Bold",
          textMonthFontFamily: "Thonburi-Bold",
          textDayHeaderFontFamily: "Thonburi-Bold",
          textDayHeaderFontWeight: "800",
          textDayFontSize: 15,
          textDayHeaderFontSize: 15,
        }}
        current={Date()}
        onDayPress={(day) => {
          // console.log("selected day", day);
          // console.log(count);

          // database.insertStar(day.dateString);

          setCompletedDays({
            ...completedDays,
            [day.dateString]: {
              selected: true,
              selectedColor: "#D79E82",
            },
          });

          if (count === 10) {
            handleReward();
            // setCompletedDays({
            //   ...completedDays,
            //   [day.dateString]: {
            //     selected: true,
            //     selectedColor: "#AE4D66",
            //   },
            // });
          }
          setCount(count + 1);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        // monthFormat={"yyyy MM"}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        // renderArrow={(direction) => <Arrow />}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        // disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        // onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        // onPressArrowRight={(addMonth) => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={true}
        // Disable right arrow. Default = false
        disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter.
        renderHeader={(date) => {}}
        // Enable the option to swipe between months. Default = false
        // enableSwipeMonths={true}
        markingType={"dot"}
        markedDates={completedDays}
      />
      <ConfettiCannon
        count={200}
        origin={{ x: -10, y: 0 }}
        autoStart={false}
        colors={[
          "#C4778A",
          "#AE4D66",
          "#E6ACBB",
          "#B16E4E",
          "#D79E82",
          "#F9EDF0",
          "#D79E82",
          "#FFE66B",
        ]}
        ref={(ref) => (explosion = ref)}
      />
      <Text>{`
      `}</Text>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.textStyle}>back</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6ACBB",
    alignItems: "center",
    justifyContent: "center",
  },
  openButton: {
    backgroundColor: "#C4778A",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontFamily: "Thonburi-Bold",
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    fontSize: 60,
    fontFamily: "Thonburi-Bold",
    fontWeight: "bold",
    textAlign: "center",
    color: "#AE4D66",
  },
  normalText: {
    fontSize: 17,
    fontFamily: "Thonburi-Bold",
    // fontWeight: "bold",
    textAlign: "left",
    // alignSelf: "stretch",
    color: "#C4778A",
  },
  typeText: {
    fontSize: 18,
    fontFamily: "Thonburi-Bold",
    // fontWeight: "bold",
    textAlign: "left",
    // alignSelf: "stretch",
    color: "white",
  },
});

export default MonthScreen;
