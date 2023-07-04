var main_div = document.createElement('div');
main_div.id = "divTP4";

var form = document.createElement('form');
form.enctype = "multipart/form-data";
form.method = "post";
form.action = "upload.php";

var field = document.createElement('fieldset');

var legend = document.createElement('legend');
var text_legend = document.createTextNode('Uploader une image');
legend.appendChild(text_legend);

var div2 = document.createElement('div');
div2.style.textAlign = "center";

var label = document.createElement('label');
label.htmlFor = "inputUpload";
var text_label = document.createTextNode('Image à uploader :');
label.appendChild(text_label);

var input1 = document.createElement('input');
input1.type = "file";
input1.name = "inputUpload";
input1.id = "inputUpload";

var br = document.createElement('br');

var input2 = document.createElement('input');
input2.type = "submit";
input2.value = "Envoyer";

div2.appendChild(label);
div2.appendChild(input1);
div2.appendChild(br);
div2.appendChild(br.cloneNode(false));
div2.appendChild(input2);

field.appendChild(legend);
field.appendChild(div2);

form.appendChild(field);

main_div.appendChild(form);

document.body.appendChild(main_div);
