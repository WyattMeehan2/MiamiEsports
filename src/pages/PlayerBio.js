import React from 'react';
import { useParams } from "react-router-dom";
import './About.css';
import Footer from '../components/footer.js';
import './PlayerBio.css';
function PlayerBio() {
  const { name } = useParams();
  return (
    <div className = "bio">
    {players[name].bio}
    <Footer/>
    </div>
  );
}

export default PlayerBio;

var players = {
  AlexThompson:{bio:'Alex is a Senior Interactive Media Studies major and Computer Science minor from Cincinnati, OH. He is an eight-year veteran of League, and the Captain of the Miami Redhawks League of Legends team. He is very proud of his Polish ancestry. He will be graduating in May 2020, and is leaving his options open for future projects.'},
  BenWolfer:{bio:'Ben is a Sophomore Interactive Media Studies major from Cincinnati, OH. He is an eight-year veteran of League, and is the Starting Marksman of the Miami Redhawks League of Legends team. He enjoys competitive card games, music, and has a history in orchestral music. He will be graduating in May 2022, with an intention to work in the games industry.'},
  TroyProffitt:{bio:'Troy is a Freshman Computer Science major from Cincinnati, OH. He is a seven-year veteran of League, and the Mid-Laner of the Miami Redhawks League of Legends team. He was born in Seoul, South Korea, and both of his parents are Miami alumni. He will be graduating in May 2023, and is exploring options for after graduation.'},
  NathanLaMantia:{bio:'Nathan is a Sophomore Marketing and Interactive Media Studies double major from Kirtland, OH. He is a five-year veteran of League, and is the Top Laner for the Miami Redhawks League of Legends team. He is an experienced musician, playing guitar, piano, and trumpet, and he also produces Electronic Dance Music as a hobby. He will be graduating in May 2022 and plans to work as an eSports consultant or Social Media Marketer after graduation. '},
  DillonKleinvehn:{bio:'Dillon is a Sophomore Integrated Social Studies major with a minor in History from Barrington, IL. He is a seven-year veteran of League, and is the Jungler of the Miami Redhawks League of Legends team. He describes himself as the best looking jungler in all of CLOL. He will be graduating in May 2021, with plans to either continue his League career professionally or work as a teacher and coach of League at the high school or collegiate level.'},

  SamYancer:{bio:'Sam is an Emerging Technology in Business and Design major with minors in Marketing and Sports Management from Dublin, OH. He is a four-year veteran of Overwatch, and is both a DPS player and the Captain of the Miami Redhawks Overwatch team. In his free time, Sam enjoys folding origami. He will be graduating in May 2020, with his future plans currently left open.'},
  ColinSaccocio:{bio:'Colin is a Chemical Engineering major with minors in Paper Engineering and Process Control from Columbus, OH. He is a three-year veteran of Overwatch, and is a Support player for the Miami Redhawks Overwatch team. He can play the trombone and has a black labrador. He will be graduating in 2022, with plans to work in the paper engineering industry.'},
  AmyYang:{bio:'Amy is a Sophomore Computer Science major from Oxford, OH. She is a two-year veteran of Overwatch, and is the Main Tank for the Miami Redhawks Overwatch team. She will be graduating in May 2022, and is leaving future possibilities open.'},
  KieranThompson:{bio:'Kieran is a Freshman Computer Engineering major from Columbus, OH. His favorite food is fried shrimp, and he played rugby in high school. He is a five-year veteran of Overwatch, and is a DPS player for the Miami Redhawks Overwatch team. He will be graduating in May 2023, and is leaving his future projects open.'},
  JacobHubbard:{bio:'Jacob is a Junior Software Engineering and Computer Science double major from Eaton, OH. He studies the Korean language and enjoys Korean food. He is a four-year veteran of Overwatch, and is the Offtank for the Miami Redhawks Overwatch team. He will be graduating in May 2021, with the intent of pursuing a Master’s Degree in Computer Science and getting a job in the Computer Science industry.'},

  JoshHill:{bio:'Josh is a Computer Science major with a minor in Ethics from Maineville, OH. He is a six-year veteran of Hearthstone, and a player on the Miami Redhawks Hearthstone team. He was born in Rostov, Russia, loves to cook French and Asian meals, and is a fanatic for tea. He will be graduating in May 2023, and is leaving his future plans open.'},
  ConnorRedwine:{bio:'Connor is a Sophomore Games and Simulation major with a minor in Computer Science from Perrysburg, OH. He is a five-year veteran of Hearthstone, and is the captain of the Miami Redhawks Hearthstone team. Connor is also the President of the Miami Game Design Club. He will be graduating in May 2022, and plans to use what he has learned at Miami to become an indie game developer.'},
  GriffinArnold:{bio:'Griffin is a Freshman Accounting major from Dayton, OH. He is a five-year veteran of Hearthstone, and is a player on the Miami Redhawks Hearthstone team. He’s a huge fan of Miami’s own Pulley’s Diner. He will be graduating in May 2023, and is leaving his future options open.'},
  KyleLaycock:{bio:'Kyle is a Senior Computer Science major from Fairfield, OH. He loves to cook, has a passion for photography, and likes to ride his longboard. Kyle is a ten-year veteran of Counter-Strike, and is captain of the Miami Redhawks CS:GO team. He will be graduating in May 2020, with the intention of staying in the eSports scene.'},

  BrandonGlaser:{bio:'Brandon is a Junior German major and Economics minor from Nashville, TN. Brandon is a five-year veteran of Counter-Strike, and is the In-Game Leader of the Miami Redhawks CS:GO team. He is a huge fan of the Tennessee Titans and the Nashville Predators. He will be graduating in May 2021, and has left his future intentions open, so long as he can eat and pay his bills.'},
  MichaelFederer:{bio:'Michael is a Junior Computer Science major with a Statistics minor from Granville, OH. Mike is a five-year veteran of Counter-Strike, and is the AWPer of the Miami Redhawks CS:GO team. In his free time, Michael enjoys playing his guitar and playing soccer. He will be graduating in May 2021, with plans to become a Database Manager or Applications Programmer.'},
  RobertSparent:{bio:'Robert is a Sophomore Computer Science major from Concord, OH. He is a Rifler for the Miami Redhawks CS:GO team. In his free time, he enjoys working out while listening to heavy dubstep. He will be graduating in May 2022, with the intention of pursuing his CS:GO career further or working in the Computer Science field, all with a mentality of “Aim High, No Excuses.”'},
  BrettNovits:{bio:'Brett is a Freshman International Studies major from Youngstown, OH. He also has minors in German and History. Brett is a five-year veteran of Counter-Strike, and is the Support player of the Miami Redhawks CS:GO team. He has a fondness for cooking, playing tennis, and watching movies. He will be graduating in December 2022, with the intention of becoming an International Financial Consultant or a Foreign Affairs Analyst. '},
  KaelanCelentano:{bio:'Kaelan is a Senior Game Design and Chinese double major from Gahanna, OH. He is an experienced traveler, having been to nine countries, and to China twice. Also notable, his grandmother won the Miss America pageant in the early 20th century, and her likeness was modeled for Columbia Pictures’ intro cinematic. Kaelan will be graduating in December 2020, with plans to stay within the eSports scene and potentially work at the collegiate level as a coach.'},
  JasonButts:{bio:'Jason is a Freshman Interactive Media Studies major from Gahanna, OH. Notably, he and Kaelan Celentano attended grade school together. He is a four-year veteran of Rocket League, and is a player on Miami’s “Love” Rocket League team. He will be graduating in May 2023, and plans to work in management for an eSports company after graduation.'},
  JoeHuntington:{bio:'Joe is a Senior Economics major with a minor in Management from Hamilton, OH. He is a lifelong tennis player and is left-handed. He is a four-year veteran of Rocket League, and is Captain of Miami’s “Love” Rocket League team. Joe will be graduating in May 2020, and plans to work in management after graduation. '}
}
