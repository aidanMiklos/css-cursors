function kursor(removeDefaultCursor) {
  this.removeDefaultCursor = removeDefaultCursor;
  if (this.removeDefault == true) {
    document.body.classList.add("hideCursor");
  }
}
