const bar = document.querySelector(".progressBar")
function year_progress(){
    let today = new Date();
    let misoka = today.getFullYear() + "/12/31";
    let militime = Date.parse(misoka) - today.getTime();
    let fulltime = Date.parse(misoka) - Date.parse(today.getFullYear() + "/1/1");
    let year_progress = 1 - (militime/fulltime);
    return year_progress*100;
}
bar.setAttribute("value",year_progress())