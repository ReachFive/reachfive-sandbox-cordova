# ReachFive Cordova Sandbox

The Codova sandbox allows to test the ReachFive Core SDK on a Cordova application.

## Install the sandbox

Clone this repository from GitHub:
```
git clone git@github.com:ReachFive/reachfive-sandbox-cordova.git
```

Switch to the sandbox directory:
```
cd reachfive-sandbox-cordova
```

Install the dependencies:
```
npm install
```

## Configure the account

The account's configuration can be updated in the [`index.js`](www/js/index.js) file:

```javascript
script.src = 'https://local-raas.og4.me/js/v1/identity.js?client_id=sg48CdAYohRPeRWZ9j1H';
```

Replace `local-raas.og4.me` by your account's domain and `sg48CdAYohRPeRWZ9j1H` by your client ID.

## Run the application

Build the sandbox for all platforms:
```
./cordova build
```

You can optionally limit the scope of each build to a specific platform ('ios' or 'android):
```
./cordova build ios
```

List the available targets on a specific platform:
```
./cordova run ios --list
```

Run a specific target of emulator:
```
./cordova run ios --target="iPhone-8, 13.2"
```

## License

MIT © [ReachFive](LICENSE.md)
