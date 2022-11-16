export default function buttonMore(props) {

let buttonMore = document.createElement('div');
buttonMore.classList.add('more-info', 'bold-text');    

buttonMore.innerHTML = `<div>${props}</div>
                        <div class="more-symbol">></div>`;
                        
                        return buttonMore;
}