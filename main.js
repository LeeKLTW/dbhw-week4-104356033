var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b";

function getData() {
  $.ajax({
    url : API_PATH,
    type: "GET",
    success : function(data) {
      console.log(data);
    },
    error : function(err) {
      console.log(err);
    }
  });
}