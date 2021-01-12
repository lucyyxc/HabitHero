import React from "react";
import * as SQLite from "expo-sqlite";
// keeps connection btwn db and app
const db = SQLite.openDatabase("db.db");

const setUpDatabase = () => {
  db.transaction(
    (tx) => {
      tx.executeSql("drop table if exists testTable;");

      tx.executeSql(
        "create table if not exists testTable (id integer primary key not null, month integer, date text);"
      );
    },
    (error) => {
      console.log("DB ERROR CREATING TABLE", error);
    },
    (success) => {
      console.log("SUCCESS CREATING TABLE", success);
    }
  );
};

// getStars
// insertStar
// getGoal
// insertGoal
// updateGoal
// getReward
// insertReward
// updateReward

// could add parameter for month to input into argument in place of 1
const insertStar = (date) => {
  // console.log(date);
  db.transaction(
    (tx) => {
      tx.executeSql(
        "insert into testTable (month, date) values (1, ?);",
        [date],
        (trans, result) => console.log("inserted", trans, "RESULT", result)
        // () => console.log("error inserting")
      );
    },
    (error) => {
      console.log("DB ERROR INSERTING COMPLETED DATE", error);
    },
    (success) => {
      console.log("SUCCESS INSERTING COMPLETED DATE", success);
    }
  );
};

// could add parameter for month to input into argument in place of ?
const getStars = () => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "select date from testTable where month = 1",
        [],
        (_, { rows: { _array } }) => {
          const newArr = _array.map((element) => element.date);
          console.log("array", newArr);
        }
      );
    },
    (error) => {
      console.log("DB ERROR LOADING TABLE", error);
    },
    (success) => {
      console.log("SUCCESS LOADING TABLE");
    }
  );
};

export const database = {
  setUpDatabase,
  getStars,
  insertStar,
};
