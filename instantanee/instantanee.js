if (this != top)
  top.location = ".";
var showComments = false;
window.onload = function() {
  var commentsLink = document.querySelector("#commentsLink");
  commentsLink.onclick = function() {
    showComments = !showComments;
    if (showComments) {
      commentsLink.textContent = "Fără comentarii";
    }
    else {
      commentsLink.textContent = "Cu comentarii";
    }
    var commentRefs = document.querySelectorAll(".commentRef");
    commentRefs.forEach(function(commentRef) {
      if (showComments) {
        commentRef.style.display = 'inline';
      }
      else {
        commentRef.style.display = 'none';
      }
    });
  }
}
