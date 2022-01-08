const renderLicenseBadge = (license) => {
  let licenseType = license[0];
  let yourLicense = '';
  if (licenseType === 'Apache 2.0') {
    yourLicense = `![![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (licenseType === 'Boost Software 1.0') {
    yourLicense = `![![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (licenseType === 'ISC') {
    yourLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (licenseType === 'MIT') {
    yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
    yourLicense = '';
  }
  return yourLicense;
};

module.exports = { renderLicenseBadge };
