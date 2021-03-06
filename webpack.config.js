const path = require ('path')
const HtmlWebPackPlugin = require ('html-webpack-plugin')
const ReactRefreshWebPackPlugin = require ('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelopment ? 'development': 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //em caso de error, o devtool do google mostrara o codigo original
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //entry diz qual é o arquivo raiz da aplicação]
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'], //especificando qual tipo de arquvio ele consegue ler
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),//cria a automatização da reinderização da aplicação
        hot: true,
    },
        plugins: [
            isDevelopment && new ReactRefreshWebPackPlugin(),
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            })
        ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.jsx$/, //REGRA DE NEGOCIO, nesse objeto estou verificando se o arquivo é jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                },
            },
            {
                test: /\.scss$/, //REGRA DE NEGOCIO, nesse objeto estou verificando se o arquivo é css
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    }
}

//As boas praticas para que a barra no caminho do arquivo não dê erro é importar o path atráves do require
//usamos o require pois ele é o modo de importação do node, e assim rescrevemos como está ali em cima o caminho
//o __dirname ira colocar a barra do modo certo em cada navegador