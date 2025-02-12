// Packages
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{"Todo App - Liam Nixon | Home"}</title>
      </Helmet>
      <main>
        <p className="text-red-500">
          Initial config with Webpack and TailwindCSS installed
        </p>
      </main>
    </>
  );
};

export default Home;
