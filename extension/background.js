'use strict';

function onLoad() {
  gapi.auth.authorize({
    client_id: 'client_id',
    scope: [
      'https://www.googleapis.com/auth/analytics.readonly',
    ],
    immediate: false,
  }, function(result) {
    console.log(result.access_token);

    // close auth window
    result['g-oauth-window'].close();
  });
}

// NOTE: or write <script> in background.html
if (!document.getElementById('js-google-api-client')) {
  const head = document.querySelector('head'),
        script = document.createElement('script');

  script.id = 'js-google-api-client';
  script.async = true;
  script.type = 'text/javascript';
  script.src = 'https://apis.google.com/js/client.js?onload=onLoad';

  head.appendChild(script);
}
