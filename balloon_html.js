ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [52.38758172, 25.01768555],
        zoom: 11,
        controls: ['smallMapDefaultSet']
    }, {
        searchControlProvider: 'yandex#search'
    });

    var collection = new ymaps.GeoObjectCollection(null, {})

    collection
    .add(new ymaps.Placemark([52.38758172, 25.01768555], {
        balloonContentHeader: '<b>Помнік землякам</b><br>',
        balloonContentBody: '<img src="1.jpg" height="350" width="300"><br>' +
            '<span>У цэнтры вёскі Міжлессе. Ва ўшанаванне памяці<br/> 248 воінаў-аднавяскоўцаў, загінуўшых у гады<br/> Вялікай Айчыннай вайны. Пастаулены ў 1993 г.</span>',
        //balloonContentFooter: 'Информация предоставлена:',
        hintContent: '<b>Помнік землякам</b>'
    },
    {
        preset: 'islands#redStarIcon'
    }))
    .add(new ymaps.Placemark([52.35045308, 25.03502124], {
        balloonContentHeader: '<b>Помнік землякам</b><br>',
        balloonContentBody: '<img src="2.jpg" height="300" width="400"><br>' +
            '<span>У вёсцы Судзілавічы. Ва ўшанаванне памяці 31 воіна-аднавяскоўца і 24 ахвяр фашызму. Пастаўлены ў 1985 г.</span>',
        //balloonContentFooter: 'Информация предоставлена:',
        hintContent: '<b>Помнік землякам</b>'
    },
    {
        preset: 'islands#redStarIcon'
    }))
    
    myMap.geoObjects.add(collection);
}