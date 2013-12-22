function updateStatus(str) {
	$('article.status').append($('<p>', {
		text: "network "+str,
		className: str
	}));
};

var cacheStates = [
	"UNCACHED (numeric value 0) -- The ApplicationCache object's cache host is not associated with an application cache at this time.",
	"IDLE (numeric value 1) -- The ApplicationCache object's cache host is associated with an application cache whose application cache group's update status is idle, and that application cache is the newest cache in its application cache group, and the application cache group is not marked as obsolete.",
	"CHECKING (numeric value 2) -- The ApplicationCache object's cache host is associated with an application cache whose application cache group's update status is checking.",
	"DOWNLOADING (numeric value 3) -- The ApplicationCache object's cache host is associated with an application cache whose application cache group's update status is downloading.",
	"UPDATEREADY (numeric value 4) -- The ApplicationCache object's cache host is associated with an application cache whose application cache group's update status is idle, and whose application cache group is not marked as obsolete, but that application cache is not the newest cache in its group.",
	"OBSOLETE (numeric value 5) -- The ApplicationCache object's cache host is associated with an application cache whose application cache group is marked as obsolete."
];

// function updateCacheStatus() {
//   updateStatus(cacheStates[window.applicationCache.status]);
// }
// 
// var events = "checking,error,noupdate,downloading,progress,updateready,cached,obsolete".split(',');
// var i = events.length;
// 
// while (i--) {
//   addEvent(window.applicationCache, events[i], updateCacheStatus);
// }


$(document).ready(function () {

	if (navigator.onLine) {
		updateStatus('online');
	}
	else {
		updateStatus('offline');
	}

	// network status
  window.addEventListener("online", function() {
		updateStatus('online');
  }, true);

  window.addEventListener("offline", function() {
		updateStatus('offline');
  }, true);

});
