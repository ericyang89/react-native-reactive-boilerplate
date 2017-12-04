import axios from 'axios';

const tag = () => axios('/post/tags').then(x => console.tron.log(x));

export { tag };
