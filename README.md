# React + Vite
 Here in thid first codes comment :
 the form inputs are controlled and their values are saved in state
loading and error states are manually handled

Now here is the same form with React 19

form uses useActionState hook to delegate handling of the loading and error states
form is submitted with the action attribute instead of onSubmit
form no longer needs controlled inputs, as the values are correctly populated (and cleared!) when we use the action attribute to submit





















This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
