const path = require('path');

/**
 * @type {import('next-react-svg').NextReactSvgConfig}
 */
const nextReactSvgConfig = {
  include: path.resolve(process.cwd(), 'public/img'),
};

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    edge: true,
  }
};

const withReactSvg = require('next-react-svg')(nextReactSvgConfig);

module.exports = withReactSvg(nextConfig);