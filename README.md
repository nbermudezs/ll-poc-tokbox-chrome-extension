** Development **

- Install `NodeJs` and run `npm install`
- Install `jq`. If running OSX, `brew install jq`
- Run `chmod 755 scripts/setup.sh`
- Run `./scripts/setup.sh`
- Once you start working on the project you might want to
start the watch script to automatically compile `*.jsx` files to `*.js`. To do this run `./scripts/watch.sh`

** To deploy a new version to App Store **

- Make sure the code quality check passes by running `npm run jshint`.
- Make sure your tests pass by running `npm run test`.
- Update the app version in the `manifest.json` file.
- Once the previous checks pass you can run `npm run package`. This will create a zip file based on the version set in the `manifest.json` file. This is the file you will need to upload to the App Store.
