require('dotenv').config()

module.exports = {
  env: {
    X_API_KEY: process.env.X_API_KEY,
    BASE_END_POINT: process.env.BASE_END_POINT,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
}
