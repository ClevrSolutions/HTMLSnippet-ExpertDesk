define([
	'dojo/_base/declare',
	'mxui/widget/_WidgetBase',
	"dojo/dom-style",
	"dojo/html",
	"dojo/dom-attr"
], function (declare, _WidgetBase, domStyle, html, domAttr) {

	return declare('HTMLSnippet.widget.HTMLSnippet', [ _WidgetBase ], {
	inputargs: { 
		contenttype : 'html',
		contents : '',
		documentation: '',
		style : ''
	},
	
	postCreate : function(){
		//houskeeping
		logger.debug(this.id + ".postCreate");
		
		switch(this.contenttype) {
			case 'html':
			domStyle.set(this.domNode, {'height' : 'auto', 'width' : '100%'});
			domAttr.set(this.domNode, 'style', this.style); //might override height and widght
				this.domNode.innerHTML = this.contents;
				break;
			case 'js' :
				try {
					eval(this.contents);
				}
				catch (e) {
					html.set(this.domNode, "Error while evaluating JavaScript: " + e );
				}
				break;
		}
	},
	
	uninitialize : function(){
	}
		});
	});

require([ "HTMLSnippet/widget/HTMLSnippet" ]);
