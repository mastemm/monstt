import Card from "@components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SClub from "./style";

function Club() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/members/`)
      .then(({ data }) => {
        setMembers(data);
      });
  }, []);
  return (
    <SClub>
      {members.map((member) => {
        return (
          <Card
            avatar={member.avatar}
            firstname={member.firstname}
            lastname={member.lastname}
            rank={member.points}
            category={member.category}
          />
        );
      })}
    </SClub>
  );
}

export default Club;
