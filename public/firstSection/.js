// 'use strict'
// /////////// Navbar////////////

// // import React from "react";
// // import ReactDOM from "react";
// // import planeLogo from "../images/logo.png";

// // export default function NavBar() {
// //   return (
// //     <nav>
// //       <img src={planeLogo} alt="" />
// //       <p>My Travel Journal</p>
// //     </nav>
// //   );
// // }


// export default [
//   {
//     id: 1,
//     title: "Mount Fuji",
//     location: "Japan",
//     mapLink:
//       "https://www.google.com/maps/d/embed?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&ie=UTF8&hl=en&msa=0&ll=35.36525600000001%2C138.737411&spn=0.09799%2C0.145912&z=12&output=embed",
//     startDate: "20-05-1999",
//     endDate: "20-05-1999",
//     description:
//       "Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige. ",

//     coverImg: "Mount-Fuji.jpg",
//   },

//   {
//     id: 2,
//     title: "Sidi Bousaid",
//     location: "Tunisia",
//     mapLink:
//       "https://www.google.com/maps/d/embed?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&ie=UTF8&hl=en&msa=0&ll=35.36525600000001%2C138.737411&spn=0.09799%2C0.145912&z=12&output=embed",
//     startDate: "20-05-1995",
//     endDate: "20-05-2025",
//     description:
//       "Known for its cobbled streets and blue-and-white houses, Sidi Bou Said is a charming town on a promontory overlooking the Mediterranean, with al fresco cafes, Tunisian eateries, and small art galleries. Early-20th-century Ennejma Ezzahra Palace features arches, ornate stucco, and patterned tilework, while Dar El Annabi is a historic house with wax figures in traditional costume. A marina sits beside a sandy beach. ",

//     coverImg: "Sidi-Bou-Said.jpg",
//   },

//   {
//     id: 3,
//     title: "Niagra Falls",
//     location: "Canada",
//     mapLink:
//       "https://www.google.com/maps/d/embed?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&ie=UTF8&hl=en&msa=0&ll=35.36525600000001%2C138.737411&spn=0.09799%2C0.145912&z=12&output=embed",
//     startDate: "20-05-1999",
//     endDate: "20-05-1999",
//     description:
//       "Niagara Falls, Ontario, is a Canadian city at the famous waterfalls of the same name, linked with the U.S. by the Rainbow Bridge. Its site on the Niagara River's western shore overlooks the Horseshoe Falls, the cascades' most expansive section. Elevators take visitors to a lower, wetter vantage point behind the falls. A cliffside park features a promenade alongside 520-ft.-high Skylon Tower with an observation deck.  ",

//     coverImg: "Niagra-Falls.jpg",
//   },

//   {
//     id: 4,
//     title: "China Wall",
//     location: "Japan",
//     mapLink:
//       "https://www.google.com/maps/d/embed?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&ie=UTF8&hl=en&msa=0&ll=35.36525600000001%2C138.737411&spn=0.09799%2C0.145912&z=12&output=embed",
//     startDate: "20-05-1999",
//     endDate: "20-05-1999",
//     description:
//       "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.",

//     coverImg: "China-Wall.webp",
//   },
// ];


// import React from "react";

// export default function Place(props) {
//   return (
//     <div className="whole">
//       <img
//         className="place"
//         src={require(`../images/${props.img}`)}
//         alt="pic"
//       />
//       <div>
//         {/* src\images\China-Wall.webp */}
//         <span>{props.location}</span>
//         <a href={props.mapLink}>View On google Maps</a>
//         <h2>{props.title}</h2>
//         <p id="date">{props.startDate}</p>
//         <span id="date2">{props.endDate}</span>
//         <p>{props.description}</p>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import NavBar from "./components/NavBar";
// import Place from "./components/Place";
// import Data from "./components/data";

// function App() {
//   const dataDetails = Data.map((data) => {
//     return (
//       <Place
//         img={data.coverImg}
//         location={data.location}
//         mapLink={data.mapLink}
//         startDate={data.startDate}
//         description={data.description}
//         endDate={data.endDate}
//       />
//     );
//   });

//   return (
//     <>
//       <NavBar />
//       {dataDetails}
//     </>
//   );
// }

// export default App; 
// .logoImg{
//   width: 120px;
//   margin-left: 5%;
// }

// nav {
//   margin: 3px;
//   border-top-left-radius: 10px ;
//   border-top-right-radius:10px  ;
//   padding: 20px 36px; 
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 12px; ;
//   display: flex;
//   flex-direction: row;
//   margin-bottom: 5%;
//   background-color: #ee9991;
  
// }
// nav img {
//   width:35px; 
//   margin-left: 150px;
  
// }


// .whole{
//   display: flex;
//   padding-left: 3%;
  

// }

// .whole img{
//   width:200px ; 
//   height:100%; 
//   padding-right: 2%;
//   margin-bottom: 2%;
// }
/* section{
  padding: 20px;
  display: flex;
  flex-direction: column;
  

}

.gridPic{
  margin-bottom: 5%;
  align-self: center;

}

.card {
    width: 175px;
    font-size: 12px;
}

.card--image {
    width: 100%;
    border-radius: 9px;
}

.card--stats {
    display: flex;
    align-items: center;
}

.card--star {
    height: 14px;
} */

