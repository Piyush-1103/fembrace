import React from "react";
import "./remedies.css";
import { FaMugHot, FaTint, FaSpa, FaHotjar, FaLeaf, FaPepperHot, FaSeedling, FaAppleAlt, FaBath, FaHandsHelping, FaBicycle, FaRunning, FaDumbbell } from "react-icons/fa";
import { GiTowel, GiStomach, GiHeartBeats, GiRunningShoe, GiMuscleUp, GiMeditation, GiLemon, GiCactus, GiPill } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";

const remediesData = [
  { id: 1, name: "Ginger Tea", desc: "Reduces cramps & bloating.", icon: <FaMugHot /> },
  { id: 2, name: "Heat Therapy", desc: "Relieves muscle tension.", icon: <FaHotjar /> },
  { id: 3, name: "Chamomile Tea", desc: "Calms stress & pain.", icon: <FaLeaf /> },
  { id: 4, name: "Yoga & Stretching", desc: "Improves circulation.", icon: <FaSpa /> },
  { id: 5, name: "Hydration", desc: "Reduces bloating.", icon: <FaTint /> },
  { id: 6, name: "Peppermint Tea", desc: "Helps with nausea & bloating.", icon: <FaPepperHot /> },
  { id: 7, name: "Lavender Oil", desc: "Relieves stress & anxiety.", icon: <FaSeedling /> },
  { id: 8, name: "Apple Cider Vinegar", desc: "Alleviates bloating & indigestion.", icon: <FaAppleAlt /> },
  { id: 9, name: "Epsom Salt Bath", desc: "Relieves muscle soreness & cramps.", icon: <FaBath /> },
  { id: 10, name: "Acupressure", desc: "Reduces menstrual cramps.", icon: <FaHandsHelping /> },
  { id: 11, name: "Turmeric", desc: "Has anti-inflammatory properties.", icon: <FaLeaf /> },
  { id: 12, name: "Heating Pad", desc: "Soothes period pains.", icon: <FaHotjar /> },
  { id: 13, name: "Magnesium Supplements", desc: "Helps with cramps & bloating.", icon: <FaSpa /> },
  { id: 14, name: "Cinnamon Tea", desc: "Reduces inflammation and pain.", icon: <FaMugHot /> },
  { id: 15, name: "Fennel Tea", desc: "Relieves bloating & gas.", icon: <FaTint /> },
  { id: 16, name: "Peppermint Oil", desc: "Relieves cramps and nausea.", icon: <FaPepperHot /> },
  { id: 17, name: "Cucumber Slices", desc: "Reduces puffiness & bloating.", icon: <FaLeaf /> },
  { id: 18, name: "Massage Therapy", desc: "Relieves stress & muscle tension.", icon: <FaSpa /> },
  { id: 19, name: "Almonds", desc: "Helps with bloating & cramps.", icon: <FaAppleAlt /> },
  { id: 20, name: "Warm Bath", desc: "Helps to relax the body & reduce pain.", icon: <FaBath /> },
  { id: 21, name: "Child's Pose", desc: "Calms the mind and relieves tension.", icon: <GiTowel /> },
  { id: 22, name: "Walking", desc: "Improves circulation and reduces cramps.", icon: <FaRunning /> },
  { id: 23, name: "Bicycle Exercise", desc: "Relieves bloating and eases cramps.", icon: <FaBicycle /> },
  { id: 24, name: "Dumbbell Exercises", desc: "Strengthens muscles and relieves tension.", icon: <FaDumbbell /> },
  { id: 25, name: "Herbal Teas", desc: "A mix of different calming teas.", icon: <GiLemon /> },
  { id: 26, name: "Running", desc: "Boosts energy and reduces cramps.", icon: <GiRunningShoe /> },
  { id: 27, name: "Stomach Massage", desc: "Helps with digestion and bloating.", icon: <GiStomach /> },
  { id: 28, name: "Breathing Exercises", desc: "Reduces stress and cramps.", icon: <GiHeartBeats /> },
  { id: 29, name: "Hot Stone Massage", desc: "Soothes muscle pain and tension.", icon: <MdFitnessCenter /> },
  { id: 30, name: "Meditation", desc: "Calms the mind and reduces stress.", icon: <GiMeditation /> },
  { id: 31, name: "Cactus Juice", desc: "Helps with hydration and bloating.", icon: <GiCactus /> },
  { id: 32, name: "Pill Supplements", desc: "Supports overall wellness.", icon: <GiPill /> },
  { id: 33, name: "Muscle Stretches", desc: "Relieves tight muscles and cramps.", icon: <GiMuscleUp /> },
];

const Remedies = () => {
  return (
    <div className="remedies-container">
      <h2>Gentle Home Remedies</h2>
      <div className="remedies-grid">
        {remediesData.map((remedy) => (
          <div key={remedy.id} className="remedy-card">
            <div className="remedy-icon">{remedy.icon}</div>
            <h3>{remedy.name}</h3>
            <p>{remedy.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Remedies;
