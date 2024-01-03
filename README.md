# Currency Wallet

[Click to find out how it works!](https://sadkowa.github.io/currency-wallet/)

### Overview
Build an application that calculates potential profit or loss from owned currencies. This project allows users to manage their currency holdings and track financial gains or losses based on real-time exchange rates provided by API (https://openexchangerates.org/api/)

### Features

Users can input the following details:
- Type of owned currency
- Quantity of currency
- Purchase date
- Purchase price (automatically filled using an API based on the selected date, which can be modified by the user).


---

### Solutions

In this project, I used:

- LocalStorage - to save information about purchases and color theme
- API - to get latest and historical currency rates and list of currencies 
- Redux - to manage state (separate storage for API and localStorage)
- Styled-components and Theme Provider for styling
- Pagination - when list of purchases is greater than 4, the next page in table is created.

<div style="display: flex; flex-wrap:wrap; width: 100%; gap: 5px">
    <!-- <img style="width: auto; height: 250px" src="./src/assets/Capture - form.JPG">
    <img style="width: auto; height: 250px" src="./src/assets/Capture - colorPicker.JPG">
    <img style="width: 99%; height: auto"src="./src/assets/Capture - table.JPG"> -->
    <img style="flex-basis: 0px" src="./src/assets/Capture - form.JPG">
    <img style="flex-basis: 70%" src="./src/assets/Capture - colorPicker.JPG">
    <img style="width: 99%; height: auto"src="./src/assets/Capture - table.JPG">
</div>

---

## The technologies used

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![REST API](https://img.shields.io/badge/REST%20API-4f736d?style=for-the-badge&logoColor=white)
![REDUX](https://img.shields.io/badge/Redux-%23764ABC?style=for-the-badge&logo=redux)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Styled-components](https://img.shields.io/badge/styled_components-%23DB7093?style=for-the-badge&logo=styled-components&logoColor=white)


## Installation and configuration

1. Clone the repository.

    In the project, [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) have been  used. If you have them installed, enter the following in the terminal:

2. Install dependencies using:
````
npm i
````

3. To run the application in developer mode, use the following command:

````
npm start
````

    The application is available at the following address: 

````
http://localhost:3000
`````

---