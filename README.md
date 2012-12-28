##placeholder
===========

placeholder cross-browser

##connect plugin:
<pre>
&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="/placeholder/placeholder.min.js"&gt;&lt;/script&gt;
</pre>
##simple:
<pre>
$(form).Placeholder();
</pre>
##select some input type:
<pre>
$(form).Placeholder({
    selectors: ":text,:password,[type=email]"
});
</pre>

##style for input, label, input-wrapper:
<pre>
$(form).Placeholder({
    styleLabel: 'color: #fff;', // style for label
    styleWrap: 'padding:20px 20px 5px; background:yellow;width:250px', // style for wrapper
    styleInput: 'width:100%; background:#000; color:#fff' // style for inputs and textarea
});
</pre>
