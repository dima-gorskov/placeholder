placeholder
===========

placeholder cross-browser

connect plugin:
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="/placeholder/placeholder.min.js"></script>

simple:
$(form).Placeholder();

select some input type:
$(form).Placeholder({
    selectors: ":text,:password,[type=email]"
});

style for input, label, input-wrapper:
$(form).Placeholder({
    styleLabel: 'color: #fff;', // style for label
  	styleWrap: 'padding:20px 20px 5px; background:yellow;width:250px', // style for wrapper
		styleInput: 'width:100%; background:#000; color:#fff' // style for inputs and textarea
});
