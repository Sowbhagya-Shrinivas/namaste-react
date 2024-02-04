# Namaste React 
# Episode 1 
- Basics of html, css, react
# Episode 2 : 
- npm init to create package.json , 
- install parcel - npm install -D parcel, 
- command to host app in server : npx parcel index.html , for production : npx parcel build index.html
# Episode 3:
- jsx
# Episode 4:
- building Food Delivery App from Scratch

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

# Food Ordering App Desing
/**
 * 
 * 1. Header Component
 *    - Logo
 *    - Nav Items
 * 2. Body Component
 *    - Search
 *    - RestaurantContainer
 *       - RestaurantCard
 *       - Image
 *       - Name Of Restaurant, Start Rating, cuisins,delivery tie
 * 3. Footer
 *     - Copyright
 *     - Links
 *     - Address
 *     - Contact
 */

# Episode 5
 # Two Types of Export/Import
 - Default Export / Import
    - export default Component;
    - import Component from "path"

 - Named Export/Import
    - export const Component;
    - import {Component} from "path";
 # React Hooks
   - useState() - Superpowerful State Variables and maintains state of component i.e update in UI
   - Imp : whenever state variable updates/changes, react re-renders the component i.e it triggers reconciliation cycle
   - useEffect()
   -  Important : React makes DOM operations superfast, that's y react appln are fast

# Episode 6
-  Microservices discussion
-  API calls
- useEffect() hook - it will be called after component renders.if we want to perform any task after rendering component then we have to write in useEffect() hook
- shimmer UI - for loading fake page till we get actual data

# Episode 7
- 2 types of Routing:
    - Client Side Routing
    - Server Side Routing

# Episode 8 
- UserClass LifeCycle:
   - Mounting Phase
      - Constructor(dummy)
      - Render (dummy)
      - <HTML Dummy>
      - Component DidMount
         - API call
         - this.setState -> State Variable is updated
   - UPDATE Phase
      - render (API Data)
      - <HTML (new API Data)>
      - componentDidupdate()
   - UnMounting
      - once the page exists it will call
