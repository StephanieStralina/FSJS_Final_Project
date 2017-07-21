$(document).ready(function(){});

//basic display functions
function toggleNewModal(){
  $("#exampleModal").modal("toggle");
}

function toggleEditModal(){
  editRecipeData({});
  toggleNewModal();
}

//(Read)
  function getFiles() {
    return $.ajax('/api/file')
      .then(res => {
        return res;
      })
      .fail(err => {
        console.log("Error code:", err);
        throw err;
      });
  }

  function refreshFileList() {
  const template = $('#list-template').html();
  const compiledTemplate = Handlebars.compile(template);

  getFiles()
    .then(files => {

      window.fileList = files;

      const data = {files: files};
      const html = compiledTemplate(data);
      $('#list-container').html(html);
    })
}

function clearForm(){
  $("#recipe-name").val("Recipe Name");
  $("#recipe-img").val("Image URL");
  $("#recipe-url").val("Blog URL");
}

// function appendSaved(param){
//   $(param).toggleClass("fa-heart-o fa-heart");
// }
// ^ DO THIS AS A BOOLEAN VALUE!!!! DUH! Saved: true/false


//Submit(Create)
function submitRecipe() {


  const recipeFile = {
    name: $("#recipe-name").val(),
    img: $("#recipe-img").val(),
    url: $("#recipe-url").val(),
    _id: $("#recipe-id").val(),
  };

let method, url;
if (recipeFile._id){
  method = "PUT";
  url = '/api/file/' + recipeFile._id;
} else {
  method = "POST";
  url = '/api/file';
}


    $.ajax({
    type: method,
    url: url,
    data: JSON.stringify(recipeFile),
    dataType: 'json',
    contentType : 'application/json',
  })
    .done(function(response) {
      refreshFileList();
      toggleEditModal();
      clearForm();
    })
    .fail(function(error) {
      console.log("Error code: ", error);
    });
}

//(Update)
function editRecipe(id){
  const file = window.fileList.find(file => file._id === id);
    if (file) {
      editRecipeData(file);
      toggleNewModal();
} else {
      console.log("File not found: ", id)
    }
}

function editRecipeData(data) {
  data = data || {};

  const file = {
    name: data.name || '',
    img: data.img || '',
    url: data.url || '',
    _id: data._id || '',
  };

  $("#recipe-name").val(file.name);
  $("#recipe-img").val(file.img);
  $("#recipe-url").val(file.url);
  $("#recipe-id").val(file._id);
}

//(Delete)
function deleteRecipe(id){
  console.log(id);
  if (confirm("Are you sure you want to delete this recipe?")) {
    $.ajax({
      type: 'DELETE',
      url: '/api/file/' + id,
      dataType: 'json',
      contentType : 'application/json',
    })
      .done(function(response) {
        refreshFileList();
      })
      .fail(function(error) {
        console.log("We had an issue deleting this: ", error);
      })
  }
}
