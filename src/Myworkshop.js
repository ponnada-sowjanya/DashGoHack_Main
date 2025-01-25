import React from "react";
import Cards from "./Components/Cards";

const Myworkshop = () => {
  const sections = [
    {
      title: "Registered",
      cards: [
        {
          imgSrc: "/ai.jpg",
          altText: "Cloud Computing",
          title: "riya",
          progress: 80,
          navigateTo: "/cloud-computing",
        },
        {
          imgSrc: "/cloudcomputing2.jpg",
          altText: "AWS Cloud",
          title: "AWS Cloud",
          progress: 20,
          navigateTo: "/aws-cloud",
        },
        {
          imgSrc: "/Pluscircle.jpg",
          altText: "Add More",
          isAddCard: true,
          navigateTo: "/explore-more",
        },
      ],
    },
    {
      title: "Attended",
      cards: [
        {
          imgSrc: "/ai.jpg",
          altText: "Artificial Intelligence",
          title: "Artificial Intelligence",
          status: "Completed",
          feedbackUrl: "/feedback",
        },
      ],
    },
    {
      title: "Upcoming",
      cards: [
        {
          imgSrc: "/blockchain 1.jpg",
          altText: "Blockchain Technology",
          title: "Blockchain Technology",
          status: "Coming Soon...",
        },
        
      ],
    },
  ];

  return <Cards sections={sections} />;
};

export default Myworkshop;