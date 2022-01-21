module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6c06e42f55b2d9efd0e60942e9d81ed1'),
  },
});
