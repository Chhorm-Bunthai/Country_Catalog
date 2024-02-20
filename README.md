# Technologies used 
- React Js
- Javascript
- State management(RTK query)
- MUI(an open-source React component library that implements Google's Material Design)

# My Git flow Strategy
1. ## Main Branch: 
- I create the main branch for the GitHub repository.
2. ## Development Branch: 
- I branch out from the main branch to create a development branch in order to keep the main branch stable and to work on new features.

3. ## Feature Branches: 
- I create feature branches from the development branch to work on specific features for the application. Once a feature is complete, merge the feature branch back into the development branch.

4. ## Release Branch: 
- After all the features are completed and tested, I create a release branch from the development branch. Test the release branch for any bugs, and if everything is working correctly, merge it into both the main branch and the development branch.

5. ## Bugfix Branch: 
- If any bugs are discovered after the release, create a bugfix branch from the release branch to fix the issues. Once fixed, merge the bugfix branch back into the release branch. But In my project, I didn't use bugfix because there is no bug after release

  
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
