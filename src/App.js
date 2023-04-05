// import React from "react";
// // import "./style.css";
// import ColorPicker from "./components/ChangeColor";


// function App() {
//   return (
//     <div>
//       <ColorPicker/>
//     </div>
//   );
//   }
//   export default App;
// import React from 'react';
// import { RecoilRoot } from 'recoil';
// import ColorPicker from './ColorPicker';

// function App() {
//   return (
//     <RecoilRoot>
//       <ColorPicker />
//     </RecoilRoot>
//   );
// }

// export default App;
import React from 'react';
import { RecoilRoot } from 'recoil';
import ColorPicker from './ColorPicker/ColorPicker';

function App() {
  return (
    <RecoilRoot>
      <ColorPicker />
    </RecoilRoot>
  );
}

export default App;
