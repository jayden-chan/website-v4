const config = (print_mode) => {
  return {
    PRINT_MODE: print_mode,
    TEXT_COLOR: print_mode ? "black" : "white",
    // BACKGROUND_COLOR: print_mode ? "#e8e6e3" : "#1B1F22",
    BACKGROUND_COLOR: print_mode ? "#FFFFFF" : "#1B1F22",
    ...Object.fromEntries(
      Object.entries({
        URL: "jaydenchan.xyz",
        TERM: "4A",
        CSS_BASE: "",
        R_CSS_BASE: "..",
        OUTPUT_DIR: "./build",
        LINKEDIN: "jaydencn7",
        EMAIL: "hello@jaydenchan.xyz",
        GITHUB: "jayden-chan",
      }).map(([key, val]) => [key, `"${val}"`])
    ),
  };
};

module.exports = config;
