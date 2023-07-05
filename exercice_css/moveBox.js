/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   moveBox.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mfuhrman <mfuhrman@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/04 12:11:12 by mfuhrman          #+#    #+#             */
/*   Updated: 2023/07/04 12:48:36 by mfuhrman         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


(function() {
    var storage = {};

    function init() {
        var elements = document.querySelectorAll('.draggableBox'),
        elementLength = elements.length;

        for (var i = 0; i < elementLength; i++)
        {
            elements[i].addEventListener('mousedown', function(e){
                var s = storage;
                s.target = e.target;
                s.offsetX = e.clientX - s.target.offsetLeft;
                s.offsetY = e.clientY - s.target.offsetTop;
            });

            elements[i].addEventListener('mouseup', function() {
                storage = {};
            });
        }

        document.addEventListener('mousedown', function(e) {
            var target = storage.target;

            if (target)
            {
                target.style.top = e.clientY - storage.offsetY + 'px';
                target.style.left = e.clientX - storage.offsetX + 'px';
            }
        });
    }
    init();
}) ();