
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import HomeScreen from '../HomeScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import jsonData from './data.json';


const data = [{"id":"1","Task":"Leranig","TimeDurastion":"1"}]

function RecentTask() {
  const [studentData, setStudentData] = useState(data);

  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);


    
    setStudentData(updatedStudentData);
  };
const onDelte =(id)=> {
 const newList=studentData.filter(li => li.id!==id)
 setStudentData(newList)
}
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
      <Text style={{ flex: 1 }}>{item.id}</Text>
      <Text style={{ flex: 2 }}>{item.Task}</Text>
      <Text style={{ flex: 2 }}>{item.TimeDurastion}</Text>
          <TouchableOpacity
          onPress={()=>onDelte(item.id)}>
            <Text style={{color:'red'}}>Delete</Text>
           </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={studentData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => (
          <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Sr.NO</Text>
            <Text style={{ flex: 2, fontWeight: 'bold' }}>Task</Text>
            <Text style={{ flex: 2, fontWeight: 'bold' }}>TimeDurastion</Text>
           
          </View>
        )}
      />
      <HomeScreen func={addRows} />
    </View>
  );
}

export default RecentTask;
