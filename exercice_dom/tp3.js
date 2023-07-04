/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   tp3.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mfuhrman <mfuhrman@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/04 07:24:50 by mfuhrman          #+#    #+#             */
/*   Updated: 2023/07/04 07:47:47 by mfuhrman         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


var main_div = document.createElement('div');
main_div.id = "divTP3";

var langages = [{
    t: 'JavaScript',
    d: 'Javascript est un langage de programation de scripts surtout utilisé dans les \
    pages web interactives mais aussi coté serveur'
}, {
    t: 'JScript',
    d: 'JScript est le nom génériaue de plusieurs inplémentations d\'ECMAScript 3 \
    créées par Microsoft'
}, {
    t: 'ActionScript',
    d: 'ActionScript est le langage de programmation utilisé au sein d\'applications \
    clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia \
    Generator).'
}, {
    t: 'EX4',
    d: 'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.'
}];

var par = document.createElement('p');
var text = document.createTextNode("Langages basés sur EcmaScript");
par.appendChild(text);


var dlist = document.createElement('dl'),
defTerm, defTermText,
defDefn, defDefnText;

for (var i = 0, c = langages.length; i < c ; i++)
{
    defTerm = document.createElement('dt');
    defDefn = document.createElement('dd');

    defTermText = document.createTextNode(langages[i].t);
    defDefnText = document.createTextNode(langages[i].d);

    defTerm.appendChild(defTermText);
    defDefn.appendChild(defDefnText);

    dlist.appendChild(defTerm);
    dlist.appendChild(defDefn);
}

main_div.appendChild(par);
main_div.appendChild(dlist);

document.body.appendChild(main_div);

