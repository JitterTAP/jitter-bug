var jitterbug = new WebSocket('ws://ec2-52-10-33-198.us-west-2.compute.amazonaws.com:15000/jitterdog', []);

jitterbug.onopen = function() {
  jitterbug.send('HAI');
};

jitterbug.onmessage = function(event) {
  console.log('File changed, upgrading');
  upgradeCSS();
};

function loadingAnimation(andThen) {
  var line = new ProgressBar.Line('#progress', {
      color: '#FCB03C'
  });

  line.animate(1.0, function() {
    line.destroy();
    if (andThen) andThen();
  });
}

function upgradeCSS() {
  loadingAnimation(function() {
    window.reload();
  });
}
