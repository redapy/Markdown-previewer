import React from 'react';
import marked from 'marked';

const Preview = (props) => {
    
    marked.setOptions({
        renderer: new marked.Renderer(),
        breaks: true,
      });

    let rawHtml = marked(props.content);
    
    return ( 
            <div id="preview" className="preview" dangerouslySetInnerHTML={{ __html: rawHtml }}>
            </div>
     );
}
 
export default Preview;