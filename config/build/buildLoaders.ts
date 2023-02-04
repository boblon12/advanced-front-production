import { BuildOptions } from './types/config';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import { RuleSetRule } from "webpack"

export function buildLoaders ({isDev}: BuildOptions) : RuleSetRule[] {

    //Если не успользуем тс, нужно подключать babel,
    //В тс лоадере jsx формат идет из коробки
    const tsloader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    
    const cssloader =  {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: isDev ? '[name]__[local]__[hash:base64:8]' : '[hash:base64:8]'
            },
          
          }
        },
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }
       
    return [
        tsloader,
        cssloader
      ]
}