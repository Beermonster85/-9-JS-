// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

//Решение №1
//  const from = document.querySelector('#from');
//  const span = document.querySelector('span');
//  console.log(from);
//  console.log(span);
//  from.addEventListener('input', () => {
//     span.textContent = from.value;
//  });


// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

//Решение №2

// const messageBtn = document.querySelector('.messageBtn');
// console.log(messageBtn);
// const message = document.querySelector('.message');

// messageBtn.addEventListener('click', () => {
//    message.classList.add('animate_animated');
//    message.classList.add('animate_fadeInLeftBig');
//    message.style.visibility = 'visible';
// })
// console.log(message);

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// Решение №3

// const formEl = document.querySelector('form');
// const formControlEls = formEl.querySelectorAll('input, select');
// console.log(formEl);
// formEl.addEventListener('submit', event => {
//   formControlEls.forEach(formControlEl => {
//     if (formControlEl.value === '') {
//       formControlEl.style.borderColor = "red";
//       formControlEl.classList.add('error');
//       event.preventDefault();
//     }
//   });
// });

// formEl.addEventListener('input', event => {
//   if (!event.target.classList.contains('form-control')) {
//     return;
//   }
//   event.target.value === ''
//     ? event.target.classList.add('error')
//     : event.target.classList.remove('error');
// });