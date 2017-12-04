import axios from 'axios';

const tag = () => axios('/post/tags');

export { tag };
