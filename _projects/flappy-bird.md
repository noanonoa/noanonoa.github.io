---
layout: project
title: Flappy Bird
stylesheet: /assets/css/flappy-bird.css
script: /assets/js/flappy-bird.js
description: "a remake of the classic game"
---

<div class="flappy-bird">
  <div class="game-title">
    <h1>{{ page.title }}</h1>
  </div>
  <div class="game-screen">
    <canvas id="game" width="300" height="500"></canvas>
    <p id="description" class="game-description">
      Press 'spacebar' or 'click' to begin
    </p>
    <p class="source-link">
      <a href="https://www.github.com/noanonoa/flappy-bird" target="_blank">
        [view on GitHub]
      </a>
    </p>
  </div>
</div>
