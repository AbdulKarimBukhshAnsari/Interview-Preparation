
## 🔹 Step 1: Core React Native Topics to Revise

These are the **must-know concepts**:

* **React vs React Native**

  * Difference between React (web) and React Native (mobile)
  * No DOM, uses **native components** (`View`, `Text`, `Image`, `ScrollView`)

* **Core Components**

  * `View`, `Text`, `Image`, `ScrollView`, `FlatList`, `SectionList`
  * `TouchableOpacity`, `Pressable`, `Button`

* **Styling**

  * StyleSheet API (`StyleSheet.create`)
  * Flexbox in React Native (no CSS grid)
  * Differences from CSS (no `px`, only numbers, limited properties)

* **Navigation**

  * React Navigation (Stack, Tab, Drawer)
  * Passing params between screens

* **State & Data Handling**

  * Same as React (`useState`, `useEffect`, `useContext`)
  * AsyncStorage for local persistence

* **APIs & Networking**

  * Fetching data from APIs (same as React)
  * Handling async/await with try-catch

* **Expo Basics**

  * What Expo is and why use it
  * Limitations of Expo vs Bare RN

* **Device Features**

  * Camera, Media Library, Location, Sensors (Expo APIs)

* **Platform Differences**

  * Platform-specific code with `Platform.OS`
  * Different styling for Android/iOS

* **Performance Optimizations**

  * FlatList optimizations (keyExtractor, memoization, `getItemLayout`)
  * Avoiding unnecessary re-renders

---

## 🔹 Step 2: Common React Native Interview Questions

1. **What’s the difference between React and React Native?**
2. **How does React Native communicate with native code?** (Bridge concept)
3. **Explain the use of `FlatList` vs `ScrollView`.**
4. **What is Expo and when would you eject it?**
5. **How do you handle navigation between screens?**
6. **How do you persist user login sessions in RN?**
7. **What are performance issues in RN and how do you fix them?**
8. **Difference between controlled and uncontrolled components in RN forms?**
9. **How do you handle push notifications in React Native?**
10. **What is the difference between React Native CLI and Expo?**

---

## 🔹 Step 3: Practical Examples You Should Be Able to Build in RN

* **Counter app** with `useState`
* **Todo app** with `FlatList`
* **Navigation**: 2 screens with params passing
* **API fetching** with loading spinner
* **Form handling** with controlled inputs
* **AsyncStorage example** (save username, show it later)
* **Expo Camera example** (take photo, display it)

