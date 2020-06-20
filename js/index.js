const dontWork = document.querySelectorAll('[href="#"]');
for(let i of dontWork) {
	i.addEventListener('click', function(e){
		e.preventDefault();
	})
}
const menuBtn = document.querySelector('.menu_btn');
const nav = document.querySelector('nav');
const submenu = document.querySelectorAll('nav a');
let sw = 0;
menuBtn.addEventListener('click', function(){
	if(sw === 0 ) {
		this.classList.remove('no_active');
		this.classList.add('active');
		nav.classList.add('active');
		submenu.forEach(function(item){
			item.classList.add('active');
		})
		sw = 1;
	} else {
		this.classList.remove('active');
		this.classList.add('no_active');
		sw = 0;
		nav.classList.remove('active');
		submenu.forEach(function(item){
			item.classList.remove('active');
		})
	}
})
const html = document.documentElement;
const subTitle = document.querySelector('.sub_title');
const pictureWrap = document.querySelectorAll('.picture_wrap');
let mL = 0;
let posX = [50, 900, 200, 950, 1500, 1950, 2600, 2650];
function mainImgMove() {
	subTitle.style.left = (650+mL) + 'px'; 
	for(let i=0; i<pictureWrap.length; i++) {
		pictureWrap[i].style.left = (posX[i] + mL) + 'px';
	}
}
html.addEventListener('wheel', function(e){
	let delta = e.deltaY;
	delta > 0 ? html.scrollLeft += delta : html.scrollLeft += delta;
	if(delta > 0) {
		if(html.scrollLeft === 1380 || html.scrollLeft === 100) return false;
		mainImgMove();
		mL -= 10;
	} else {
		if(html.scrollLeft === 0 || html.scrollLeft === 1280) return false;
		mainImgMove();
		mL += 10;
	}
})