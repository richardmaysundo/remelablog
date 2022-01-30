import React from "react";
import getYouTubeID from "get-youtube-id";
const YoutubePreview = ({ value }) => {
  const id = getYouTubeID(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <div>Missing Youtube URL</div>;
  }
  return (
    <iframe
      width="560"
      height="315"
      src={url} //"https://youtu.be/QhqGCPMfkNM"
      title="YouTube Preview"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: YoutubePreview,
  },
};
