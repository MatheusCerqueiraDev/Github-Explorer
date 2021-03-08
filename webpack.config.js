const path = require ('path')
const HtmlWebPackPlugin = require ('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map', //em caso de error, o devtool do google mostrara o codigo original
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //entry diz qual é o arquivo raiz da aplicação]
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'], //especificando qual tipo de arquvio ele consegue ler
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')//cria a automatização da reinderização da aplicação
    },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            })
        ],
    module: {
        rules: [
            {
                test: /\.jsx$/, //REGRA DE NEGOCIO, nesse objeto estou verificando se o arquivo é jsx
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
}

//As boas praticas para que a barra no caminho do arquivo não dê erro é importar o path atráves do require
//usamos o require pois ele é o modo de importação do node, e assim rescrevemos como está ali em cima o caminho
//o __dirname ira colocar a barra do modo certo em cada navegador