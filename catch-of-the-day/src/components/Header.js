import React from 'react';


// Can also strip parenthesis around (props) or use ({ tagline })

const Header = (props) => (
  <header className="top">
    <h1>Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;

// Old Stateless Functional Component before refactoring

// function Header(props) {
//   return (
//     <header className="top">
//       <h1>Catch
//         <span className="ofThe">
//           <span className="of">Of</span>
//           <span className="the">The</span>
//         </span>
//       </h1>
//       <h3 className="tagline">
//         <span>{props.tagline}</span>
//       </h3>
//     </header>
//     );
// }


// No need to create an actual React Component for something that just retrieves data froms props and renders JSX

// class Header extends React.Component {
//   render() {
//     return (
//         <header className="top">
//           <h1>Catch
//             <span className="ofThe">
//               <span className="of">Of</span>
//               <span className="the">The</span>
//             </span>
//           </h1>
//           <h3 className="tagline">
//             <span>{this.props.tagline}</span>
//           </h3>
//         </header>
//       );
//   }
// }
