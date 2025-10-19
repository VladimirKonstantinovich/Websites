
// Yandex map js 

let mapCenter = [44.75190877172916,33.87894061352214];

function init(){
  let map = new ymaps.Map('yandex-map',{
    center: mapCenter,
    zoom: 15,
  });

  let placemark = new ymaps.Placemark(mapCenter, {
    balloonContent: `

        <div class='balloon'>
            <div class='balloon-title'>
              <h2>Manzara</h2>
              <p>Гостевой дом</p>
            </div>
            <div class='balloon-header'>
              <div class='balloon-review'>
                <a href='https://yandex.ru/maps/org/manzara/227097111927/reviews/?ll=33.878955%2C44.751905&z=17' target="_blank">
                  <div class="client-ranking">
                    <svg fill="#ffb021" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg fill="#ffb021" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg fill="#ffb021" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg fill="#ffb021" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg fill="#ffb021" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    5.0
                  </div>
                </a>
              </div>

              <div class='balloon-working-hours'>
                <img class='balloon-time' src='svg-images/working-hours.png' alt='время работы гостевого дома Manzara' />
                <p>Круглосуточно</p>
              </div>
            </div>

            <div class='balloon-phone'>
              <img src='svg-images/phone.png' alt='номер телефона' />
              <p><a href="tel: +79780205700">+7 (978) 020-57-00</a></p>
            </div>

            <div class='balloon-location'>
              <img src='svg-images/location.png' alt='местоположение' />
              <p>Бахчисарай, улица Пушкина, 17</p>
            </div>

            <a href='https://yandex.ru/maps/27217/bahchisaraj/?from=api-maps&ll=33.879731%2C44.751877&mode=routes&rtext=~44.751909%2C33.878941&rtt=auto&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D227097111927&utm_source=api-maps&z=18.04' target="_blank">
              <div class='balloon-how-to-get-to-us'><p>Как до нас добраться</p></div>
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
