import { useState } from "react";
import AddTask from "../components/AddTask";
import ShowTasks from "../components/ShowTasks";

const Home = () => {

  return (
    <>
      <AddTask />
      <ShowTasks />
    </>
  );
};

export default Home;
