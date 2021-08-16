import marked from 'marked';
import React from 'react';

const Preview = (props) => {
    let marked = require("marked");

    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        
      });
    let rawHtml = marked(props.content);
    
    return ( 
        
            
            <div id="preview" className="preview"
            dangerouslySetInnerHTML={{ __html: rawHtml }}
            >
            </div>

        
     );
}
 
export default Preview;