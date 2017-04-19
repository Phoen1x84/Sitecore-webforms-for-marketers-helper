# Sitecore Webforms for Marketers Front-End Helper

This is intended to provide Front-End developers with base project that helps increase productivity for styling Webforms for Marketers by providing a modular preprocessor setup with all the CSS classes for each field type.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

* Visual Studio 2015 solution setup with a Sitecore project on your local machine

* Install Sitecore on your local machine and download and install the [compatible version](https://kb.sitecore.net/articles/779556) of Webforms for Markerters for you instance of Sitecore (this will install to your wwwroot directory). To help speed up this process I recommend using [Sitecore Instance Manager (SIM)](https://github.com/sitecore/sitecore-instance-manager), this will get you up and running with Sitecore in no time.

* Latest version of [node.js](https://nodejs.org/en/)

### Installing

1. Clone this repository to your local machine, this can be any directory.

2. Copy the sitecore modules folder into your Visual Studio project so you have a like for like setup as the wwwroot directory. This will allow copying files from your Visual Studio project to the wwwroot directory.

**Please not if the folder setup provided does not best suit your development needs copy the scss partial files into your local project separately and amend as required. The idea is to get Front-End developers creating custom stylesheets quickly and without overriding default WFFM styles**

3. Copy the Front-End src folder into your Visual Studio project

4. CD to your Visual Studio development directory and run ``` npm install ``` this will install all npm dependencies

5. Update gulpfile.js paths to match your local development folder(s)

6. Run ``` gulp ``` in the command line and this will start the watch task, any files changed will be pushed to the sitecore modules folder and then pushed to the wwwroot directory.

## Folder structure

Each folder contains matching field types that have been categorised in Webforms for Marketers. Each folder contains a sass partials that holds the selectors for the field type in that category.

```text
complex-types
  _captcha
  _credit-card
  _password-confirmation
list-types
  _checkbox-list
  _drop-list
  _list-box
  _radio-list
simple-types
  _checkbox
  _date-picker
  _date
  _email
  _file-upload
  _multi-line-text
  _number
  _password
  _single-line-text
  _sms-mms-telephone
  _telephone
```

### Basic Examples

Here is a basic example of what is provided in sass partials

```scss
// element container
.scfSingleLineTextBorder {

}

// element label
.scfSingleLineTextLabel {

}

// wraps the input field
.scfSingleLineGeneralPanel {

}

// selector on the input field
.scfSingleLineTextBox {

}

// help text container
.scfSingleLineTextUsefulInfo {

}

```

The main sass file that is compiled

``` scss
// Simple Types
@import "simple-types/_checkbox";
@import "simple-types/_date-picker";
@import "simple-types/_date";
@import "simple-types/_email";
@import "simple-types/_file-upload";
@import "simple-types/_multi-line-text";
@import "simple-types/_number";
@import "simple-types/_password";
@import "simple-types/_single-line-text";
@import "simple-types/_sms-mms-telephone";
@import "simple-types/_telephone";

// List Types
@import "list-types/_checkbox-list";
@import "list-types/_drop-list";
@import "list-types/_list-box";
@import "list-types/_radio-list";

// Complex
@import "complex-types/_captcha";
@import "complex-types/_credit-card";
@import "complex-types/_password-confirmation";

/* custom wffm styles end */
```

### Placeholder Folder

Is intended to store all form styles where possible and use the SASS ```scss @extend``` method inside the WFFM partial files to keep the code DRY. This is a method I've found works best for me and reduced the compiled file size significantly. 

If you'd prefer to use a different method feel free to do so.

```scss
// _form-patterns partial
%label {
  color: #222;
  margin: 10px 0;
}

// _single-line-text partial
.scfSingleLineTextLabel {
  @extend %label;
}
```

## Built With
* [sass](http://sass-lang.com/) - The preprocessor used
* [gulp](http://gulpjs.com/) - Used to generate the Front-End assets
* [NPM](https://www.npmjs.com/) - Dependency Management

## Authors

* **Matthew Neil** - *Initial work* - [Pheon1x84](https://github.com/Phoen1x84)
