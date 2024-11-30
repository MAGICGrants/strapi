export default ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        credentials: {
          accessKeyId: env("HETZNER_BUCKET_ACCESS_KEY_ID"),
          secretAccessKey: env("HETZNER_BUCKET_ACCESS_SECRET"),
        },
        region: env("HETZNER_BUCKET_REGION"),
        endpoint: env("HETZNER_BUCKET_ENDPOINT"),
        params: {
          Bucket: env("HETZNER_BUCKET_NAME"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
