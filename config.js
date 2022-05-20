const config = (print_mode) => {
  return {
    PRINT_MODE: print_mode,
    TEXT_COLOR: print_mode ? "black" : "white",
    // BACKGROUND_COLOR: print_mode ? "#e8e6e3" : "#1B1F22",
    BACKGROUND_COLOR: print_mode ? "#FFFFFF" : "#101010",
    ...Object.fromEntries(
      Object.entries({
        URL: "https://jayden.codes",
        TERM: "4B",
        CSS_BASE: "",
        R_CSS_BASE: "..",
        OUTPUT_DIR: "./build",
        LINKEDIN: "jaydencn7",
        EMAIL: "jaydencn7@gmail.com",
        GITHUB: "jayden-chan",
      }).map(([key, val]) => [key, `"${val}"`])
    ),
  };
};

module.exports = config;
