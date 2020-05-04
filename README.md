# tawk-to-recaptcha
Trying to setup Google recaptcha v.3 invisible with tawk.to offline form.

Tawk.to JavaScript API used:
  Tawk_API.onChatMaximized();
  Tawk_API.getStatus();
  Tawk_API.maximize();
  Tawk_API.minimize();
  
The basic premise is to use Google recaptcha v.3 to verify end-users. If confirmed, the chat window remains open, and the end-user can fill out the offline form and submit it. Otherwise, the chat window minimizes, hopefully preventing bots from spamming the offline form.
