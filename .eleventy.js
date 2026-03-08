module.exports = function (eleventyConfig) {
  function resolvePathPrefix() {
    if (process.env.ELEVENTY_PATH_PREFIX) {
      return process.env.ELEVENTY_PATH_PREFIX;
    }

    if (process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY) {
      var parts = process.env.GITHUB_REPOSITORY.split("/");
      var repo = parts[1] || "";
      var owner = parts[0] || "";
      if (repo && repo !== owner + ".github.io") {
        return "/" + repo + "/";
      }
    }

    return "/";
  }

  var pathPrefix = resolvePathPrefix();

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
