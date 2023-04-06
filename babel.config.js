const plugins = [
	[
		require.resolve("babel-plugin-module-resolver"),
		{
			root: ["./src/"],
			alias: {
				screens: "./src/screens",
				components: "./src/components",
				contexts: "./src/contexts",
				types: "./src/types",
				utils: "./src/utils",
				hooks: "./src/hooks"
			},
			extensions: [
				".ios.js",
				".android.js",
				".js",
				".jsx",
				".ts",
				".tsx",
				".json",
				".native.js"
			]
		}
	]
];

module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [...plugins]
};
