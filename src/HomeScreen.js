import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import RecentTask from './Screen/RecentTask';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
function HomeScreen(props) {
  const [Task, setTask] = useState('');
  const [TimeDurastion, setTimeDurastion] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateTime, setDateTime] = useState('');
  
  const showDatePicker = () => {
         setDatePickerVisibility(true);
       };
    
       const hideDatePicker = () => {
         setDatePickerVisibility(false);
       };
    
      //  const handleConfirm = (date) => {
      //    console.log("A date has been picked: ", new Date(date));
      //    setDateTime(date)
      //    hideDatePicker();
      //  };
  const changeTask = (text) => {
    setTask(text);
  };

  const changeTimeDurastion = (text) => {
    setTimeDurastion(text);
  };
  

  const transferValue = () => {
    const val = {
      Task,
      TimeDurastion,
      // dateTime,
    };

    console.log(val);
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setTask('');
    setTimeDurastion('');
  };

  return (
    <View>
      <Text>Task</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        value={Task}
        onChangeText={changeTask}
      />
      <Text>TimeDurastion</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        value={TimeDurastion}
        keyboardType = 'numeric'
        onChangeText={changeTimeDurastion}
      />
      <View style={{marginVertical: 20}}>
      <Button title="Date" onPress={showDatePicker} />
      <DateTimePickerModal
         isVisible={isDatePickerVisible}
         mode="date"
        //  onConfirm={handleConfirm}
        //  onCancel={hideDatePicker}
        />
        </View>
      <Button title="Add" onPress={transferValue} />
    </View>
  );
}

export default HomeScreen;








// import { StyleSheet, Text, View ,Button,SafeAreaView,TextInput} from 'react-native'
// import React,{useState} from 'react'
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import RecentTask from './Screen/RecentTask';
// const HomeScreen = () => {
//   const [textInputTask, setTextInputTask] = useState('');
//   const [textInputTimeDurastion, setTextinputTimeDurastion] = useState('');
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date) => {
//     console.warn("A date has been picked: ", date);
//     hideDatePicker();
//   };
//   const checkTextInput = () => {
//     if (!textInputTask.trim()) {
//       alert('Please Enter Task');
//       return;
//     }
//     if (!textInputTimeDurastion.trim()) {
//       alert('Please Enter TimeDurastion');
//       return;
//     }
//     if (!isDatePickerVisible.trim()) {
//       alert('Please Enter DatePickerVisiblet');
//       return;
//     }
//     alert('Success');
//   };
//   return (
//     <SafeAreaView style={{flex: 1}}>
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Enter Task"
//         onChangeText={
//           (value) => setTextInputTask(value)
//         }
//         underlineColorAndroid="transparent"
//         style={styles.textInputStyle}
//       />
//       <TextInput
//         placeholder="Enter TimeDurastion "
//         keyboardType = 'numeric'
//         onChangeText={
//           (value) => setTextinputTimeDurastion(value)
//         }
//         underlineColorAndroid="transparent"
//         style={styles.textInputStyle}
//       />
//       {/* <View style={{marginVertical: 20}}>
//       <Button title="Date" onPress={showDatePicker} />
//     <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//       </View> */}
//       <View style={{marginVertical: 10}}>
//        <Button 
//           title="Add"
//           onPress={RecentTask}
//           color="#606070" 
//         />
//     </View>
//     </View>
//     </SafeAreaView>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   MainView:{
//     width: '80%',
//     height: 40,
//     paddingHorizontal: 7,
//     borderWidth: 0.5,
//     marginLeft:35,
  

//   },
//   container: {
//     flex: 1,
//     padding: 35,
//   },
//   textInputStyle: {
//     width: '100%',
//     height: 40,
//     paddingHorizontal: 5,
//     borderWidth: 0.5,
//     marginTop: 20,
//   },

// })