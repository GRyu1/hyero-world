import React, { useEffect, useState } from "react";

const PostThumnail = ({src}) => {

  return (
    <div className="grid-item item">
      <img src={src}></img>
    </div>
  );
};

export default PostThumnail;
