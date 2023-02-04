import { RuleSetRule } from "webpack"

export function buildLoaders () : RuleSetRule[] {

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
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }
       
    return [
        tsloader,
        cssloader
      ]
}