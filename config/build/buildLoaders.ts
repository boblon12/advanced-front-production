import { BuildOptions } from './types/config';
import { RuleSetRule } from "webpack"
import { buildCssLoader } from './loaders/buildCssLoader';

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

    const cssloader =  buildCssLoader(isDev)

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