# Sitecore Webforms for Marketers Helper

This is intended to provide Front-End developers with base project that helps increase productivity for styling Webforms for Marketers by providing a modular preprocessor setup with all the CSS classes for each field type.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Visual Studio 2015 solution setup with a Sitecore project on your local machine

Install Sitecore on your local machine and download and install the [compatible version](https://kb.sitecore.net/articles/779556) of Webforms for Markerters for you instance of Sitecore (this will install to your wwwroot directory). To help speed up this process I recommend using [Sitecore Instance Manager (SIM)](https://github.com/sitecore/sitecore-instance-manager), this will get you up and running with Sitecore in no time.

Latest version of [node.js](https://nodejs.org/en/)

### Installing

Clone this repository to your local machine, this can be any directory.

Copy the sitecore modules folder into your Visual Studio project so you have a like for like setup as the wwwroot directory. This will allow copying files from your Visual Studio project to the wwwroot directory.

**Please not if the folder setup provided does not best suit your development needs copy the scss partial files into your local project separately and amend as required. The idea is to get Front-End developers creating custom stylesheets quickly and without overriding default WFFM styles**

Copy the Front-End src folder into your Visual Studio project

CD to your Visual Studio development directory and run ``` npm install ``` this will install all npm dependencies

Update gulpfile.js paths to match your local development folder(s)

Run ``` gulp ``` in the command line and this will start the watch task, any files changed will be pushed to the sitecore modules folder and then pushed to the wwwroot directory.

## Deployment

TODO

## Built With
* [sass](http://sass-lang.com/) - The preprocessor used
* [gulp](http://gulpjs.com/) - Used to generate the Front-End assets
* [NPM](https://www.npmjs.com/) - Dependency Management

## Authors

* **Matthew Neil** - *Initial work* - [Pheon1x84](https://github.com/Phoen1x84)
