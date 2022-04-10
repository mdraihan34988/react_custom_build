# react_custom_build
Here I set up react manually.
# clone the repo
# install node_modules by - npm i
# run - npm start
-- descripttion --
1. npm init -y 
    (create package.json file - this file hold   information about my project like which packeges libraries we are using in this project listed in package.json file. This file contains all the dependencies of my project)
2. npm install react react-dom 
    (created node_modules and package-lock.json. package-lock.json lock the version that we are using in my project. It helps us to lock version of deferent package that we use in my project because the packages update version could hamper my project)
3. npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
    i. babel/core is the basic package.
    ii. babel/preset-env is allow to use modern javascript code and it's automatically transpile into older javascript code that supports all the browser.
    iii. babel/preset-react is allow to take jsx code and turn jsx to vanila react code. It's basically transpile the jsx code.
    iv. babel-loader is package that connect babel to webpack. When my project goes online(browser), it does not have react, react-dom or all the other packages that we installed in my project. So, webpack in react code and all packages or dependencies it takes all together and create final javascript file to make my project into all the browser. Webpack package combine (my code, react, react-dom, all packges and libraries) and create javascript code which can serve into web. We can also added babel(transpiler), minify or different packages to optimize my code (minify css).
4. Set Up babel file
5. npm install webpack webpack-cli webpack-dev-server
     webpack-dev-server allows us to use webpack development environment.
     npm install html-webpack-plugin (for html plugin)
     this package find my html file and after bulid the project it automatically link with the final javascript file.
      npm install style-loader css-loader (css loader) this package is need to load css file.
      npm install --dev file-loader (file loader) this package is need to load any file. --dev is used to tell the package is needed for dovelopment environment don't want the code added into final production.
6. Set up webpack config file.
7. create src folder where all my react code would be. Create app.js and index.js. app.js have my jsx code and index.js render app.js into root basically here we tells which component load where.
8. create index.html file.
9. at package.json add webpack when script start add "webpack-dev-server --hot --open" at script start. basically when my script run it automatically start the webpack server and "webpack --config webpack.config.js --mode production" added to script bulid.
