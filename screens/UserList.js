import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import firebase from '../database/firebase';

const UserList = (props) => {
    const [users, setUsers] =  useState([])

    useEffect(() => {
        firebase.db.collection("users").onSnapshot(querySnapshot => {
            const users = [];

            querySnapshot.docs.forEach((doc) => {
                const {name, email, phone} = doc.data();
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            });
            setUsers(users);
        });
    }, []);


    return (
        <ScrollView>
            <Button
            title="Create User"
            onPress={() => props.navigation.navigate("CreateUserScreen")}
            />

            {
                users.map(user => {
                   return(
                       <ListItem
                       key={user.id}
                       bottomDivider
                       onPress={() => props.navigation.navigate("UserDetailScreen", {
                           userId: user.id
                    })}
                       >
                        <ListItem.Chevron/>
                        <Avatar
                          source={{
                              uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }}
                        rounded
                        tittle="A"
                        />
                        <ListItem.Content>
                            <ListItem.Tittle>{user.name}</ListItem.Tittle>
                            <ListItem.Subtittle>{user.email}</ListItem.Subtittle>
                        </ListItem.Content>
                       </ListItem>
                )
                })
            }
        </ScrollView>
    );
}


export default UserList;
