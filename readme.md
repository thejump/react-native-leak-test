# React Native Memory Leak Test

This project is a basic demonstration of what appears to be a memory leak in the core of react native.  The text node is being used to demonstrate the issue but the same effects are seen across all react native components.

### Installing

Clone this repository.
Run yarn install.



### Issue Details
It appears that loading text nodes and then removing them does not release all of the memory used and the app memory therefore continually goes up as text nodes are added and removed.
One would expect that the memory would stop increasing as text nodes are removed and memory is garbage collected.
Furthermore, the memory usage by text nodes is so high that running this sample app on a real iPhone 8 causes an immediate crash of the app before the text nodes are rendered.


### Repro steps
Open react-native-leak-test/ios/rnleaktest.xcodeproj in xcode.

In the XCode menu, click Product, then Profile.

Choose Activity Monitor.

Press the Record button.

Find rnleaktest in the process list.

Note the ram usage of roughly 68 MB.

Click Load Text in the app.

Note ram usage of 1-2 GB.

Click Load Text in the app.

Note ram usage of roughly 270 MB.

