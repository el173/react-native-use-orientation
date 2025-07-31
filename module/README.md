# react-native-use-orientation

A lightweight React Native hook to detect device screen orientation (`PORTRAIT` or `LANDSCAPE`) in real time.

---

## ✨ Features

- 🔄 Detects screen orientation changes dynamically
- 🪶 Lightweight and dependency-free
- ⚛️ Works seamlessly with React Native functional components
- ✅ Written in TypeScript

---

## 📦 Installation

```bash
npm install @el173/react-native-use-orientation
# or
yarn add @el173/react-native-use-orientation
````

---

## 🚀 Usage

```tsx
import React from 'react';
import { Text, View } from 'react-native';
import { useOrientation } from '@el173/react-native-use-orientation';

const App = () => {
  const orientation = useOrientation();

  return (
    <View>
      <Text>Current Orientation: {orientation}</Text>
    </View>
  );
};

export default App;
```

---

## 🧠 API

### `useOrientation(): 'PORTRAIT' | 'LANDSCAPE'`

A React hook that detects the current screen orientation and updates automatically on change.

#### Returns

* `'PORTRAIT'` – when the screen height is greater than or equal to its width
* `'LANDSCAPE'` – when the screen width is greater than its height

---

## 🧾 Example Output

If the device is rotated:

```
Current Orientation: LANDSCAPE
```

Otherwise:

```
Current Orientation: PORTRAIT
```

---

## 📜 License

MIT

---

## 👤 Author

**Hashith Karunarathne**

Website: [hashith.com](https://hashith.com)
GitHub: [el173](https://github.com/el173)

---

## 💡 Tip

You can use this hook to conditionally render different layouts or styles based on orientation in your React Native app!

---

