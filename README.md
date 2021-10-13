# Markdown-previewer
- Markdown previewer is an app that allows users to write GitHub flavored markdown into an editor, and to preview it instantly on the Previewer(output).
- The editor is a controlled input by the `useState` hook that updates its value as the writer is typing.
- The GitHub flavored markdown is parsed using the 'react-marked'. The option `break` has been set to true with `marked.setOptions()`, so the markdown previewer interprets carriage returns and renders them as `br` elements.
- The main challenge on this project was to find out about `dangerouslySetInnerHTML` to render the raw HTML, we get from marked, properly. Without it, the text or content coming from the marked will be just a string, but when we use `dangerouslySetInnerHTML` React becomes aware of the HTML tags and renders them properly.
## Resources
- [Basic writing and formatting syntax of GitHub flavored markdown](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [The react-marked documentation](https://www.npmjs.com/package/react-marked)
## Installation
- First use `npm install` to install all the dependencies.
- Start the devolopement server  `npm start`.
- For more information please reffer to [react-app](/react-app.md)
## Try it !!
https://redapy.github.io/Markdown-previewer/
