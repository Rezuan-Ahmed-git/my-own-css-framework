
# My Own CSS Framework

I have attempted to create a CSS Framework or Library to learn how the other Frameworks(like bootstrap, tailwind, etc.) work behind the scene. I am astonished to discover the power of SASS.

## Demo live link

[MyOwnCSSFramework](https://my-own-css-framework-whst5t6fu-rezuan-ahmed-git.vercel.app/)

## Installation

Install my-project with npm

```bash
  npm install
  cd my-own-css-framework
```


## Purge CSS

I didn't purge css. Therefore, there are around 3956 lines of css codes. 
If you want to purge or, use only those css codes that is used only on your project then do the following,

1. Install a package called [gulp-purgecss](https://my-own-css-framework-whst5t6fu-rezuan-ahmed-git.vercel.app/)
```bash
  npm i gulp-purgecss --save-dev
```
2. Now open the gulpfile.js and replace the codes
```bash
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('myframework/**/*.scss').pipe(sass()).pipe(dest('css'));
}

function watchTask() {
  watch(['myframework/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);

```

## Lessons Learned

I have learnt how a css library or framework works behind the scene. 
1. SASS - It is on steroids. It provides superpower to CSS. We can use variables, conditionals, loops, functions, mixins etc.
2. Now I know how to make my CSS codes optimized.
3. I can create my own design system for my project.

I want to explore more. There is more to learn.







