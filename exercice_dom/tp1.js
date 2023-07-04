/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   tp1.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mfuhrman <mfuhrman@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/04 07:48:27 by mfuhrman          #+#    #+#             */
/*   Updated: 2023/07/04 08:14:01 by mfuhrman         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var main_div = document.createElement('div');
main_div.id = 'divTp1'

var Text_Nodes = [
    document.createTextNode('Le '), //Text_Nodes[0]
    document.createTextNode('World Wide Web Consortium'), //Text_Nodes[1] strong
    document.createTextNode(', abrégé par le sigle '), //Text_Nodes[2]
    document.createTextNode('W3C'), //Text_Nodes[3] strong
    document.createTextNode(', est un '), //Text_Nodes[4]
    document.createTextNode('organisme de standardisation'), //Text_Nodes[5] a
    document.createTextNode(' à but non lucratif chargé de promouvoir la compatibilté des \
    technologies du '), //Text_Nodes[6]
    document.createTextNode('World Wide Web'), //Text_Nodes[7] a
    document.createTextNode('.') //Text_Nodes[8]
];

var strong1 = document.createElement('strong');
strong1.appendChild(Text_Nodes[1]);

var strong2 = document.createElement('strong');
strong2.appendChild(Text_Nodes[3]);

var link1 = document.createElement('a');
link1.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation";
link1.title = "Organisme de normalisation";
link1.appendChild(Text_Nodes[5]);

var link2 = document.createElement('a');
link2.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
link2.title = "World Wide Web";
link2.appendChild(Text_Nodes[7]);

main_div.appendChild(Text_Nodes[0]);
main_div.appendChild(strong1);
main_div.appendChild(Text_Nodes[2]);
main_div.appendChild(strong2);
main_div.appendChild(Text_Nodes[4]);
main_div.appendChild(link1);
main_div.appendChild(Text_Nodes[6])
main_div.appendChild(link2);
main_div.appendChild(Text_Nodes[8]);

document.body.appendChild(main_div);

