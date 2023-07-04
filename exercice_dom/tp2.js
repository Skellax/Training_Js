/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   tp2.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mfuhrman <mfuhrman@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/04 07:24:35 by mfuhrman          #+#    #+#             */
/*   Updated: 2023/07/04 07:26:26 by mfuhrman         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


var div_main = document.createElement('div');
div_main.id = "divTP2";

var par = document.createElement('p');
var text = document.createTextNode("Langages basés sur ECMASCRIPT");
par.appendChild(text);

var list = document.createElement('ul');


var text_list =  [
    document.createTextNode('Javascript'),
    document.createTextNode('JScript'),
    document.createTextNode('ActionScript'),
    document.createTextNode('EX4')
];

for (var i = 0; i < text_list.length; i++)
{
    var li = document.createElement('li');
    li.appendChild(text_list[i]);
    list.appendChild(li);
}

div_main.appendChild(par);
div_main.appendChild(list);

document.body.appendChild(div_main);