// Yandex map js 

let mapCenter = [45.35774086279114,36.520593702836806];

function init(){
  let map = new ymaps.Map('yandex-map',{
    center: mapCenter,
    zoom: 18,
  });

  let placemark = new ymaps.Placemark(mapCenter, {
    balloonContent: `

        <div class='balloon'>
            <div class='balloon-title'>
              <h2>Калинина 10</h2>
              <p>Гостевой дом</p>
            </div>
            <div class='balloon-header'>
              <div class='balloon-review'>
                <a href='https://yandex.ru/maps/org/chudo_oslik/103888293171/?ll=33.787407%2C44.627376&z=16' target="_blank">
                  <div class="client-ranking">
                  <span>4.4</span>
                  <img src="svg-images/ranking.svg" alt=""/>
                  </div>
                </a> 
              </div>

              <div class='balloon-working-hours'>
                <img class='balloon-time' src='svg-images/clock.svg' alt='время заселения' />
                <p>С 14:00 – 24:00</p>
              </div>
            </div>

            <div class='balloon-phone'>
              <img src='svg-images/phone.svg' alt='номер телефона' />
              <p><a href="tel: +79781182125">+7 978 118-21-25 </a></p>
            </div>

            <div class='balloon-location'>
              <img src='svg-images/location.png' alt='местоположение' />
              <p>
                Керчь, улица Калинина, дом 10
              </p>
            </div>

            <a href='https://yandex.ru/maps/11464/kerch/?ll=36.520576%2C45.357720&mode=routes&rtext=~45.357689%2C36.520655&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D9132659893&z=17' target="_blank">
              <div class='balloon-how-to-get-to-us'><p>Проложить маршрут</p></div>
            </a>
        </div>
    `
  }, {
    iconCaption: 'Местоположение',
    iconLayout: 'default#image',
    iconImageHref: 'svg-images/marker.png',
    iconImageSize: [35, 35],
    iconImageOffset: [-25, -30]
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
