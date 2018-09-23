function extJS_toolbarGroups() {
	let customizeToolbar = function () {
		const wpTextbox1 = $('#wpTextbox1');

		wpTextbox1.wikiEditor('addToToolbar', {
			'section': 'extended',
			'groups': {
				'general': {
					'label': 'General'
				}
			}
		});
	};

	extJS_wikiEditorReady(customizeToolbar);
}

$(function () {
	extJS_toolbarGroups();
});