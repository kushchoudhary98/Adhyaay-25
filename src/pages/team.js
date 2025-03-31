import Heading from "../component/heading";
import TeamSlider from "../component/team-slider";
import TeamCollection from "../component/heads";
import Top from "../img/red.jpg";
import Down from "../img/black.jpg";

const Team = () => {
  return (
    <div className="relative min-h-screen">
      {/* Top Background */}
      

      {/* Overlapping Down Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Down})` }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-5"
        style={{ backgroundImage: `url(${Top})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <Heading />
        <TeamSlider />
        <TeamCollection/>

      </div>
    </div>
  );
};

export default Team;
