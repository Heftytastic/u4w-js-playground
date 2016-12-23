/**
 * The code below will listen to any events that occur within the Usabilla frame.
 * The code will clear the document title and path name to make a clean url.
 * Keep in mind that the History Push State is a HTML5 feature
 * Please use additional JavaScript libraries to make a fallback for unsupported browsers
 * 
 * https://github.com/browserstate/history.js
 * https://github.com/devote/HTML5-History-API
 *
 */

window.usabilla_live("setEventCallback", function(category, action, label, value) {
  history.pushState('', document.title, window.location.pathname);
});
