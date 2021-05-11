import remark from 'remark'; 
import html from 'remark-html';

const processMarkdown = async (markdown) => { 
  const process = await remark() 
    .use(html, {sanitize: true}) 
    .process(markdown);

  return process.toString(); 
};

export default processMarkdown;