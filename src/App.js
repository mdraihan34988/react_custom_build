import React from "react";
import "App.css";
import ImageFile from "./download.png";
import BabelFile from "./exb.png";
import WebpackFile from "./exu.png";

const App = () => (
    <div>
        <div><img className="center" src={ImageFile} alt="image"/></div>
        <h1>Manual Set Up of React Project in Easy Steps</h1>
        
        <div>
            <ol>
                <li>
                    <p>"npm init -y" command </p>
                        <span>
                            (create package.json file - this file hold   information about my project like which packeges libraries we are using in this project listed in package.json file. This file contains all the dependencies of my project)
                        </span>
                    
                </li>
          
                <li>
                    <p>"npm install react react-dom" command</p>
                        <span>
                            (created node_modules and package-lock.json. package-lock.json lock the version that we are using in my project. It helps us to lock version of deferent package that we use in my project because the packages update version could hamper my project)
                        </span>
                    
                </li>
            
                <li>
                    <p>"npm install @babel/core @babel/preset-env @babel/preset-react babel-loader" command</p>
                        <ul>
                            <li>babel/core: babel/core is the basic package.</li>
                            <li>babel/preset-env: babel/preset-env is allow to use modern javascript code and it's automatically transpile into older javascript code that supports all the browser.</li>
                            <li>babel/preset-react: babel/preset-react is allow to take jsx code and turn jsx to vanila react code. It's basically transpile the jsx code.</li>
                            <li>babel-loader: babel-loader is package that connect babel to webpack. When my project goes online(browser), it does not have react, react-dom or all the other packages that we installed in my project. So, webpack in react code and all packages or dependencies it takes all together and create final javascript file to make my project into all the browser. Webpack package combine (my code, react, react-dom, all packges and libraries) and create javascript code which can serve into web. We can also added babel(transpiler), minify or different packages to optimize my code (minify css).</li>
                        </ul>
                    
                </li>
            
                <li>
                    <p>Set Up babel file 
                    </p>
                    <img src={BabelFile} alt="babel File"/>
                </li>
            
                <li>
                    <p>"npm install webpack webpack-cli webpack-dev-server" command</p>
                        <span>
                            (webpack-dev-server allows us to use webpack development environment.)
                        </span>
                        <ul>
                            <li>"npm install html-webpack-plugin" command <span>(for html plugin) this package find my html file and after bulid the project it automatically link with the final javascript file.</span></li>
                            <li>" npm install style-loader css-loader" command <span>(css loader) this package is need to load css file.</span></li>
                            <li>"npm install --dev file-loader" command <span>(file loader) this package is need to load any file. --dev is used to tell the package is needed for dovelopment environment don't want the code added into final production.</span></li>
                        </ul>
                    
                </li>
            
                <li>
                    <p>Set up webpack config file.
                    </p>
                    <img src={WebpackFile} alt="webpack File"/>
                </li>
            
                <li>
                    <p> create src folder where all my react code would be. Create app.js and index.js. app.js have my jsx code and index.js render app.js into root basically here we tells which component load where.
                    </p>
                    
                </li>
            
                <li>
                    <p>create index.html file.
                    </p>
                    
                </li>
            
                <li>
                    <p>at package.json add webpack when script start add "webpack-dev-server --hot --open" at script start. basically when my script run it automatically start the webpack server and "webpack --config webpack.config.js --mode production" added to script bulid.
                    </p>
                    
                </li>
            </ol>
        </div>
        <div>
             <a href="https://github.com/mdraihan34988/react_custom_build" style={{cursor:"pointer",textDecoration:"none"}} > <span style={{fontSize:"20px"}}>Source Code</span></a>
        </div>
    </div>
);

export default App;