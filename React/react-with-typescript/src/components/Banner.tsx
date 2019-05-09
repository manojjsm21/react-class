import React from "react";
interface Head {
  name: string;
  age: number;
}
const Banner = (props: Head) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
    </div>
  );
};

export default Banner;
