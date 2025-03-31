import React from "react";
import TeamCard from "./team-card";
import Image from "../img/th.jpeg";

// Sample Team Data grouped by domain
const teamMembers = [
  { id: 1, name: "AKHIL KUMAR SINGH", role: "FEST CONTROLLER", domain: "Technical", image: Image },
  { id: 2, name: "SIDDHANT GUPTA", role: "FEST CONTROLLER", domain: "Marketing", image: Image },
  { id: 3, name: "SAURABH MAURYA", role: "EVENT MANAGER", domain: "Logistics", image: Image },
  { id: 4, name: "ARADHYA CHATURVEDI", role: "DESIGN HEAD", domain: "Creative", image: Image },
  { id: 5, name: "AKSHIT SINGH", role: "TECH LEAD", domain: "Technical", image: Image },
  { id: 6, name: "GUNGUN SARAWAT", role: "PUBLIC RELATIONS", domain: "Marketing", image: Image },
];

const TeamCollection = ({ domain }) => {
  // Filter team members based on the given domain
  const filteredMembers = teamMembers.filter(member => member.domain === domain);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredMembers.length > 0 ? (
        filteredMembers.map(member => (
          <TeamCard key={member.id} name={member.name} role={member.role} image={member.image}  />
        ))
      ) : (
        <p className="text-gray-500 col-span-full text-center">No members found in {domain} domain.</p>
      )}
    </div>
  );
};

export default TeamCollection;
