#!/usr/bin/env bash
# ./node_modules/.bin/browserify -o build/js/background-bundle.js src/js/background.js
cp src/js/background.js build/js/background-bundle.js
cp manifest.json build/manifest.json
./node_modules/.bin/browserify -t reactify -o build/js/client-bundle.js src/js/client.jsx
