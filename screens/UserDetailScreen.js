import React, { useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    Button,
    TextInput,
    StyleSheet,
    ActivityIndicator,
    Alert
} from 'react-native';
import firebase from '../database/firebase';

const UserDetailScreen = (props) => {

    const inicialState = {
        id: '',
        name: '',
        email: '',
        phone: ''
    }

    const [user, setUser] = useState(inicialState)

    const [isLoading, setIsLoading] = useState(true)

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({
            ...user,
            id: doc.id
        })
    }
    useEffect(() =>{
        getUserById(props.route.params.userid)
    }, []);

    const handleChangeText = (valor, value) => {
      setUser({ ...user, [valor]: value });
    };

    const deleteUser = async () => {
        const dbRef = firebase.db.collection('users').doc(props.route.params.userID);
        awai dbRef.delete();
    }

    const openConfirmationAlert = () => {
        Alert.alert("Remove the User", "Are you sure?"[
            {text: 'Yes', onPress: () => deleteUser()},
            {text: 'No', onPress: () => conosle.log(false)},
        ])
    };

    const updateUser = async () => {
        const dbRef = firebase.db.collection('users').doc(user.id);
        awai dbRef.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        })
        setUser(inicialState);
        props.navigator.navigate("UserList");
    }

    if(isLoading){
        return(
          <View>
            <ActivityIndicator size="large" color="#9e9e9e"/>
          </View>
        )
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="Name User"
                value={user.name}
                onChangeText={(value) => handleChangeText("name", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="Email User"
                value={user.email}
                onChangeText={(value) => handleChangeText("email", value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="Phone User"
                value={user.phone}
                onChangeText={(value) => handleChangeText("phone", value)}
                />
            </View>
            <View>
                <Button
                color="#19AC52"
                title="Update User"
                onPress={() => updateUser()}
                />
            </View>
            <View>
                <Button
                title="Delete User"
                color="#E37399"
                onPress={() => openConfirmationAlert()}
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

export default UserDetailScreen;
