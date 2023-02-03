import { RuleSetRule } from "webpack"

export function buildLoaders () : RuleSetRule[] {
    const tsloader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
      
    return [
        tsloader,
      ]
}