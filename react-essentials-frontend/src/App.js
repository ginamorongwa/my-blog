//import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route} from "react-router-dom";
import { About } from "./pages/About";
import { Article } from "./pages/Article";
import { Home } from "./pages/Home";
import { NavBar } from "./pages/NavBar";
import { Whoops404} from "./pages/Whoops404";
import { ArticlesList as ArticlesListPage} from "./pages/ArticlesList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/about" element={<About />} />
        <Route path="/article/:name" element={<Article />} />
        <Route path="/articles-list" element={<ArticlesListPage />} />
        <Route path="/*" element={<Whoops404 />} />
      </Routes>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />}>
//           <Route path="/services" element={<Services />} />
//           <Route path="/history" element={<CompanyHistory />} />
//           <Route path="/location" element={<Location />} />
//         </Route>
//         <Route path="/events" element={<Events />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/*" element={<Whoops404 />} />
//       </Routes>
//     </div>
//   );
// }

// function App() {
//   return (
//       <div>
//         <h1>Hello React Testing Library</h1>
//       </div>
//   );
// }

// function App({ login }) {
// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// useEffect(() => {
//   if (!login) return;
//   setLoading(true);
//   fetch(`https://api.github.com/users/${login}`)
//   .then((response) => response.json())
//   .then(setData)
//   .then(() => setLoading(false))
//   .catch(setError);
// }, [login]);

// if (loading) return <h1>Loading ...</h1>;
// if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
// if (!data) return null;

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.html_url}</p>
//       <img alt={data.login} src={data.avatar_url}/>
//     </div>
//     // <div>{JSON.stringify(data)}</div>
//   );
// //return <div>No user Available</div>
// }

// import React, {useReducer} from "react";

// // https://api.github.com/users/ginamorongwa


// function App() {
//   // const [checked, setChecked] = useState(false); 

//   // function toggle() {
//   //   setChecked((checked) => !checked)
//   // }

//   const [checked, toggle] = useReducer(
//     (checked) => !checked,
//     false
//   );

//   return (
//     <>
//       <input type="checkbox" value={checked} onChange={toggle}/>
//       <p>{checked ? "checked" : "not checked"}</p>
//     </>
//   );
// }

//import logo from "./logo.svg";
// //import restaurant from "./restaurant.jpg"
// import React, {useState, useEffect} from "react";

// function App(){
//   // const what = useState("happy");
//   const [emotion, setEmotion] = useState("happy");
//   const [secondary, setSecondary] = useState("tired");
//   console.log(emotion);
  
//   useEffect(() => {
//     console.log(`It's ${emotion} around here!`)
//   }, [emotion]);
  
//   useEffect(() => {
//     console.log(`It's ${secondary} around here!`)
//   }, [secondary]);
//   return (
//     <>
//       <h1>Hello World!</h1>
//       <h2>Current emotion is {emotion} and {secondary}</h2>
//       <button onClick={() => secondary("crabby")}>Make Crabby</button>
//       <button onClick={() => setEmotion("Happy")}>Make Happy</button>
//       <button onClick={() => setEmotion("Frustated")}>Frustrare</button>
//       <button onClick={() => setEmotion("Enthusiastic")}>Enthuse</button>
//     </>
//   )
// }

// function Header(props){
//   // console.log(props)
//   return (
//     <header>
//       <h1>{props.name}'s Kitchen</h1>
//     </header>
//   );
// }

// function Main(props){
//   return (
//     <section>
//       <p>We serve the most {props.adjective} food around</p>
//       <img src={restaurant} height={300} alt="napkin and silverware at a restaurant table" />
//       <ul style={{textAlign:"left"}} >
//         {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
//       </ul>
//     </section>
//   )
// }

// function Footer(props){
//   return (
//     <footer>
//       <p>Copyright {props.year}</p>
//     </footer>
//   )
// }

// const dishes = [
//   "Macaroni and Cheese",
//   "Salmon",
//   "Tofu with Vegetables"
// ]

// const dishObjects = dishes.map((dish, index) => ({id:index, title:dish}))

// function App() {
//     return (
//       <div className="App">
//         <Header name="Gina"/>
//         <Main adjective="amazing" dishes={dishObjects} />
//         <Footer year={new Date().getFullYear()} />
//       </div>
//     );
// }

// function SecretComponent(){
//   return (
//     <h1>Super secret information for authorized users only</h1>
//   )
// }

// function RegularComponent(){
//   return (
//     <h1>Everyone can see this component</h1>
//   );
// }


// function App({authorized}){
//   return(
//     <>
//       {authorized ? <SecretComponent /> : <RegularComponent />}
//     </>
//   )
//   // if (props.authorized){
//   //   return <SecretComponent />
//   // }
//   // else{
//   //   return <RegularComponent />
//   // }
// }

export default App;