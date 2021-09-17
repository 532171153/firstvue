/**
 * vue使用less
 * npm install --save-dev less less-loader css-loader style-loader // vue-cli 使用高版本less-loader报错
 * webpack.base.conf.js  ==>
   rules: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
   ]
 */
