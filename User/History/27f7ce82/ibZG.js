module.exports = {
    module: {
        rules: [


            {
                test: /node_modules[\\/]@walletconnect/,
                loader: require.resolve('esbuild-loader'),
            },

        ]
    }
}