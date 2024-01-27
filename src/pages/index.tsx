import DiscordCard from "@/components/DiscordCard";
import GithubCard from "@/components/GithubCard";
import IntroCard from "@/components/IntroCard";
import MailCard from "@/components/MailCard";
import NavBar from "@/components/NavBar";
import OnlineCard from "@/components/OnlineCard";
import SpotifyCard from "@/components/SpotifyCard";
import TimeCard from "@/components/TimeCard";
import ToggleCard from "@/components/ToggleCard";
import TwitterCard from "@/components/TwitterCard";
import Head from "next/head";
import { useState } from "react";

function Home() {
  const [section, setSection] = useState("all");
  return (
    <>
      <Head>
        <title>Sandro - Web3 Ninja</title>
      </Head>
      <div className="flex flex-col m-5 font-nunito">
        <NavBar setSection={setSection} />
        <div
          className="grid grid-cols-3 gap-2 md:grid-cols-4 
			md:gap-4 mt-5 container mx-auto xl:px-20"
        >
          <IntroCard section={section} />
          <TwitterCard section={section} />
          <ToggleCard section={section} />
          <DiscordCard section={section} />
          <SpotifyCard section={section} />
          {/* <MeowyCard section={section} /> */}
          <TimeCard section={section} />
          <OnlineCard section={section} />
          {/* <MapCard section={section} /> */}
          <MailCard section={section} />
          <GithubCard section={section} />
        </div>
      </div>
    </>
  );
}

export default Home;
