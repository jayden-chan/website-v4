const PRINT_MODE = false;

const config = {
  URL: JSON.stringify('jayden-chan-staging.surge.sh'),
  OUTPUT_DIR: JSON.stringify('./build'),
  PRINT_MODE: JSON.stringify(PRINT_MODE),
  TEXT_COLOR: PRINT_MODE ? 'black' : 'white',
  BACKGROUND_COLOR: PRINT_MODE ? '#E0DDD5' : '#1B1F22',
  LINKEDIN: JSON.stringify('jaydencn7'),
  EMAIL: JSON.stringify('jaydencn7@gmail.com'),
  GITHUB: JSON.stringify('jayden-chan'),
  PHONE: JSON.stringify('(403) 874-9705'),
};

module.exports = config;
