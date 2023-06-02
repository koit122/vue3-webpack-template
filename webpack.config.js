const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
module.exports={
  resolve:{
    extenstions:['.js','.vue'],
    alias:{
      '~':path.resolve(__dirname, 'src'),
      'assets':path.resolve(__dirname, 'src/assets')
    }
  },
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean:true
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:[
          'vue-loader'
        ]
      },
      {
        test:/\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/, //제외할 경로
        use:[
          'babel-loader'
        ]
      },
      {
        test:/.\(png|jpe?g|gif|webp)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  },
  //번들링 후 결과물의 처리 방식 등 다양한 플러인들을 설정
  plugins:[
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns:[
        {from:'static'}
      ]
    }),
    new VueLoaderPlugin()
  ],
  devServer:{
    host:'localhost',
    port:8080,
    hot:true
  }
}
