var list_template;

function showTemplate(template, data)
{
    var html = template(data);
    $("#content").html(html);
}

$(document).ready(function()
{
  var source = $("#list-template").html();
  list_template = Handlebars.compile(source);
  showTemplate(list_template,list)
});
