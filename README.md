# Namaste React 
# Episode 1 
- Basics of html, css, react
# Episode 2 : 
- npm init to create package.json , 
- install parcel - npm install -D parcel, 
- command to host app in server : npx parcel index.html , for production : npx parcel build index.html

# .map file under dist folder
-The .map files in the dist folder of a React application are generated automatically by Parcel as part of the build process. They are source maps, which are used to map the generated code back to the original source code. This is useful for debugging, as it allows you to see the original code in the developer tools, even though the generated code may be minified or obfuscated.


# Parcel Uses
- Dev Build
- Local Server
- HRM = Hot Module Replacement / Hot Reloading
- it uses File Watching Algorithm written in C++
- Faster Builds due to Caching
- Image Optimization
- Minification of Files
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - when App is hoisted, App can be opened inside, IE, Chrome, Firefox etc.. it takes care of all that, (support older browsers)
- Error Handling, Diagnostic
- feature to execute app in https
- Tree Shaking Algo - remove unused code 
- create different DEV and Prod Build