/* artists 이벤트 */
const portrait = document.querySelectorAll('.portrait');
const infoWrap = document.querySelectorAll('.info_wrap');
const infoPrev = document.querySelectorAll('.prev');
for(let i=0; i<portrait.length; i++) {
	portrait[i].addEventListener('click', function(){
		infoWrap[i].style.display = 'flex';
		console.log(this, infoWrap[i]);
	})
}
for(let i=0; i<infoPrev.length; i++) {
	infoPrev[i].addEventListener('click', function(){
		this.parentNode.parentNode.style.display = 'none';
	})
}