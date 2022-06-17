import './style.css';
import html from './index.html';

const menuBtn = document.querySelector('.menu_btn_container');
const mobileMenu = document.querySelector('.mobile_menu');
const backDrop = document.querySelector('.back_drop');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('visible');
  backDrop.classList.add('visible');
  backDrop.style.zIndex = 99;
});

backDrop.addEventListener('click', () => {
  mobileMenu.classList.remove('visible');
  backDrop.classList.remove('visible');
  backDrop.style.zIndex = -1;
});

const menuItems = document.querySelector('.mobile_menu_items');
const menuNavigationItems = menuItems.querySelectorAll('a');

const navigationItemsHandler = () => {
  for (const el of menuNavigationItems) {
    el.addEventListener('click', () => {
      mobileMenu.classList.remove('visible');
      backDrop.classList.remove('visible');
      backDrop.style.zIndex = -1;
    });
  }
};

navigationItemsHandler();

const educationContainer = document.querySelector('.education_container');
const educationImages = educationContainer.querySelectorAll('img');
const imagesFullScreen = document.querySelector('.images_all_screen');
const imagesAllScreen = document.getElementById('image_all_screen');

function imagesClick() {
  for (const el of educationImages) {
    el.addEventListener('click', () => {
      const src = el.src;
      imagesAllScreen.src = src;
      imagesFullScreen.classList.add('visible');

      imagesFullScreen.addEventListener('click', () => {
        imagesFullScreen.classList.remove('visible');
      });
    });
  }
}

imagesClick();

const skillList = document.getElementById('skill_list');
const skillProgressDiv = skillList.querySelectorAll('.skill_progress_div');

const skillHeandler = () => {
  for (const el of skillProgressDiv) {
    const percentSkill = el.querySelector('span');
    const percentSkillContent = percentSkill.textContent;
    const progressLine = el.querySelector('.progress_line');
    progressLine.style.width = `${percentSkillContent}`;
  }
};

skillHeandler();
