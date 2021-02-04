class Accordeon {
  constructor(list){
    this.list = list;
    let panelItem = document.querySelectorAll('.title');
    this.bodyItem = document.querySelectorAll('.body');

    let activePanel;
    panelItem.forEach(function(item) {
      item.addEventListener('click', function() {
        //показать панель
        this.classList.add('panel-active');
        this.nextElementSibling.classList.add('active');
        //спрятать панель
        if (activePanel) {
          activePanel.classList.remove('panel-active');
          activePanel.nextElementSibling.classList.remove('active');
        }
        //обновить
        activePanel = (activePanel === this) ? 0 : this;
      });
    });
  }
}
// let accor = new Accordeon;
// console.log(accor);
