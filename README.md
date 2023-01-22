# Three.js Template

A Three.js template created with `vite` & pre-configured with `eslint`, `prettier`, and `TypeScript`

## Installed libraries

-   [Three.js](https://threejs.org/)
-   [GSAP](https://greensock.com/gsap/)
-   [dat.GUI](https://github.com/dataarts/dat.gui)

## Requirements

-   [Node.js](https://nodejs.org/en/) (v18+)

## How to use

1. Clone this repo or Download it as a zip file
2. Open the cloned/unzipped folder in the terminal/cmd
3. Run the command `npm i` to install all the dependencies (You need to run this command only once after you clone/download the template)
4. Run the command `npm run dev` to start the development server
5. Edit a file & save and the page will reload automatically
6. Run the command `npm run build` to build the project to the project for deployment (the build goes to the `dist/` folder)
7. Run the command `npm run preview` to preview your built project before deploying it
8. Run the command `npm run lint` to get linting for your code (detect possible errors and tell best practices)
9. Run the command `npm run format` to format your code

There is some code for a basic cube and lighting in the `src/main.js` file so you can check if every thing is working correctly if you run `npm i` then `npm run dev`

## Notes

1.  THE `main.js` FILE IS THE ENTRY POINT TO THE CODE, DON'T MOVE IT UNLESS YOU KNOW WHAT YOU'RE DOING
2.  DON'T REMOVE THE `import "./style.css"` LINE AT THE TOP OF `src/main.js` FILE
3.  You can remove all the code(PLEASE READ NOTE NUMBER 2) from the `src/main.js` file and start clean
4.  You can add as much folders and `.ts` & `.js` files as you want (this template supports TypeScript too)
5.  You can put any assets(images, sounds, etc...) in the `public` folder which will be treated as the the root `/`, for example you can put `img.png` in the `public` folder and then refer to it in your code as `/img.png` not `public/img.png`
6.  Finally for the best experience i recommend using [vscode](https://code.visualstudio.com/) and installing the following extensions in it:
    -   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    -   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
