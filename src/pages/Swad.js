import React from "react";
import ReactPlayer from "react-player";

export const Swad = () => {
  return (
    <div style={style.parent}>
      <div style={style.outer}>
        <ReactPlayer
          url={require("../assets/swad/swad1.mp4")}
          playing={true}
          height={"100vh"}
          loop={true}
          muted={true}
        />
      </div>
    </div>
  );
};

const style = {
  parent: {
    position: "absolute",
    top: 0,
    bottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "100vh",
    background: "black",
    width: "100%",
  },
  outer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
