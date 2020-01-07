/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        document.addEventListener("online", this.onOnline.bind(this), false);
        document.addEventListener("resume", this.onResume.bind(this), false);

        loadReachFiveScript();

        // reach5('showAuth', {
        //     container: 'reachfive-login',
        //     auth: {
        //         redirectUri: 'reachfive-demo://login/callback',
        //         responseType: 'token'
        //     }
        // });

        reach5('showSocialLogin', {
            container: 'social-buttons-container',
            socialProviders: [
                'facebook',
                'google'
              ],
              auth: {
                redirectUri: 'reachfive-demo://login/callback',
              }
        });
        reach5('on', 'authenticated', function(authResult) {
            var name = authResult.idTokenPayload.name || authResult.idTokenPayload.email;
            document.getElementById('login-result').innerHTML = 'Logged in as ' + name;
            document.getElementById('clear-button').style.display = 'inline';
        });
    },

    onOnline: function() {
        loadReachFiveScript();
    },

    onResume: function () {
        loadReachFiveScript();
    }
};

function loadReachFiveScript() {
    window.reach5=window.reach5||function(){(reach5.q=reach5.q||[]).push(arguments)};
    if (!window.reach5.loaded) {
        var script = document.createElement("script");
        script.setAttribute('type', 'text/javascript');
        script.src = 'https://local-sandbox.og4.me/js/v1/identity.js?client_id=sg48CdAYohRPeRWZ9j1H';
        document.body.appendChild(script);
    }
}

console.log('Start test app');

app.initialize();
