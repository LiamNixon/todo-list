// Packages
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import TodoList from "@/components/organisms/TodoList";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{"Todo App - Liam Nixon | Home"}</title>
      </Helmet>
      <main>
        <TodoList />
      </main>
    </>
  );
};

export default Home;
