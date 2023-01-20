import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
      <InfoCard
        img={clock}
        text={"Openings Hours"}
        textDiscription={" form 9:00PM to 6:00PM"}
        color={"bg-gradient-to-r from-primary to-secondary"}
      ></InfoCard>
      <InfoCard
        img={marker}
        text={"Visit our location"}
        textDiscription={
          "66, Puraton Kalabagan, Jhalakati"
        }
        color={"bg-[#3A4256]"}
      ></InfoCard>
      <InfoCard
        img={phone}
        text={"Contact us now"}
        textDiscription={"+880 1736648283"}
        color={"bg-gradient-to-r from-primary to-secondary"}
      ></InfoCard>
    </div>
  );
};

export default Info;
