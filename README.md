<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT -->
<br />
<div align="center">
<img src="./src/images/turnerscars_logo_1line_horz_true-rgb-desktop.png">
  </a>

<h3 align="center">Calculating a car value for Turners Car Insurance</h3>

  <p align="center">
    Mission 3
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Here is my Mission 3 for LV5 Advanced Software Development. For this project, I created an API that takes 2 parameters as input in JSON format that includes - the "model" (e.g. "Civic") and a numeric "year" of a car (e.g. 2014).  And the output is a JSON format with the suggested value for the car, such as "$6,614".  Here are the example specifications and business rules of conversion:

INPUT

{ model: "Civic"; year: 2014 }

OUTPUT

{ car_value: 6614 }

ERROR OUTPUT

{ error: "there is an error"}

BUSINESS RULES

Car_value is calculated by adding up the positions of alphabets of the letters in the name, times a hundred, and add the year value.  Position of alphabet means the letter in the order of alphabets (e.g. A is the first letter, so it is 1.  Z is the last letter, so it is 26).  Space and any other signs are ignored.   For example, a "Civic" in year 2014 will be worth (3 + 9 + 22 + 9 + 3) * 100 + 2014 = $6,614.  If input values are not valid, return an error.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Typescript
<br>
TS-Node

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

You can copy the link by clicking on code and it should reveal the link. Once you have copied the code, hop into your Visual Studio Code and type in your terminal

```
 git clone https://github.com/chaoxinnhin/Mission-3-LV5-ADV.git
```

That should clone this repository into your files. Make sure to open the directory into your terminal and enter the following:

```
 ts-node server.ts
```

and 

```
yarn test
```

### Prerequisites

In case you haven't installed Node packages and testing kits for typescript, just make sure to go through the link below and it will give you a step by step guide. You will have to enter them in your terminal for everything to work.

```
https://jestjs.io/docs/getting-started
```
```
yarn add -D typescript ts-node-dev @types/node @types/express
```

<!-- CONTACT -->

## Contact

Chao Xin - chaoxin.nhin@gmail.com

Project Link: https://github.com/chaoxinnhin/Mission-3-LV5-ADV.git

<p align="right">(<a href="#readme-top">back to top</a>)</p>
