import React, { useState } from 'react';
import { View, ScrollView, Button, TextInput, StyleSheet } from 'react-native';
import firebase from '../database/firebase';


const CreateUserScreen = (props) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChangeText = (valor, value) => {
      setState({ ...state, [valor]: value });
    };

    const addNewUser = async () => {
        if(state === ''){
            alert('Please provide a name');
        }else{
            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                phone: state.phone
            })
            props.navigation.navigate('UserList');
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="Name User"
                onChangeText={(value) => handleChangeText("name", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="Email User"
                onChangeText={(value) => handleChangeText("email", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="Phone User"
                onChangeText={(value) => handleChangeText("phone", value)}
                />
            </View>
            <View>
                <Button
                title="Save User"
                onPress={() => addNewUser()}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
});


export default CreateUserScreen;
