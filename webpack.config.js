const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Você pode modificar a config aqui se quiser (ex: adicionar plugins)
  return config;
};
