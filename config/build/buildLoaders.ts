import { BuildOptions } from './types/config';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import { RuleSetRule } from "webpack"

export function buildLoaders ({isDev}: BuildOptions) : RuleSetRule[] {

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

    //Если не успользуем тс, нужно подключать babel,
    //В тс лоадере jsx формат идет из коробки
    const tsloader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

      const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };
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

    const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
          {
              loader: 'file-loader'
          }
      ]
    }
       
    return [
        fileLoader, 
        svgLoader,
        babelLoader,
        tsloader,
        cssloader,   
      ]
}