// sonar-project.js - Configuration pour Node.js
module.exports = {
  serverUrl: 'http://sonarqube:9000',
  token: process.env.SONAR_TOKEN,
  options: {
    'sonar.projectKey': 'nodejs-app',
    'sonar.projectName': 'NodeJS Application Demo',
    'sonar.projectVersion': process.env.BUILD_NUMBER || '1.0.0',
    'sonar.sources': 'src',
    'sonar.tests': 'test',
    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    'sonar.testExecutionReportPaths': 'test-results.xml',
    'sonar.coverage.exclusions': [
      'test/**/*',
      'coverage/**/*',
      'node_modules/**/*'
    ].join(','),
    'sonar.cpd.exclusions': [
      'test/**/*'
    ].join(',')
  }
};
