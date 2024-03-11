# ✅ Trellalike

<img src="https://i.imgur.com/DkrObnt.png" />

> A technical test project, the goal is to create a pixel-perfect copy of Trello with Next.js & MUI.

## Disclaimers

> [!WARNING]  
> Everything is supposed to look exactly identical to the original app, except for animations & transitions were I left the default Material UI settings to give a MUI feel to the final app in order to match with the subject requirement to use MUI.

## ⚡ How to run

### Run a dev build locally

> [!TIP]
> NVM and Yarn are used in this examples, you can easily adapt to your own tools if you need to.

Requirements: Git, NVM, Node.js & Yarn.

```bash
git clone https://github.com/Akronae/trellalike
cd trellalike
nvm install
nvm use
yarn
yarn dev
```

### View it on Firebase

A hosted version is available at [ferway-e6a7b.web.app](https://ferway-e6a7b.web.app/)

## 🎯 Report

### Dificulties

- Trying to pixel perfect match the original app using as most MUI native components as I could was no easy task.
- Scavenging the original app ressources took me longer than expected, especially icons.

### Achievements

- I like how well MUI style blends with the original app.
- Managed to run with Nest.js 14 App Router, which can be quite unstable and messy to configure with other libs.

### Possible improvements (with more time)

- Use more MUI theme & system tokens.
- Refactor some heavy components like `TaskDetails`.
