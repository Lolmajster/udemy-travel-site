import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
// import Modal from './modules/Modal';

// new Modal;
new StickyHeader;
new MobileMenu;
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", event => {
        event.preventDefault();
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openModal(), 20)
            }).catch(() => console.log("ERROR!"))
        } else {
            modal.openModal();
        }
    })
});

if(module.hot) {
    module.hot.accept();
}

