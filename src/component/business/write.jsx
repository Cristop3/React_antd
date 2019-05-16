import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


class Write extends React.Component{
    constructor(props){
        super(props)
        this.state={editorState:EditorState.createEmpty()}
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    render(){
        return (
            <div className="writeContent">
                <Editor
                    editorState={this.state.editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    localization={{ locale: 'zh' }}
                    onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        )
    }
}

export default Write