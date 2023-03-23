import { html } from "../utils/index.ts"
import Head from "../components/Head.ts"

const Index = () => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <title>The Sebsite</title>
      <link rel="icon" type="image/png" href="/images/ss_code_home.png">
      <meta name="description" content="Welcome to The Sebsite. Navigate by inputting codes into the magical NavCube. Can you solve it?">
      
      <!-- import the webpage's stylesheet -->
      <link rel="stylesheet" href="/style.css">
      
        <!-- import the webpage's javascript -->
      <script src="/scripts/cre8.js" type="module" defer></script>
      <script src="/scripts/nav-cube.js" type="module" defer></script>
    </head>  
    <${Head} 
      title="The Sebsite" 
      desc="Welcome to The Sebsite. Navigate by inputting codes into the magical NavCube. Can you solve it?"
    >
    <body>
      <header id="nav-cube-shortcuts" class="wrap justify-around">
        <a href="/" class="column align-center">
          <img width="60px" alt="home-code" src="/images/ss_code_home.png">
          <p class="label">
            HOME
          </p>
        </a>
        <a href="/blog" class="column align-center">
          <img width="60px" alt="blog-code" src="/images/ss_code_wc.png">
          <p class="label">
            BLOG
          </p>
        </a>
        <a href="/about" class="column align-center">
          <img width="60px" alt="about-code" src="/images/ss_code_heart.png">
          <p class="label">
            ABOUT
          </p>
        </a>
      </header>
      
      <div style="min-height: 100%;" class="column justify-center">
        <div id="nav-cube" class="elastic-spin bounce-in" style="top: 40%"></div>
        <div class="container text-center fade-in" style="padding-top: 100px;">
          <h1 class="didot bold">
            Seb Ringrose
          </h1>
          <p class="tomato">
            Web Wizard & Tech Educator
          </p>
        </div>
      </div>
      
      <div class="bg-secondary column align-center">
        <div class="container">
          <h2>NavCube Cheatsheet</h2>
          <p>Input codes into the magical NavCube by clicking/tapping the tiles.</p>
          <p><i>"Is the NavCube really magical?"</i></p>
          <p>Well, if a cube that transports you around the internet isn't magic then I don't know what is. Find your first hint below.</p>
          <p><b>Hint:</b> always follow your heart, even if it's empty. Start with the bottom and side edges, then create a simple heart outline with the top tiles...</p>
          <p>Too lazy to take the challenge: <a href="/?cheatCodes=true">click here</a>. Changed your mind? <a href="/?cheatCodes=false">reset the challenge</a>.</p>
        </div>
      </div>

      <!-- HIDDEN LINKS FOR SEARCH ENGINES -->
      <section style="display: hidden; height: 0;">
        <a href="/about">ABOUT</a>
        <a href="/blog">BLOG</a>
        <a href="/tech">TECH</a>
      </section>

      <footer class="row align-center justify-between">
        <div class="row">
          <a href="/"><p class="icon text-icon">🏠</p></a>
          <a href="#"><p class="icon text-icon">⬆️</p></a>
        </div>
        <div class="row">
          <a target="_blank" href="https://github.com/sebringrose"><img class="icon" src="/icons/github.svg" alt="github"></a>
          <a target="_blank" href="https://www.linkedin.com/in/sebastien-ringrose-375047134/"><img class="icon" src="/icons/linkedin.svg" alt="linkedin"></a>
          <a target="_blank" href="https://github.com/edent/SuperTinyIcons/"><p>icons</p></a>
        </div>
      </footer>
    </body>
  </html>
`

export default Index