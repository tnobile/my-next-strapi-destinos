import remark from 'remark'; 
import html from 'remark-html';

// process markdown to html and return 
const processMarkdown = async (markdown) => { 
  const process = await remark() 
    .use(html, {sanitize: true}) 
    .process(markdown.content);

  return process.toString(); 
};

export default processMarkdown;