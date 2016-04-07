var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=ddb80380-f1b3-4f8e-8016-7ed9cba571d5";

//http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=bf073841-c734-49bf-a97f-3757a6013812

function getData() {
  $.ajax({
    url : API_PATH,
    dataType:"jsonp",
    type: "GET",
    success : function(data) {
      console.log(data);
    },
    error : function(err) {
      console.log(err);
    }
  });
}