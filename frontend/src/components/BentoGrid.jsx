import React, { useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";

const BentoGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClose = useCallback(() => {
    setSelectedCard(null);
  }, []);

  const getNewsContent = (id) => {
    switch (id) {
      case 1:
        return {
          headline:
            "Text To Image",
          news: "Transform your words into stunning, high-quality images with AI-powered text-to-image generation.",
        };
      case 2:
        return {
          headline:
            "Collaborative Editing",
          news: "Collaborative editing enables multiple users to edit and interact with the same content in real time, enhancing teamwork and productivity",
        };
      case 3:
        return {
          headline: "Cloud Services Platform Expands Global Infrastructure",
          news: "We're excited to announce the expansion of our cloud infrastructure to 15 new regions, offering enhanced performance and reliability for our global customers. This expansion includes state-of-the-art data centers powered by 100% renewable energy.",
        };
      default:
        return {
          headline: "",
          news: "",
        };
    }
  };

  const cards = [
    {
      id: 1,
      title: "Text To Image",
      description:
        "Transform your words into stunning, high-quality images with AI-powered text-to-image generation.",
      icon: "fa-solid fa-rocket",
      size: "large",
      imageUrl:
        "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.jpg?s=1024x1024&w=is&k=20&c=FQZBVxbXjhgPzm-W-5Jo3O7x7OXLPugwXzTKEu6nV3w=",
    },
    {
      id: 2,
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence solutions for enterprise.",
      icon: "fa-solid fa-brain",
      size: "medium",
      imageUrl:
        "https://media.istockphoto.com/id/1003275828/photo/theater-masks-on-a-dark-background-3d-rendering.jpg?s=1024x1024&w=is&k=20&c=6GkqSFV5K-uk8RSAp2swKNpabeHpdQtKoCulAYxsVe4=",
    },
    {
      id: 3,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure for modern businesses.",
      icon: "fa-solid fa-cloud",
      size: "small",
      imageUrl:
        "https://media.istockphoto.com/id/1316581169/photo/stage-with-microphone-and-stool-with-red-neon-lamp-with-the-word-comedy-space-for-text.jpg?s=1024x1024&w=is&k=20&c=IiY4YA-gYEdl-6dDWgMM5HL44PiiWuUQJqNpI5G1-wM=",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          MODELS WE PROVIDE
        </h1>
        <div className="grid grid-cols-4 gap-6 auto-rows-[200px]">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                hoveredCard === card.id ? "transform scale-[1.02]" : ""
              } ${
                card.size === "large"
                  ? "col-span-2 row-span-2"
                  : card.size === "medium"
                  ? "col-span-2"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
              </div>
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <i className={`${card.icon} text-white text-3xl mb-4`}></i>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-span-1 flex items-center justify-center">
            <div className="flex items-center space-x-2 text-neutral-200 hover:text-gray-900 transition-colors cursor-pointer group">
            <a href="/events" className="flex items-center space-x-2 text-neutral-200 hover:text-gray-900 transition-colors cursor-pointer group mt-6">
          <span className="font-medium">Go to Events</span><ArrowRight></ArrowRight>
          <i className="fa-solid fa-arrow-right w-5 h-5 transform group-hover:translate-x-1 transition-transform"></i>
        </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;