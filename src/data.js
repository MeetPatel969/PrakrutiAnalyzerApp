// src/data.js

export const questions = [
    {
      question: "What is your skin type?",
      options: [
        { label: "Dry", value: "vata" },
        { label: "Oily", value: "pitta" },
        { label: "Balanced", value: "kapha" }
      ]
    },
    {
      question: "How would you describe your body frame?",
      options: [
        { label: "Thin", value: "vata" },
        { label: "Muscular", value: "pitta" },
        { label: "Heavier", value: "kapha" }
      ]
    },
    {
      question: "What is your natural hair type?",
      options: [
        { label: "Dry & Thin", value: "vata" },
        { label: "Oily & Thinning", value: "pitta" },
        { label: "Thick & Oily", value: "kapha" }
      ]
    },
    {
      question: "Eye size and brightness?",
      options: [
        { label: "Small, dull", value: "vata" },
        { label: "Medium, sharp", value: "pitta" },
        { label: "Large, bright", value: "kapha" }
      ]
    },
    {
      question: "Usual mindset?",
      options: [
        { label: "Restless", value: "vata" },
        { label: "Intense", value: "pitta" },
        { label: "Calm", value: "kapha" }
      ]
    },
    {
      question: "How is your memory?",
      options: [
        { label: "Forgetful", value: "vata" },
        { label: "Sharp", value: "pitta" },
        { label: "Slow but long-term", value: "kapha" }
      ]
    },
    {
      question: "Emotional tendencies?",
      options: [
        { label: "Anxious", value: "vata" },
        { label: "Angry", value: "pitta" },
        { label: "Content", value: "kapha" }
      ]
    },
    {
      question: "Preferred foods?",
      options: [
        { label: "Warm, dry", value: "vata" },
        { label: "Hot & Spicy", value: "pitta" },
        { label: "Light & Sweet", value: "kapha" }
      ]
    },
    {
      question: "Sleep pattern?",
      options: [
        { label: "Light", value: "vata" },
        { label: "Moderate", value: "pitta" },
        { label: "Deep", value: "kapha" }
      ]
    },
    {
      question: "Energy throughout the day?",
      options: [
        { label: "Variable", value: "vata" },
        { label: "High, in bursts", value: "pitta" },
        { label: "Steady", value: "kapha" }
      ]
    },
    {
      question: "Preferred climate?",
      options: [
        { label: "Warm", value: "vata" },
        { label: "Cool", value: "pitta" },
        { label: "Moderate", value: "kapha" }
      ]
    },
    {
      question: "In stress, you become?",
      options: [
        { label: "Anxious", value: "vata" },
        { label: "Irritable/Angry", value: "pitta" },
        { label: "Calm/Quiet", value: "kapha" }
      ]
    }
  ];
  
  export const doshaDescriptions = {
    vata: {
      title: "Vata (Air & Space)",
      description:
        "Vata types are lively, creative, but may be prone to anxiety and dryness. Maintain balance with grounding routines and warm, moist foods.",
      tips: [
        "Keep a consistent routine",
        "Favor warm, oily, and nourishing foods",
        "Stay warm and avoid cold exposure"
      ]
    },
    pitta: {
      title: "Pitta (Fire & Water)",
      description:
        "Pitta types are intense, sharp, and strong-minded, but can be prone to anger and overheating. Balance by keeping cool and managing stress.",
      tips: [
        "Avoid excessive heat and spicy foods",
        "Incorporate cooling foods (cucumber, mint, yogurt)",
        "Practice relaxation techniques"
      ]
    },
    kapha: {
      title: "Kapha (Earth & Water)",
      description:
        "Kapha types are calm, steady, and supportive, but can become sluggish or gain weight easily. Keep active & eat light foods.",
      tips: [
        "Engage in regular exercise",
        "Favor light, spicy, and dry foods",
        "Avoid too much sleep and heavy foods"
      ]
    }
  };
  