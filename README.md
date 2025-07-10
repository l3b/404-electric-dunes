# Abdla 404 - Desert Runner Game

![Electric Dunes Banner](https://placehold.co/800x200/1E2430/F5F8FA?text=Abdla%20404%20-%20Electric%20Dunes%20Runner)
*(Replace the placeholder above with a cool banner image!)*

## Overview

Welcome to the Abdla 404 Desert Runner! This isn't just any endless runner; it's a unique experience designed as a fun, interactive "404 Not Found" page for the Abdla brand ([abdla.eth](https://app.ens.domains/abdla.eth) - *link placeholder*). When users get lost, they find themselves in the Electric Dunes, guiding a camel through a dynamic desert landscape.

Built with p5.js and incorporating the vibrant "Electric Dunes" color palette, this game aims to turn a potentially frustrating 404 error into an engaging moment that reflects the brand's values of innovation and connection.

## Features

* **Endless Runner Gameplay:** Guide the camel through an infinitely scrolling desert, avoiding obstacles.
* **404 Theme Integration:** Starts with a stylized "404 - Lost in the Electric Dunes?" screen and features "404" glitch obstacles within the game. The Game Over screen also reflects the 404 theme.
* **Branded Visuals:** Utilizes the "Electric Dunes" color palette (Electric Blue, Neon Yellow, Teal, Lavender, Coral, Lime, Near White, Near Black) throughout the game. Uses the Poppins font for UI elements.
* **Dynamic Day/Night Cycle:** Experience a full cycle from sunrise to noon, sunset, and starry night, with smoothly transitioning colors for the sky, dunes, and ground. Features a moving sun/moon.
* **Magic Carpet Power-Up:** Collect the magic carpet to gain temporary flight!
    * **Controllable Flight:** Use arrow keys to navigate up, down, left, and right while flying.
    * **Carpet Jump:** Press Spacebar while flying for a higher boost jump off the carpet.
    * **Manual Landing:** Hold SHIFT while flying to descend quickly and land.
* **Varied Obstacles:** Dodge Palms, Rocks, Cacti, and glitchy "404" text blocks.
* **Increasing Difficulty:** The game speed gradually increases as your score gets higher.
* **(Experimental) Sound Effects:** Includes basic sound effects using Tone.js for jumping and game over (currently disabled in the code due to initialization issues in some environments, but the library is included).

## How to Play

* **Start:** Click or press SPACE on the initial 404 screen.
* **On Ground:**
    * **Jump:** Press SPACE.
    * **Duck:** Press DOWN ARROW.
* **On Magic Carpet (Flying):**
    * **Move:** Use UP, DOWN, LEFT, RIGHT arrow keys.
    * **Boost Jump:** Press SPACE to jump higher off the carpet.
    * **Descend/Land:** Hold SHIFT to move down quickly. Reaching the ground while holding SHIFT will land the camel.
* **Goal:** Avoid obstacles for as long as possible and achieve a high score!

## How to Run Locally

1.  **Download:** Download the `index.html` file (or the entire repository).
2.  **Open:** Simply open the `index.html` file in a modern web browser (like Chrome, Firefox, Edge, Safari). No web server is needed.

## Libraries Used

* **p5.js:** Core library for drawing and interaction. ([https://p5js.org/](https://p5js.org/))
* **Tone.js:** Used for generating audio effects (currently disabled in the code but linked in HTML). ([https://tonejs.github.io/](https://tonejs.github.io/))

## Future Ideas

* Re-enable and potentially refine sound effects.
* Add more power-up types (e.g., score multiplier, temporary invincibility).
* Implement a high score saving mechanism using `localStorage`.
* Add more visual variety to obstacles or background elements.
* Create more detailed pixel art for the camel and obstacles.
* Integrate specific brand elements like the logo more prominently
