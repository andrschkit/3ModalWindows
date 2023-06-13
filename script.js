const modalWindow1=document.querySelector('.modal_window1');
const modalWindow2=document.querySelector('.modal_window2');
const modalWindow3=document.querySelector('.modal_window3');

const overlay=document.querySelector('.overlay');
const btnClose=document.querySelector('.close_modal_window');
const btnsModal=document.querySelectorAll('.show_modal_window');

for (let i=0; i<btnsModal.length; i++)
{
  btnsModal[i].addEventListener('click', function()
    {
      switch (i) {
        case 0:
          modalWindow1.classList.remove('hidden');
          overlay.classList.remove('hidden');
          break;
        case 1:
          modalWindow2.classList.remove('hidden');
          overlay.classList.remove('hidden');
          break;
        case 2:
          modalWindow3.classList.remove('hidden');
          overlay.classList.remove('hidden');
          break;
        default:
          alert( "Нет таких значений" );
      }
    }
  );

  const addClass= function(){
    switch (i) {
      case 0:
        modalWindow1.classList.add('hidden');
        break;
      case 1:
        modalWindow2.classList.add('hidden');
        break;
      case 2:
        modalWindow3.classList.add('hidden');
        break;
      default:
        alert( "Нет таких значений" );
    }

    overlay.classList.add('hidden');
  }

  btnClose.addEventListener('click', addClass);

  overlay.addEventListener('click', addClass);

  document.addEventListener('keydown', function(e){
    console.log(e.key)
    if(e.key==='Escape' && (!modalWindow1.classList.contains('hidden')||!modalWindow2.classList.contains('hidden')||!modalWindow3.classList.contains('hidden')))
    {
      addClass();
    }
  });
}