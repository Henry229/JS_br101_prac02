const special = document.querySelector('.special');
special.addEventListener('click', (event) => {
  const rect = special.getBoundingClientRect();
  console.log(rect);
  console.log(`client: ${event.clientX}, ${event.clientY}`);
  console.log(`client: ${event.pageX}, ${event.pageY}`);
});

//scrollBy 100px씩 scroll 되는 것
//scrollTo 현 위치가 어디있는지 간에 100px 위치로 이동하는 것
//빨간색 스페셜 박스로 이동하는 것

const scrollBy = document.querySelector('.scrollBy');
const scrollTo = document.querySelector('.scrollTo');
const scrollInto = document.querySelector('.scrollInto');

scrollBy.addEventListener('click', () => {
  window.scrollBy(0, 100);
});

scrollTo.addEventListener('click', () => {
  window.scrollTo(0, 100);
});

scrollInto.addEventListener('click', () => {
  special.scrollIntoView();
});
