const config = (print_mode) => {
  return {
    URL: '"jayden-chan.me"',
    TERM: '"3B"',
    CSS_BASE: '""',
    R_CSS_BASE: '".."',
    OUTPUT_DIR: '"./build"',
    PRINT_MODE: print_mode,
    TEXT_COLOR: print_mode ? "black" : "white",
    BACKGROUND_COLOR: print_mode ? "#e8e6e3" : "#1B1F22",
    // BACKGROUND_COLOR: print_mode ? "#FFFFFF" : "#1B1F22",
    LINKEDIN: '"jaydencn7"',
    EMAIL: '"jaydencn7@gmail.com"',
    GITHUB: '"jayden-chan"',
    PHONE: '"(403) 874-9705"',
  };
};

module.exports = config;
