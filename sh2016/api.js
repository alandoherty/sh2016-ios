var BASE_URL = "http://4d499925.ngrok.com";

import React, {
    AsyncStorage
} from 'react-native';

var api = {
    createSession: function() {
        fetch(BASE_URL + "/session/create?user=jamie", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: 'jamie'
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log("RESPONSE BELOW");
            console.log(responseData);
            AsyncStorage.setItem("session", responseData.session.token);
        })
    },
    get: function(fragment, paramsJSON, callback) {
        AsyncStorage.getItem("session").then((value) => {
            paramsJSON["session"] = value;
            var params = Object.keys(paramsJSON).map(function(k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(paramsJSON[k])
            }).join('&');


            fetch(BASE_URL + fragment + "?" + params)
                .then((response) => response.json())
                .then((responseData) => {
                    callback(false, responseData);
                });
        }).done();
    },
    post: function(fragment, params, callback) {
        AsyncStorage.getItem("session").then((value) => {
            params["session"] = value;
            var paramsJSON = Object.keys(params).map(function(k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
            }).join('&');


            fetch(BASE_URL + fragment + "?" + paramsJSON, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((responseData) => {
                    console.log("another test");
                    callback(false, responseData);
                });
        }).done();

    }
}

module.exports = api;