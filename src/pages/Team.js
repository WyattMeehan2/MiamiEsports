import React from 'react';

import './Team.css';
import { Link } from "react-router-dom";

function Team() {
  return (
    <div>
      <div className="team">
        League of Legends
      </div>
      <div className="teampics">
        <div className="picHolder"> <Link to="/Player/AlexThompson" target="_blank"> <img className='tpic' src="/Pics/LeagueofLegends/Main/alex_thompson2.jpg" title="Alex Thompson" /> </Link> <div className="caption">Alex Thompson (Alexandtheo)</div> </div>
        <div className="picHolder"> <Link to="/Player/BenWolfer" target="_blank">  <img className='tpic' src="/Pics/LeagueofLegends/Main/ben_wolfer.jpg" title="Ben Wolfer" /> </Link> <div className="caption"> Ben Wolfer (iBjen)</div> </div>
        <div className="picHolder"> <Link to="/Player/DillonKleinvehn" target="_blank">  <img className='tpic' src="/Pics/LeagueofLegends/Main/dillon_kleinvehn.jpg" title="Dillon Kleinvehn" /> </Link> <div className="caption"> Dillon Kleinvehn (Me Llamo Big D)</div> </div>
        <div className="picHolder"> <Link to="/Player/NathanLaMantia" target="_blank">  <img className='tpic' src="/Pics/LeagueofLegends/Main/nathan_lamantia.jpg" title="Nathan Lamantia" /> </Link> <div className="caption"> Nathan LaMantia (Lucent)</div> </div>
        <div className="picHolder"> <Link to="/Player/TroyProffitt" target="_blank">  <img className='tpic' src="/Pics/LeagueofLegends/Main/troy_Proffitt.jpg" title="Troy Proffitt" /> </Link> <div className="caption"> Troy Proffitt (Chang Yoon)</div> </div>
        <div className="picHolder">   <img className='tpic' src="/Pics/LeagueofLegends/Substitutes/riley_hays.jpg" title="Riley Hays" />   <div className="caption"> Riley Hays (RileyPants)</div> </div>
        <div className="picHolder">   <img className='tpic' src="/Pics/LeagueofLegends/Analysts/lorn_mclaren.jpg" title="Lorn McLaren" />  <div className="caption"> Lorn McLaren (Leche)</div> </div>
        <div className="picHolder">   <img className='tpic' src="/Pics/LeagueofLegends/Analysts/omar_wallace.jpg" title="Omar Wallace" />  <div className="caption"> Omar Wallace (Influence4)</div> </div>
        <div className="picHolder">   <img className='tpic' src="/Pics/LeagueofLegends/Analysts/owen_sainiak.jpg" title="Owen Sainiak" />  <div className="caption"> Owen Sainiak (RedA3gis)</div> </div>
      </div>

      <div className="team">
        CSGO
      </div>

      <div className="teampics">
        <div className="picHolder"> <Link to="/Player/BrandonGlaser" target="_blank"> <img className='tpic' src="/Pics/CSGO/brandon_glaser.jpg" title="Brandon Glaser" /> </Link> <div className="caption"> Brandon Glaser (Glase)</div> </div>
        <div className="picHolder"> <Link to="/Player/BrettNovits" target="_blank"> <img className='tpic' src="/Pics/CSGO/brett_novits.jpg" title="Brett Novits" /> </Link> <div className="caption"> Brett Novits (prospektion)</div> </div>
        <div className="picHolder"> <Link to="/Player/KyleLaycock" target="_blank"> <img className='tpic' src="/Pics/CSGO/kyle_laycock.jpg" title="Kyle Laycock" /> </Link> <div className="caption"> Kyle Laycock (Kybrid)</div> </div>
        <div className="picHolder"> <Link to="/Player/MichaelFederer" target="_blank"> <img className='tpic' src="/Pics/CSGO/michael_federer.jpg" title="Michael Federer" /> </Link> <div className="caption"> Michael Federer (TrinityLord)</div> </div>
        <div className="picHolder"> <Link to="/Player/RobertSparent" target="_blank"> <img className='tpic' src="/Pics/CSGO/rob_sparent.jpg" title="Rob Sparent" /> </Link> <div className="caption"> Rob Sparent (Saikou)</div> </div>
      </div>

      <div className="team">
        Overwatch
      </div>

      <div className="teampics">
        <div className="picHolder"> <Link to="/Player/AmyYang" target="_blank"> <img className='tpic' src="/Pics/Overwatch/amy_yang3.jpg" title="Amy Yang" /> </Link> <div className="caption"> Amy Yang (Qinku)</div> </div>
        <div className="picHolder"> <Link to="/Player/ColinSaccocio" target="_blank"> <img className='tpic' src="/Pics/Overwatch/colin_saccocio1.jpg" title="Colin Saccocio" /> </Link> <div className="caption"> Colin Saccocio (C-Sacc)</div> </div>
        <div className="picHolder"> <Link to="/Player/JacobHubbard" target="_blank"> <img className='tpic' src="/Pics/Overwatch/Jacob_Hubbard.png" title="Jacob Hubbard" /> </Link> <div className="caption"> Jacob Hubbard (Hubbs)</div> </div>
        <div className="picHolder"> <img className='tpic' src="/Pics/Overwatch/Jared_Shapiro.png" title="Jared Shapiro" /> <div className="caption"> Jared Shapiro (Jaybird)</div> </div>
        <div className="picHolder"> <Link to="/Player/KieranThompson" target="_blank"> <img className='tpic' src="/Pics/Overwatch/Kieran_thompson.png" title="Kieran Thompson" /> </Link> <div className="caption"> Kieran Thompson (CGS)</div> </div>
        <div className="picHolder"> <Link to="/Player/SamYancer" target="_blank"> <img className='tpic' src="/Pics/Overwatch/Sam_Yancer.png" title="Sam Yancer" /> </Link> <div className="caption"> Sam Yancer (Tobirama)</div> </div>
      </div>

      <div className="team">
        Hearthstone
      </div>

      <div className="teampics">
        <div className="picHolder"> <Link to="/Player/ConnorRedwine" target="_blank"> <img className='tpic' src="/Pics/Hearthstone/connor_redwine3.jpg" title="Connor Redwine" /> </Link>  <div className="caption"> Connor Redwine (MoneyPockets)</div> </div>
        <div className="picHolder"> <Link to="/Player/GriffinArnold" target="_blank"> <img className='tpic' src="/Pics/Hearthstone/griffin_arnold.jpg" title="Griffin Arnold" /> </Link>  <div className="caption"> Griffin Arnold (Griff)</div> </div>
        <div className="picHolder"> <Link to="/Player/JoshHill" target="_blank"> <img className='tpic' src="/Pics/Hearthstone/josh_hill.jpg" title="Josh Hill" /> </Link> <div className="caption"> Josh Hill (Hickit)</div> </div>
      </div>

      <div className="team">
        RocketLeague
      </div>

      <div className="teampics">
        <div className="picHolder"> <Link to="/Player/JasonButts" target="_blank"> <img className='tpic' src="/Pics/RocketLeague/TeamLove/jason_butts.jpg" title="Jason Butts" /> </Link> <div className="caption"> Jason Butts (Midas)</div> </div>
        <div className="picHolder"> <Link to="/Player/JoeHuntington" target="_blank"> <img className='tpic' src="/Pics/RocketLeague/TeamLove/joe_huntington1.jpg" title="Joe Huntington" /> </Link> <div className="caption"> Joe Huntington (Rival)</div> </div>
        <div className="picHolder"> <Link to="/Player/KaelanCelentano" target="_blank"> <img className='tpic' src="/Pics/RocketLeague/TeamLove/kaelen_celentano.jpg" title="Kaelen Celentano" /> </Link> <div className="caption"> Kaelan Celentano (Eleven)</div> </div>
        <div className="picHolder"><img className='tpic' src="/Pics/RocketLeague/TeamHonor/andrew_bartz.jpg" title="Andrew Bartz" /><div className="caption"> Andrew Bartz (Spec)</div> </div>
        <div className="picHolder"><img className='tpic' src="/Pics/RocketLeague/TeamHonor/david_berent.jpg" title="David Berent" /><div className="caption"> David Berent (Nope Rope)</div> </div>
      </div>


    </div>
  );
}

export default Team;
