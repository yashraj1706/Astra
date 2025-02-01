import { convertTsxToJsx } from 'tsx-to-jsx';

const srcDirectory = './src'; // Path to your TypeScript files
const destDirectory = './js-src'; // Path to store converted JavaScript files

await convertTsxToJsx(srcDirectory, destDirectory);
