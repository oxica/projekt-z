let sliders = document.querySelectorAll('.slider');
// sliders - список всех элементов с классом class="slider"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_slider(sliders[i]);
}

function init_slider(slider) {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.
  
  let slide = slider.querySelectorAll('.slide');
  // Вместо document.query... Получается список всех class="slide"
  // которые находятся где-то внутри текущего элемента slider.
  
  let next = slider.querySelector('.next');
//   let prev = slider.querySelector('.prev');
  // Кнопка next внутри этого slider.
  
  let i = 0;
  // Номер текущего "открытого" слайда.
  
  next.addEventListener('click', function() {
    slide[i].classList.remove('block');
    // slide[i] - открытый слайд. Скрываем.
    
    i = (i + 1) % slide.length; // (*1)
    
    slide[i].classList.add('block');
    // slide[i] - следующий слайд. Показываем.
});  

//   prev.addEventListener('click', function() {
//     slide[i].classList.remove('block');
//     // slide[i] - открытый слайд. Скрываем.
    
//     i = (i + 1) % slide.length; // (*1)
    
//     slide[i].classList.add('block');
//     // slide[i] - следующий слайд. Показываем.
//   }); 
}