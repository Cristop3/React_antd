import React from 'react';
import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'
import 'simplemde/dist/simplemde.min.css'

class Write extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount = () => {
    this.smde = new SimpleMDE({
      element: document
        .getElementById('editor')
        .childElementCount,
      autofocus: true,
      autosave: true,
      previewRender: function (plainText) {
        return marked(plainText, {
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) {
            return highlight
              .highlightAuto(code)
              .value;
          }
        });
      },
      insertTexts: {
        horizontalRule: [
          "", "\n\n-----\n\n"
        ],
        image: [
          "![](http://", ")"
        ],
        link: [
          "[", "](http://)"
        ],
        table: [
          "", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Te" +
              "xt     | Text      | Text     |\n\n"
        ]
      },
      toolbar: [
        'bold',
        'italic',
        'heading',
        '|',
        'quote',
        'code',
        'table',
        'horizontal-rule',
        'unordered-list',
        'ordered-list',
        '|',
        'link',
        'image',
        '|',
        'side-by-side',
        'fullscreen',
        '|',
        'heading-smaller',
        'heading-bigger',
        'heading-1',
        'heading-2',
        'heading-3',
        'clean-block',
        'preview', {
          name: 'guide',
          action() {
            const win = window.open('https://github.com/riku/Markdown-Syntax-CN/blob/master/syntax.md', '_blank',);
            if (win) {
              // Browser has allowed it to be opened
              win.focus();
            }
          },
          className: 'fa fa-info-circle',
          title: 'Markdown 语法！'
        }
      ]
    })
  }

  render() {
    return (
      <div className="writeContent">
        <textarea id="editor"></textarea>
      </div>
    )
  }
}

export default Write