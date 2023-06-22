import React, { useEffect, useState } from "react";
import { View, Text} from 'react-native';
import { authorize } from "react-native-app-auth";
import axios from 'axios';
import { restoreToken, signIn, signOut } from "../features/user/userSlice";


const config = {
    clientId: 'cf3e21549b5d4e6696efc0e2382f8fb6', // available on the app page
    redirectUrl: 'fuzz://user', // the redirect you defined after creating the app
    scopes: ['user-read-email', 'playlist-modify-public', 'user-read-private'], // the scopes you need to access
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'http://10.0.2.2:3000/exchange',
    },
    dangerouslyAllowInsecureHttpRequests: true, 
    skipCodeExchange: true, 
    usePKCE: false,
};

function SignInScreen() {

    // This is called after component is mounted.
    useEffect(() => {
        
        // Request access_token and refresh_token
        const requestAuth = async (authorizationCode: string)  => {
        try {
            const response = await axios({
            method:'post', 
            url: 'http://10.0.2.2:3000/exchange', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            data: { code: authorizationCode}
            });
            const { data } = response;
            signIn(data)
            //console.log('auth set:', authState);
        } catch(error) {
            console.log(error);
        }
        
        }

        // Request authorizationCode and call backend to get access_token and refresh_token
        const requestAuthAll = async () => {

            try {
                const result = await authorize(config);
                const { authorizationCode} = result;
                requestAuth(authorizationCode);
                
            } catch(error) {
                console.log(error);
            } finally {
                console.log('exiting the try-catch');
            }
        }

        requestAuthAll().catch((err) => {
        console.log(err);
        });

    },[]);


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignIn Screen</Text>
      </View>
    )
}

export default SignInScreen;