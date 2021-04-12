class Accordion {
    constructor(accordionElement){
        this.isOpen = false;
        this.summary = accordionElement.querySelector('.accordion__summary');
        this.details = accordionElement.querySelector('.accordion__details');
        this.arrow = accordionElement.querySelector('.accordion__arrow');
        this.setUpAccordion();
    }

    setUpAccordion(){
        this.summary.addEventListener('click', ()=>{
            this.toggle();
        });
    }

    toggle(){
        this.isOpen = !this.isOpen;
        this.summary.classList.toggle('selected');
        this.details.classList.toggle('hidden');
        this.arrow.classList.toggle('selected');

        this.details.style.height = this.isOpen ? `${this.details.scrollHeight}px` : '0px';
    }
}

const accordions = document.querySelectorAll('.accordion')

for(const accordion of accordions){
    new Accordion(accordion);
}
