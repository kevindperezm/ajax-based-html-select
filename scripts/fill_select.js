function fillSelect(select) {
  getByAjax('options.json', ajaxSuccess);
}

function getByAjax(resource_url, success_callback) {
  var xmlhttp;

  if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 ) {
      if(xmlhttp.status == 200) {
        success_callback(xmlhttp.responseText);
      } else if(xmlhttp.status == 404) {
        // TODO: Callback for Not Found
        console.log(xmlhttp.responseText);
      } else {
        // TODO: Callback for anything else
        console.log(xmlhttp.responseText);
      }
    }
  }

  xmlhttp.open('GET', resource_url, true);
  xmlhttp.send();
}
