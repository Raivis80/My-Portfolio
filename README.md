
# My Portfolio
![img](project_files/banner.JPG)
## *The live site link can be found [Here](https://raivis80.github.io/My-Portfolio/)*
### Table of contents

1. [Introduction](#Introduction)
1. [UI](#UI)
1. [Design](#Design)
1. [Features](#Features)   
1. [Technologies and Frameworks](#Technologies-and-Frameworks)
1. [Deployment](#Deployment)
1. [Credits](#Credits)
1. [License](#License)

## Introduction

An online representation of the work I have created provides a convenient way for potential clients to view my skills and services.


The website is build using primarily with React library combined with HTML5, CSS3, JavaScript.

## UI
### **Functionality Requirements**
- Website Navigation
   - Links for website template sections.
   - Responsive navigation
- Landing page
    - React library for building user interfaces.
    - Use of MUI for responsive design.
    - Use of Cool JavaScript dynamic Effects.
    - Social Media links to external resources.
- Contact form.
   - Javascript API form control or similar

### **Content Requirements**
- NavBar
   - Navigation Links
   - Site brand name
- Landing Page
   - My name
   - What i Do
   - Short description
- About
    - Lond what i do
    - My Stack
    - Top priorities 
- Portfolio
    - Image
    - Title
    - Description 
- Contact
   - Contact Form
   - Social Links
- footer
   - Copyright
   - Social Links

### **Wireframes**

- ![Landing page wireframe](project-files/wireframes/Desktop.png)

## Design
### **Color Scheme**
- Color scheme used through out the site [coolors.co](https://coolors.co/855433-b37142-8d6245-292a2b)

### **Fonts**
- Body main text font family Roboto As a backup sans-serif.
- Header-text font family Lato As a backup sans-serif.

### **Media**
All the images was supplied from
## Features 
### **Existing Features**

- **Navigation**

- **Home** 

- **Portfolio**

- **Contact**

- **Footer**

## **Technologies and Frameworks**

### **Languages Used**
-   [HTML5](https://en.wikipedia.org/wiki/HTML5) Hypertext Markup Language (HTML)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) Cascading Style Sheets (CSS)
-   [JavaScript](https://www.javascript.com/) Interactive functionality.

### **Frameworks, Libraries & Programs Used**
- [React](https://reactjs.org/) A JavaScript library for building user interfaces
- [MUI:](https://mui.com/) was used to style the website.
- [Google Fonts:](https://fonts.google.com/) were used throughout the site.
- [Font Awesome:](https://fontawesome.com/) was used throughout the website to add icons.
- [jQuery:](https://jquery.com/) came with MUI.
- [Git](https://git-scm.com/) Git was used for version control.
- [GitHub:](https://github.com/) used to store the projects code.
- [Figma:](https://www.figma.com/) was used to create the wire frames.

## **Deployment**
### **Prerequisites**
Download the Node.js installer for your platform and install it
[node.js](https://nodejs.org/en/download/)

Install MUI, the world's most popular React UI framework
- npm install @mui/material @emotion/react @emotion/styled

React Reveal is high performance animation library for React
- npm i react-reveal --save

Install React implementation of the Intersection Observer API
- npm install react-intersection-observer --save

Install material icons
- npm install @mui/icons-material

Install github pages for deployment
- npm install gh-pages --save-dev

### **Deploying on GitHub Pages**
1. [Clone](#Creating-a-Clone) Or [fork]{#Forking-the-Repository) repository first.
1. Install all dependencies [Dependencies](#Prerequisites)
1. Change settings to package.jason
   - "homepage": "http://<github_user_name>.github.io/<github_repo_name>"
   - Add to "scripts" 
      ```json
         "scripts": {
         "start": "react-scripts start",
         "predeploy": "npm run build", //add this
         "deploy": "gh-pages -d build", //add this
         "build": "react-scripts build",
         "test": "react-scripts test",
         "eject": "react-scripts eject"
         },
      ```
1. Now run the deploy script to deploy the project.
   - npm run deploy
1. Done

### **Forking the Repository**
1. Log into [GitHub](https://github.com/login) "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
1. Locate the [GitHub Repository](https://github.com/Raivis80/My-Portfolio)"Link to GitHub Repo")
1. At the top of the repository, on the right side of the page, select "Fork"
1. You should now have a copy of the original repository in your GitHub account.

### **Creating a Clone**
1. Install the [GitPod Browser](https://www.gitpod.io/docs/browser-extension/) "Link to Gitpod Browser extension download") Extension for Chrome.
1. After installation, restart the browser.
1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
1. Locate the [GitHub Repository](https://github.com/Raivis80/My-Portfolio)"Link to GitHub Repo").
1. Click the green "GitPod" button in the top right corner of the repository.
This will trigger a new gitPod workspace to be created from the code in github where you can work locally.

**How to run this project within a local IDE, such as VSCode:**
1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
1. Locate the [GitHub Repository](https://github.com/Raivis80/My-Portfolio\)"Link to GitHub Repo").
1. Under the repository name, click "Clone or download".
1. In the Clone with HTTPs section, copy the clone URL for the repository.
1. In your local IDE open the terminal.
1. Change the current working directory to the location where you want the cloned directory to be made.
1. Type 'git clone', and then paste the URL you copied in Step 3.
```
git clone https://github.com/Raivis80/My-Portfolio
```
8. Press Enter. Your local clone will be created.

  Further reading and troubleshooting on cloning a repository from GitHub [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository "Link to GitHub troubleshooting") 

## Credits 
### **Code**
-  [stackoverflow.com](https://stackoverflow.com/): Useful website for code tips.
### Content 

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.