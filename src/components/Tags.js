import React from "react";
import '../stylesheets/Tags.css'

function Tags ({ tags }) {
  return (
    <div className="tags">
      {tags.split(",").map((tag,index) => (
        <span key={index} className="badge bg-warning">{tag}</span>
      ))}
    </div>
  );
}

export default Tags;