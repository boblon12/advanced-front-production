import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
      new HtmlWebpackPlugin({
        template: paths.html,
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthas:8].css',
        chunkFilename: 'css/[name].[contenthas:8].css'
      }),
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev)
      }),
      new BundleAnalyzerPlugin(
        { analyzerMode: process.env.STATS as 'server' || 'disabled' },
        )
    ]
    if (isDev) {
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new ReactRefreshWebpackPlugin({
        overlay: false,
      }));
    }
    return plugins
}