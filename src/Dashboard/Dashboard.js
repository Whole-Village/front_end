import React from 'react';
import './Dashboard.css';
import VillageContainer from '../VillageContainer/VillageContainer';
import { useQuery, useMutation } from "@apollo/client";
import { updateUser } from '../graphQL/mutations/UpdateUser';
import { villagesQuery } from '../graphQL/queries/GetVillage';
import Nav from '../Nav/Nav';

const Dashboard = () => {
// const { data, loading } = useQuery(villagesQuery, {
//   variables: {
//     id: "3"
//   }
// })
// console.log(data)

const [mutateUser, { data, loading }] =  useMutation(updateUser)
//loading is a boolean I can use it for conditional rendering
//look into error and refetch
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Nav />
      <VillageContainer />
      <button onClick={() => mutateUser({
        variables: {
          email: 'donna@gmail.com',
          address: '3333 Trial Pl.',
          name: 'Gina'
        }
      })}> YOYOYOYOYOY
      </button>
    </div>
  )
}

export default Dashboard;

//user dashaboard ---> From nav pane on user dash, click create new village ---> takes you to NewVillageForm --->
