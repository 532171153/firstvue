/**
 * vue使用less
 * npm install --save-dev less less-loader css-loader style-loader
 * webpack.base.conf.js  ==>
   rules: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
   ]
 */
