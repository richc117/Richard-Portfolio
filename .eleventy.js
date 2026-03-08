module.exports = function (eleventyConfig) {
  var pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/";

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({
    "src/assets/favicon/favicon.ico": "favicon.ico"
  });

  eleventyConfig.addCollection("writings", function (collectionApi) {
    return collectionApi.getFilteredByTag("writings");
  });

  eleventyConfig.addFilter("formatDate", function (value) {
    if (!value) return "";
    var parsed = value instanceof Date ? value : new Date(value);
    if (isNaN(parsed.getTime())) return String(value);

    return parsed.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    });
  });

  return {
    pathPrefix: pathPrefix,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
