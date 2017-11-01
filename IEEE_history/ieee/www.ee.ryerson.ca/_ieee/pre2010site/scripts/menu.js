<!--
function Hilite(fileName,netName,over, menuNumber)
{
 var menuId = 'myMenu' + menuNumber;
 if(window.document.images)
 {
   if(over) 
     window.document.images[netName].src =  "images/" + fileName + "on.jpg";
   else 
    	window.document.images[netName].src =  "images/" + fileName + ".jpg";
    
 }

 }
var timeon;
// MENU MOUSE OVER 
function menuOver(itemName) {
 	clearTimeout(timeOn);
 	menuActive = 1;
 }// MENU MOUSE OUT 
function menuOut(itemName) {

	if(document.layers) {
 		menuActive = 0 ;
 		timeon=setTimeout("hideAllMenus()", 40);
 	}
}
 // SET BACKGROUND COLOR 
function getImage(name) {
  if (document.layers) {
    return findImage(name, document);
  }
  return null;
}

function findImage(name, doc) {
  var i, img;
  for (i = 0; i < doc.images.length; i++)
    if (doc.images[i].name == name)
      return doc.images[i];
  for (i = 0; i < doc.layers.length; i++)
    if ((img = findImage(name, doc.layers[i].document)) != null) {
      img.container = doc.layers[i];
      return img;
    }
  return null;
}

function getImagePageLeft(img) {
  var x, obj;
  if (document.layers) {
    if (img.container != null)
      return img.container.pageX + img.x;
    else
      return img.x;
  }
  return -1;
}

function getImagePageTop(img) {
  var y, obj;
  if (document.layers) {
    if (img.container != null)
      return img.container.pageY + img.y;
    else
      return img.y;
  }
  return -1;
}

//document.write('<style> .menu{position: absolute;}</style>');
var timeOn = null
numMenus = 3;
document.onmouseover = hideAllMenus;
document.onClick = hideAllMenus;
window.onError = null;

function getStyleObject(objectId) {
    // cross-browser function to get an object's style object given its id
    if(document.getElementById && document.getElementById(objectId)) {
	// W3C DOM
	return document.getElementById(objectId).style;
    } else if (document.all && document.all(objectId)) {
	// MSIE 4 DOM
	return document.all(objectId).style;
    } else if (document.layers && document.layers[objectId]) {
	// NN 4 DOM.. note: this won't find nested layers
	return document.layers[objectId];
    } else {
	return false;
    }
} // getStyleObject

function changeObjectVisibility(objectId, newVisibility) {
    // get a reference to the cross-browser style object and make sure the object exists
    var styleObject = getStyleObject(objectId);
    if(styleObject) {
	styleObject.visibility = newVisibility;
	return true;
    } else {
	//we couldn't find the object, so we can't change its visibility
	return false;
    }
} // changeObjectVisibility

function findPosition(objectName) {
	if( objectName.offsetParent ) {
		for( var posX = 0 , posY = 0; objectName.offsetParent; objectName = objectName.offsetParent ) {
			posX += objectName.offsetLeft;
			posY += objectName.offsetTop;
		}
		return [ posX];
		} else {
		return [objectName.x, objectName.y];
		}
}
var timer1=0;
function showMenu(menuNumber, eventObj) {
    hideAllMenus();
	eventObj.cancelBubble = true;
    var menuId = 'myMenu' + menuNumber;
    if(changeObjectVisibility(menuId, 'visible')) {	
		return true;
    } else {

		return false;


   }
}

function hideAllMenus() {

    for(counter = 1; counter <= numMenus; counter++) {

	changeObjectVisibility('myMenu' + counter, 'hidden');

	}
} 

function getTheDate() {
	var Today = new Date();
	var date = Today.getDate();
	var year = Today.getYear();
	var suffix = "th";
	
	months = new Array(12);
	months[1] = "January";
	months[2] = "February";
	months[3] = "March";
	months[4] = "April";
	months[5] = "May";
	months[6] = "June";
	months[7] = "July";
	months[8] = "August";
	months[9] = "September";
	months[10] = "October";
	months[11] = "November";
	months[12] = "December";
	
	month = months[Today.getMonth()+1];
	
	switch (Today.getDate())
	{
		case 1:
		case 21:
		case 31:
				suffix = "st"; break;
		case 2:
		case 22:
				suffix = "nd"; break;
		case 3:
		case 23:
				suffix = "rd"; break;
	};
	
	var strDate = month + " "+ date + "" + suffix + ", 2005";
	return strDate;
}

// initialize hacks whenever the page loads
window.onload = initializeHacks;

// setup an event handler to hide popups for generic clicks on the document
function initializeHacks() {
    // this ugly little hack resizes a blank div to make sure you can click
    // anywhere in the window for Mac MSIE 5
    if ((navigator.appVersion.indexOf('MSIE 5') != -1) 
	&& (navigator.platform.indexOf('Mac') != -1)
	&& getStyleObject('blankDiv')) {
	window.onresize = explorerMacResizeFix;
    }
    resizeBlankDiv();
    // this next function creates a placeholder object for older browsers
    createFakeEventObj();
}



function createFakeEventObj() {
    // create a fake event object for older browsers to avoid errors in function call
    // when we need to pass the event object to functions
    if (!window.event) {
	window.event = false;
    }
} // createFakeEventObj



function resizeBlankDiv() {
    // resize blank placeholder div so IE 5 on mac will get all clicks in window
    if ((navigator.appVersion.indexOf('MSIE 5') != -1) 
	&& (navigator.platform.indexOf('Mac') != -1)
	&& getStyleObject('blankDiv')) {
	getStyleObject('blankDiv').width = document.body.clientWidth - 20;
	getStyleObject('blankDiv').height = document.body.clientHeight - 20;
    }
}

function explorerMacResizeFix () {
    location.reload(false);
}

function mClk(src){ 
	if(event.srcElement.tagName=='TD')
		src.children.tags('A')[0].click();
}
//-->

