import { useState } from "react";
import AddTask from "../components/AddTask";
import ShowTasks from "../components/ShowTasks";

const Home = () => {

const [refreshTasks, setRefreshTasks] = useState(false)
  return (
    <>
      <AddTask setRefreshTasks={setRefreshTasks}/>
      <ShowTasks refreshTasks={refreshTasks}/>
    </>
  );
};

export default Home;
