module.export = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};