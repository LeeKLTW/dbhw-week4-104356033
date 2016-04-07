var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=f4a75ba9-7721-4363-884d-c3820b0b917c";

function getData() {
  $.ajax({
    url : API_PATH,
    type: "GET",
    success : function(data) {
      alert(data);
    },
    error : function(err) {
      alert(err);
    }
  });
}