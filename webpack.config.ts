import path from "path";
import webpack from "webpack";

const configCallback = (env: { [key: string]: string }, argv: webpack.Configuration): webpack.Configuration => {
    const mode = argv.mode || "development";
    console.log("running webpack with mode:", mode);

    const config: webpack.Configuration = {
        mode,
        entry: {
            "index": "./src/index.ts",
        },
        output: {
            filename: mode === "production" ? "[name].min.js" : "[name].js",
            path: path.resolve(__dirname, "lib"),
            libraryTarget: "umd",
            library: "Yukikaze",
            umdNamedDefine: true,
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            }],
        },
    };

    if (mode === "development") {
        config.devtool = "inline-source-map";
    }

    return config;
};

export default configCallback;
