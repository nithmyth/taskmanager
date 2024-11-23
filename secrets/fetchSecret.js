const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

const fetchSecret = async (name) => {
  const fullName = `projects/${process.env.PROJECT_ID}/secrets/${name}/versions/latest`;
  const secretClient = new SecretManagerServiceClient();
  const [secret] = await secretClient.accessSecretVersion({
    name: fullName,
  });
  return secret.payload.data.toString('utf8');
};

module.exports = fetchSecret;
