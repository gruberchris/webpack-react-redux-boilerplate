const testContext = require.context('.', true, /.spec\.jsx?$/);
testContext.keys().forEach(testContext);

const componentsContext = require.context('../app', true, /^((?!index).)*\.jsx?$/);
componentsContext.keys().forEach(componentsContext);
