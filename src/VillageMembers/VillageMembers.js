import {useEffect} from 'react';
import MemberCard from '../MemberCard/MemberCard';
import { villagesQuery } from '../graphQL/queries/GetVillage';
import { useQuery } from "@apollo/client";

const VillageMembers = ({villageId, villageMembers, setVillageMembers}) => {
const id = villageId;

  const { data } = useQuery(villagesQuery, {
    variables: {
      id
    }
  });

  useEffect(() => {
    if(data) {
      setVillageMembers(data.village.users)
    }
  }, [data, setVillageMembers])

  const memberCards = villageMembers.map((member) => {
    const uniqueKey = Math.random();
    return(
        <MemberCard
        key={uniqueKey}
        firstName={member.firstName}
        lastName={member.lastName}
        email={member.email}
        />
      )
  });

  return (
    <div>
     {memberCards}
    </div>
  )
}

export default VillageMembers;
