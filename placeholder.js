(function($){
	jQuery.fn.Placeholder = function(options){
		options = $.extend({
			selectors: ":text,[type=email],:password,textarea",
			styleLabel: '',
			styleWrap: 'position:relative;',
			styleInput: ''
		}, options);
		var inputs = $(this).find(options.selectors);
		$("title").after("<style type='text/css'>.placeholderWrapper{"+options.styleWrap+"}.placeholderWrapper>input{"+options.styleInput+"}.placeholderWrapper>textarea{"+options.styleInput+"}.placeholderWrapper>label{ \
		cursor: text;\
		padding-left:3px;\
		padding-top:1px;\
		position:absolute;\
		text-transform:uppercase;\
		z-index:3;"+options.styleLabel+"\
		}</style>");
		inputs.each(function(){
			if($(this).attr('placeholder')){
				$(this).removeAttr('placeholder');
			}
			if($(this).data('label')){
				var labelName = $(this).data('label');
			} else {
				var labelName = ($(this).attr('name')) ? $(this).attr('name') : $(this).attr('type');
			}
			$(this).wrap('<div class="placeholderWrapper"></div>').parent().prepend('<label>'+labelName+'</label>');

			$(this).focus(function(){
				$(this).prev().hide();
			});
			$(this).blur(function(){
				if(!$(this).val()) {
					$(this).prev().show();
				}
			});
			$(this).prev().click(function(){
				$(this).hide().next().focus();
			});
		});
	};
})(jQuery);