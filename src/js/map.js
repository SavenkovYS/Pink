function mapInit() {
    let flag = 0
    const LOADING_OFFSET = 500

    function showMap() {
        const scrollY = window.scrollY
        const mapOffset = document.querySelector('#map').getBoundingClientRect().top

        if ((scrollY >= mapOffset - LOADING_OFFSET) && (flag === 0)) {
            ymaps.ready(init);
            function init() {
                const myMap = new ymaps.Map("map", {

                    center: [59.938635, 30.323118],

                    zoom: 17
                });

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Россия, Санкт-Петербург, Большая Конюшенная улица, 19/8'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/map-marker.png',
                    iconImageSize: [35, 36],
                    iconImageOffset: [0, 0]
                })

                myMap.geoObjects.add(myPlacemark)
            }

            flag = 1
        }
    }

    showMap()

    window.addEventListener('scroll', () => {
        showMap()
    })
}

mapInit()