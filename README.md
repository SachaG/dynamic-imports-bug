To reproduce the issue:

1. Run the app and check the size of `modules.js` in your browser's network tab.
2. Uncomment the `import()` in `App.jsx`. 
3. Check again. `modules.js` will be larger. 