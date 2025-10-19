
// Yandex map js 

let mapCenter = [54.49738045103413,48.354295343160715];

function init(){
  let map = new ymaps.Map('yandex-map',{
    center: mapCenter,
    zoom: 16,
  });

  let placemark = new ymaps.Placemark(mapCenter, {
    balloonContent: `

        <div class='balloon'>
            <div class='balloon-title'>
              <h2>Станица</h2>
              <p>База отдыха</p>
            </div>
            <div class='balloon-header'>
              <div class='balloon-review'>
                <a href='https://yandex.ru/maps/org/stanitsa/84773575914/reviews/?ll=48.354155%2C54.497358&z=17' target="_blank">
                  <div class="client-ranking">
                  <span>4.7</span>
                  <img src="svg-images/ranking.svg" alt=""/>
                  </div>
                </a> 
              </div>

              <div class='balloon-working-hours'>
                <img class='balloon-time' src='svg-images/clock.svg' alt='время работы базы отдыха Станица' />
                <p>С 08:00 – 22:00</p>
              </div>
            </div>

            <div class='balloon-phone'>
              <img src='svg-images/phone.png' alt='номер телефона' />
              <p><a href="tel: +79278010888">+7 (927) 801-08-88</a></p>
            </div>

            <div class='balloon-location'>
              <img src='svg-images/location.png' alt='местоположение' />
              <p>
                Ульяновский район, село Новая Беденьга
              </p>
            </div>

            <a href='https://yandex.ru/maps/?ll=48.354155%2C54.497358&mode=routes&rtext=~54.497368%2C48.354309&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D84773575914&z=17' target="_blank">
              <div class='balloon-how-to-get-to-us'><p>Проложить маршрут</p></div>
            </a>
        </div>
    `
  }, {
    iconCaption: 'Местоположение',
    iconLayout: 'default#image',
    iconImageHref: 'svg-images/logo.jpg',
    iconImageSize: [80, 80],
    iconImageOffset: [-10, -100],
  })


  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  
  map.geoObjects.add(placemark);
  placemark.balloon.open();
}
 
ymaps.ready(init);
