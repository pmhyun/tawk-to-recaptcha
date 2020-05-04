<!--Start of Tawk.to Script-->
<script type="text/javascript">
	
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
	//Your tawk.to widget code
})();

//When the chat window is maximized
Tawk_API.onChatMaximized = function(){

	//Check page status
	var pageStatus = Tawk_API.getStatus();

	//if status is offline, check Google recaptcha v3 validation through a php script
	if(pageStatus === 'offline'){

		var clientId = '_YOUR_SITE_KEY';
		grecaptcha.ready(function() {

		    grecaptcha.execute(clientId, {action: 'homepage'}).then(function(token){
				jQuery.getJSON("grecaptcha.php?tok="+token, function (data) {
					var valid = data.success;
					
					//If validation comes back true, make sure chat window is maximized
					if(valid == "true"){
						Tawk_API.maximize();
					}else{
					
					//Otherwise, minimize the window
						Tawk_API.minimize();
					}
				});
		    });	
		});
	}
};
</script>
