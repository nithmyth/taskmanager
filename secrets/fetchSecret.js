const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const fetchSecret = async (name) => {
  const secretClient = new SecretManagerServiceClient();
  const [secret] = await secretClient.accessSecretVersion({
    name,
  });
  return secret.payload.data.toString('utf8');
};

module.exports = fetchSecret;
