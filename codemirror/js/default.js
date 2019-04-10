/*
$(document).ready(function(){

	var code = $(".codemirrorEditor")[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true
	});
});

var textArea = document.getElementById("codemirrorEditor");
			var editor = CodeMirror.fromTextArea(textArea, {
				lineNumbers : true
				value: "hello"

			});
*/
var textArea = document.getElementById("codemirror-textarea");
			var editor = CodeMirror.fromTextArea(textArea, {
				
				lineNumbers: true,
				indentUnit: 4,
				theme: "monokai",
				viewportMargin: 15			

			}).setValue("#Write Python Code Here \n");