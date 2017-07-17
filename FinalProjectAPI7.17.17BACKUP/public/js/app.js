$(document).ready(function(){});

//toggle saved/not saved
  // $("#list-container").on("click", ".heartSaved", function(){
  //   $(this).toggleClass("fa-heart-o fa-heart");
  // });


  function getFiles() {
    return $.ajax('/api/file')
      .then(res => {
        console.log("Results from getFiles()", res);
        return res;
      })
      .fail(err => {
        console.log("Error in getFiles()", err);
        throw err;
      });
  }

  function refreshFileList() {
  const template = $('#list-template').html();
  const compiledTemplate = Handlebars.compile(template);

  getFiles()
    .then(files => {
      const data = {files: files};
      const html = compiledTemplate(data);
      $('#list-container').html(html);
    })
}

function appendSaved(param){
  $(param).toggleClass("fa-heart-o fa-heart");
}
