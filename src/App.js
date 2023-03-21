import React from "react";
import "./scss/main.scss";
import { Header, Footer } from "./components";
import { Container } from "./layouts/Container.jsx";
import  "./test.js";




function App() {
  return (
    <div className="ui-wrapper">
      <Header isLogo />
      <div className="ui-content-wrapper">
        <Container>
          <p className="text-2xl">
          Home
          Scup medaka snake mudhead sea bream damselfish tui chub, masu salmon, toadfish warbonnet pumpkinseed shiner sea catfish wasp fish shortnose chimaera. Collared dogfish flier largemouth bass garden eel. Bull shark tetra sábalo, Rainbowfish, marlin yellowfin croaker pikeblenny kuhli loach.<br></br>
          <br></br>
          Gila trout brook lamprey bull shark central mudminnow. Bass flying characin climbing gourami bass walu banjo catfish ilisha African lungfish.
          <br></br>
          Inanga buri, albacore weasel shark swamp-eel wahoo chubsucker kelpfish Black angelfish. Galjoen fish lenok pike eel longnose sucker Ragfish arapaima ponyfish trumpetfish.
          <br></br>
          Climbing catfish cornetfish Rio Grande perch zebra bullhead shark California halibut, skipjack tuna oarfish velvet-belly shark. Grenadier char mackerel. Black mackerel, ayu sand tilefish spikefish, Dolly Varden trout, boga boafish freshwater hatchetfish Pacific lamprey zingel fangtooth. Mudfish grunter boga, sheepshead minnow pejerrey codlet. Whitefish spiny eel rudd European flounder glassfish gulf menhaden neon tetra. Vendace greenling Spanish mackerel channel catfish wolffish largemouth bass, bullhead.
          <br></br>
          White shark amur pike warbonnet cat shark giant wels electric eel gouramie. Queen danio angelfish barbel blue eye x-ray tetra longnose dace, Molly Miller sand stargazer African glass catfish. Alaska blackfish angelfish: flyingfish, burbot mako shark ballan wrasse, goby southern hake; triggerfish zebra trout arapaima, sixgill ray." Emperor bream angelfish, knifefish spadefish stickleback, whale shark Mozambique tilapia, sardine hillstream loach pike eel tubeblenny.
          <br></br>
          Surgeonfish x-ray tetra wasp fish lefteye flounder batfish shortnose chimaera snailfish scythe butterfish sleeper shark ray mackerel, "Asian carps jackfish loweye catfish." Sergeant major prickly shark collared carpetshark ghost flathead: smooth dogfish yellow-edged moray elasmobranch, three-toothed puffer; zebra danio! Black swallower, dogfish; channel bass central mudminnow, Antarctic icefish loach goby. Wolffish whiting searobin codling, cuckoo wrasse, loach crevice kelpfish coley jewfish amago porbeagle shark.
          <br></br>
          Walking catfish Indian mul cardinalfish, carpetshark remora. Jack icefish stonecat lake trout--glass catfish cuskfish flying characin, shrimpfish roanoke bass."
          </p>
        </Container>
      </div>
      <Footer />
    </div>
  );
}


export default App;
