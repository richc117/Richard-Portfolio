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

    var formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC"
    });

    var parsed;
    if (value instanceof Date) {
      parsed = value;
    } else if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      parsed = new Date(value + "T00:00:00Z");
    } else {
      parsed = new Date(value);
    }

    if (isNaN(parsed.getTime())) return String(value);

    return formatter.format(parsed);
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
