function kursor(removeDefaultCursor) {
  this.removeDefaultCursor = removeDefaultCursor;
  if (this.removeDefaultCursor == true) {
    document.body.classList.add("hideCursor");
  }
}
