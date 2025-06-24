import React from 'react';
import Header from './Header';
import './Home.css'
import P5Sketch from './p5rect';

function Home() {
  return (
    <div className='hero-section'>
      <h2 className='hero-intro'>Hi there, My name is <span className='name'>Vyom Dalakoti </span>and I am a grade A nerd, lover of Tech and Languages. Welcome to my humble abode!</h2>
      <p className='hero-text'>I've had a long education journey so far. After school I decided to study the German language and enrolled myself in Goethe Institut, Max Mueller Bhavan, New Delhi</p>
      <p className='hero-text'>There I went from A1 Beginner Level then all the way to C1 Advanced in 2019, where I dabbled in a lot of German Culture and literature. The works of Franz Kafka, Friedrich Nietzche and Herman Hesse have made and impact on me that is felt to this day!</p>
      <p className='hero-text'>After finishing my German language course I was truly lost and bewildered as to what I wanted to pursue in life, Ever since I was a little child I wanted to be so many things in life, a scientist, a Rockstar 
        , A marine biologist, oh! perhaps a film maker, or maybe a psychologist but after weeks of deep thinking sessions and pondering about what I really want from life, I reminicised about my days being utterly fascinated by computers, playing all kinds of video games,
        tinkering with PC parts, Installing Fedora Linux on my father's windows PC and then not knowing and eventually breaking it, and unfortunately being unable to fix it. </p>
      <p className='hero-text'>A thought came into my mind...Why not study computers? So I decided I wanna learn how computers work. I had taken Computer Science as an optional subject in school before, Learning how to code with C++ but learning at a university level was something else entirely.</p>
      <p className='hero-text'>So I enrolled in Chandigarh University's Bachelor of Science in Computer Science Course and started learning all kinds of new things, how computers work and communicate, their intricate circuits, how to think algorithmically and then later on playing around a bit with machine learning where
         I worked on a Machine Learning project blending the Music nerd in me with the Tech nerd and Created a model that would classify a piece of music into distinct genres using its sound signatures.</p>
      <p className='hero-text'></p>
    </div>
  );
}

export default Home;