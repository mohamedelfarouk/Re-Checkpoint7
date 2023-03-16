import React, { useEffect, useState } from "react";

const App = () => {
  const [person, setPerson] = useState({
    fullname: "Mohamed Amr Omar El-Farouk",
    bio: "Lorem ipsum dolor sit amet.",
    imgSrc: "./1.jpg",
    profession: "Student",
    shows: true,
  });

  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (person.shows)
      setPerson({
        fullName: "",
        bio: "",
        imgSrc: "",
        profession: "",
        shows: false,
      });
    else
      setPerson({
        fullname: "Mohamed Amr Omar El-Farouk",
        bio: "Lorem ipsum dolor sit amet.",
        imgSrc: "./1.jpg",
        profession: "Student",
        shows: true,
      });
    setCount(0);
  };
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <h1>{person.fullname}</h1>
      <h2>{person.bio}</h2>
      <h3>{person.profession}</h3>
      <img src={person.imgSrc} />
      <br />
      <button style={{ width: "4rem", height: "4rem" }} onClick={handleClick}>
        {person.shows ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default App;
