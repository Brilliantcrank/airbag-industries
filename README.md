# Airbag Industries

## Get Started

### Installing Hugo

Airbag is built on Forestry and Hugo. To install Hugo run:

```(shell)
brew install hugo
```

Verify the install:

```(shell)
hugo version
```

### Running the Local Server

Start the hugo server:

```(shell)
hugo server -D
```

or use NPM scripts:

```(shell)
npm start
```

## How to Compile CSS

CSS is created using a combination of Tailwinds and PostCSS processing using Gulp.

### Make sure you first have node installed

In terminal, check for the version of node installed on your computer. If none is found, [install the latest version of nodejs from here](https://nodejs.org/en/).

```(shell)
node -v
```

### Install packages

From the project's root directory in the terminal, install node packages:

```(shell)
npm install
```

Then make whatever changes you like to the CSS. There is [helpful documentation of Tailwinds here](https://tailwindcss.com/). Feel free to ask @stephencaver for any advice or if you have specific questions. :)

Once you've finished, you need to compile the CSS and produce a new CSS file for the browser to use. This is handled by Gulp, a javascript build system.

In terminal, in the project root directory, run this command:

```(shell)
gulp
```

It will build the new CSS files that can then be committed and pushed to github (and from there, onto Netlify).
