import React from "react";
import { Footer, NavBar } from "../../components";
import YouTubeFrame from "../../components/YoutubeFrame/YoutubeFRame";
import PersonalinfoSec from "../../components/PersonalinfoSec/PersonalinfoSec";

function StudentProfilePage() {
  return (
    <>

      <NavBar />
      <div className="container mx-auto mt-3 ">
      <YouTubeFrame />
        <div className="grid grid-row-1 sm:grid-row-2 md:grid-row-3 lg:grid-row-4 gap-6 mb-28">
          <h1 className="text-3xl font-bold ">Personal Information</h1>
          <PersonalinfoSec title="Username" detail="Abderraouf FILALI" />
          <PersonalinfoSec title="Email Address" detail="abderaouffilali@yahoo.com" />
          <PersonalinfoSec title="Phone Number" detail="0799623541" />
          <PersonalinfoSec title="Date of birth" detail="2-9-1999" />
          <PersonalinfoSec title="Gender" detail="Abderraouf FILALI" />
          <PersonalinfoSec title="Passwor" detail="********" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StudentProfilePage;


