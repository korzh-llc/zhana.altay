const images = document.querySelectorAll('.slider__img')
const controlls = document.querySelectorAll('.controlls')
let imageIndex = 0

function show(index){
    images[imageIndex].classList.remove('active')
    images[index].classList.add('active')
    imageIndex = index
}

controlls.forEach((e) =>{
    e.addEventListener('click' , () => {
    if(event.target.classList.contains('prev')) {
        let index = imageIndex - 1

        if(index < 0){
            index = images.length - 1
        }
        show(index)
    } else if (event.target.classList.contains('next'))
    {
        let index = imageIndex + 1
        if (index >= images.length){
            index = 0
        }
        show(index)
    }
})
})

show(imageIndex)

let cards = document.querySelector('.cards')

let carArr = []

class Card{
    constructor( title , description ){
        this.title = title
        this.description = description
    }
    tohtml(){
        return`<div class="card">
                    <h2 class="option__text">${this.title}</h2>
                    <p class="option__descr">${this.description}</p>
               </div>`
    }
}

carArr.push(new Card('Надёжность' , " Мы строим из качественного кирпича с применением современных технологий. Наши дома отличаются прочностью, долговечностью и устойчивостью. Каждая квартира спроектирована так, чтобы дарить комфорт и сохранять тепло даже в суровые зимы. "))
carArr.push(new Card("Безопасность" , "Мы создаём жилые комплексы, где каждая семья чувствует себя спокойно. Закрытые дворы, круглосуточное видеонаблюдение и охрана гарантируют безопасность, а дети могут свободно играть во дворе без лишних забот родителей."))
carArr.push(new Card("Комфорт" , "Комфорт — это не только уют внутри квартиры, но и всё, что окружает дом. Благоустроенные дворы с зелёными зонами, современные детские и спортивные площадки, просторные планировки и продуманная инфраструктура рядом делают жизнь максимально удобной."))
carArr.push(new Card("Доступность" , "Мы предлагаем удобные условия приобретения жилья: рассрочку, ипотеку и индивидуальные варианты оплаты. Наша цель — чтобы каждая семья могла позволить себе качественное и современное жильё по справедливой цене."))

for( i = 0 ; i < carArr.length ; i++ ){
    cards.innerHTML += carArr[i].tohtml()
}