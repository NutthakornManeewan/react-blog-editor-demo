import React, { useState } from "react";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import toolbarConfig from "./toolbarConfig";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const BlogElement = props => {
	const [editorState, setEditor] = useState(EditorState.createEmpty());

	function handleEditorChange(editorStateChange) {
		setEditor(editorStateChange);
	}

	return (
		<div>
			<Editor
				editorState={editorState}
				onEditorStateChange={handleEditorChange}
				wrapperClassName="wrapper-class"
				editorClassName="editor-class"
				toolbarClassName="toolbar-class"
				toolbar={toolbarConfig}
				hashtag={{
					separator: " ",
					trigger: "#"
				}}
			/>
			<textarea
				disabled
				value={draftToHtml(
					convertToRaw(editorState.getCurrentContent())
				)}
			/>
		</div>
	);
};

export default BlogElement;
