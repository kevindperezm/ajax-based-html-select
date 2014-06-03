var selectToFill = null; // global that saves the reference to the empty select

function fillSelect(select) {
  selectToFill = select;
  getByAjax('options.json', ajaxSuccess);
}

function ajaxSuccess(receivedText) {
  try {
    var optionsArray = JSON.parse(receivedText);
    emptySelect();
    populateSelect(optionsArray);
  } catch (e) {
    alert("An error ocurred.\n" + e.message);
  }
}

function emptySelect() {
  childNodes = selectToFill.childNodes;
  for (var i = childNodes.length - 1; i >= 0; i--) {
    selectToFill.removeChild(childNodes[i]);
  }
}

function populateSelect(array) {
  for (var i = 0; i < array.length; i++) {
    option = document.createElement('option');
    option.value = array[i];
    option.text = array[i];
    selectToFill.appendChild(option);
  }
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
