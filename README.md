# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Netflix GPT

- install react vite
- configure tailwind css
- Header
- Routing of the app
- login form
- sign up form
- form validation
- useRef hook
- firebase setup
- deploying our app to production
- Authentication - create sign up form
- implement Sign In using firebase API
- Created Redux store with UserSlice
- implemented signout
- updated user profile
- bug fix: sign in user display name and profile picture
- bug fix: if user not logged in redirect him to login page and vice versa
- unsubscribed onauthstatechaged callback on component unmount
- save all hardcoded URLs is utils/constants.js
- Register for TMDB API and create a new app and get access token
- get data from TMDB now playing movie list API
- created custom hook for nowPlayingMovies
- update store with Movies Data (create new slice)
- planning for main cointainer and secondary container
- fetch data for trailer video
- custom hook for trailer video
- update store with trailor video data
- embeded youtube video
- make it auto play
- added tailwind classes to make it look it awesome
- build secondary cointaner
  -built movie list
  -built movie card
- added tmdb image cdn ulr
- made browse page amazing with tailwind css
- created usePopularMovies, useUpcomingMovies, useTopRatedMovies hooks

# features

- Login/ signiup

  - Sign in /Sign up form
  - redirect to browse page

- Browse (only after authentication)
  - header
  - Trailor in background
  - title and description
- movie suggestion - movie list \*N

- Netflix GPT
  - search bar
  - movie suggestions

git remote add origin https://github.com/prachibbarve/netflix-gpt.git
git branch -M main
git push -u origin main
