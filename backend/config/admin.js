module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bd0e81d95e1dbc31685499720160d5d3'),
  },
});
