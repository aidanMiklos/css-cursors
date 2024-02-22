function kursor(removeDefaultCursor) {
  this.removeDefaultCursor = removeDefaultCursor;
  if(this.removeDefault == True){
    document.body.classList.add("hideCursor");
  }
}
