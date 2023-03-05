//<![CDATA[
			//
document.querySelectorAll('pre').forEach(function (codeBlock) {
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    var s = codeBlock.innerText;
    button.setAttribute('data-clipboard-text',s);
    button.innerText = 'Copy';
    // button.setAttribute('title', 'Copy para a área de transferência');

    // var pre = codeBlock.parentNode;
    codeBlock.classList.add('prettyprint');
    // pre.parentNode.insertBefore(button, pre);
    codeBlock.appendChild(button);         
});

var clipboard = new ClipboardJS('.copy-code-button');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.trigger.textContent = 'Copied';
    window.setTimeout(function() {
        e.trigger.textContent = 'Copy';
    }, 2000);
    e.clearSelection();

});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
    e.trigger.textContent = 'Error in Copy';
    window.setTimeout(function() {
        e.trigger.textContent = 'Copy';
    }, 2000);
    e.clearSelection();
});
		//]]>