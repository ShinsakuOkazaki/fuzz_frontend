import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

function UserCreateScreen() {
    const [gender, setGender] = React.useState('');
    const [age, setAge] = useState('');

    const handleSubmit = () => {
        const userData = {
          gender,
          age
        };

        console.log(userData);
    };
    
    return (
        <View>
            <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
            >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
            </Picker>

            <Picker
                selectedValue={age}
                onValueChange={(itemValue) => setAge(itemValue)}
            >
                {/* Use a loop or map function to generate age options */}
                {[...Array(100).keys()].map((value, index) => (
                <Picker.Item key={index} label={value.toString()} value={value} />
                ))}
            </Picker>
            <Button mode="contained" onPress={handleSubmit}>
                Submit
            </Button>
        </View>
    )
}

export default UserCreateScreen;