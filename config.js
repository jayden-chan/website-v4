const config = print_mode => {
  return {
    URL: JSON.stringify('jayden-chan-staging.surge.sh'),
    OUTPUT_DIR: JSON.stringify('./build'),
    PRINT_MODE: JSON.stringify(print_mode),
    TEXT_COLOR: print_mode ? 'black' : 'white',
    BACKGROUND_COLOR: print_mode ? '#E0DDD5' : '#1B1F22',
    LINKEDIN: JSON.stringify('jaydencn7'),
    EMAIL: JSON.stringify('jaydencn7@gmail.com'),
    GITHUB: JSON.stringify('jayden-chan'),
    PHONE: JSON.stringify('(403) 874-9705'),
  };
};

module.exports = config;
