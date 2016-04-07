var API_PATH = "http://opendata.epa.gov.tw/ws/Data/UV/?$orderby=PublishAgency&$skip=0&$top=1000&format=json";

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