dojo.provide("HTMLSnippet.widget.HTMLSnippet");

mendix.widget.declare('HTMLSnippet.widget.HTMLSnippet', {
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
				dojo.style(this.domNode, {'height' : 'auto', 'width' : '100%'});
				dojo.attr(this.domNode, 'style', this.style); //might override height and widght
				this.domNode.innerHTML = this.contents;
				break;
			case 'js' :
				try {
					eval(this.contents);
				}
				catch (e) {
					dojo.html.set(this.domNode, "Error while evaluating JavaScript: " + e );
				}
				break;
		}
		
		this.actRendered();
	},
	
	uninitialize : function(){
	}
});	