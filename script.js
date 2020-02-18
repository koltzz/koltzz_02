let section = document.querySelectorAll('[class$="_head"] img');
let content = document.querySelectorAll('[class$="_content"]');
let eevent = new Event("click", {
  bubbles: true
});

document.querySelectorAll('[class$="_head"] img').forEach(el => el.onclick = active_section);

function active_section(event) {
  for (i = 0; i < section.length; i++) {
    if (section[i] == event.target) {
      content[i].parentNode.classList.remove('hidden');
    } else {
      content[i].parentNode.classList.add('hidden');
    }
  }
}

section[0].dispatchEvent(eevent);

let head_item = document.querySelectorAll(".gallery_head_item");
head_item.forEach(el => el.onclick = gallery);
let content_item = document.querySelectorAll(".gallery_content_item");
let img;

let galleryStatus = {
  currentSection: 0,
  iter: 0,
  iterArr: [],
  imgClass: ['center', 'rigth', 'left'],
};

function gallery(event) {
  head_item.forEach(el => el.classList = '');
  content_item.forEach(el => {
    el.classList.add("hidden");
    if (el.classList.contains('hidden')) {
      [...el.querySelector('.foto').children].forEach(el => {
        el.classList = "";
      })
    }
  });
  for (i = 0; i < head_item.length; i++) {
    if (head_item[i] == event.target) {
      content_item[i].classList.remove("hidden");
      if (!content_item[i].classList.contains("hidden")) {
        head_item[i].classList.add('color')
      }
      img = content_item[i].querySelectorAll(".foto div");
      galleryStatus.currentSection = i;
      classDiv();
    }
  }
}

head_item[0].dispatchEvent(eevent);

function classDiv() {

  img.forEach(el => el.classList = "");

  let qq = galleryStatus.iterArr[galleryStatus.currentSection] || 0;

  for (i = 0; i < img.length; i++) {
    img[qq % img.length].classList.add(galleryStatus.imgClass[i]);
    qq++;
    if (img[i].classList.contains('center')) {
      galleryStatus.iterArr[galleryStatus.currentSection] = i;
    }
  };

  // console.log(galleryStatus.iterArr);

  document.querySelector('.rigth').onclick = (() => {
    galleryStatus.iterArr[galleryStatus.currentSection] += 1;
    classDiv();
  });

  document.querySelector('.left').onclick = (() => {
    galleryStatus.iterArr[galleryStatus.currentSection] += img.length - 1;
    classDiv();
  });

}

let question = document.querySelectorAll('.question > div');
question.forEach(el => el.querySelector('div').classList.add('hidden'));

function questionOn() {
  question.forEach(el => {
    el.classList = '';
    el.querySelector('div').classList.add('hidden');
  });
  for (i = 0; i < question.length; i++) {
    if (event.target == question[i].querySelector('span')) {
      question[i].classList.add('active');
      question[i].querySelector('div').classList.remove('hidden');
    }
  }
}

question.forEach(el => el.querySelector('span').onclick = questionOn);