// 뒤로가기 방지 (뒤로가면 안되는 페이지에 작성)

//HTML
/* <body
onload="noBack();"
onpageshow="if(event.persisted) noBack();"
onunload=""
> */

window.history.forward();
function noBack() {
  window.history.forward();
}
