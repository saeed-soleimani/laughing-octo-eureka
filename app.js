const textQuestion = document.querySelectorAll('.question-text')
const responseDivs = document.querySelectorAll('.response')
const responseTexts = document.querySelectorAll('.response-text')
const questionDivs = document.querySelector('.question')
const questionIcon = document.querySelectorAll('.question-icon')
const answerIcon = document.querySelectorAll('.answer-icon')
const hide = document.querySelectorAll('hide')
const faqCard = document.querySelector('.faq-cart')


textQuestion.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (responseDivs[index].style.display === 'block') {
            responseDivs[index].style.display = 'none'
            
        } else {
            responseDivs[index].style.display = 'block'
            questionDivs.style.marginBottom = '1rem'
        }
    })
})

textQuestion.forEach((item, index) => {
    item.addEventListener('keydown', () => {
        if (responseDivs[index].style.display === 'block') {
            responseDivs[index].style.display = 'none'
        } else {
            responseDivs[index].style.display = 'block'
            questionDivs.style.marginBottom = '1rem'
        }
        
    })
})


for (let i = 0; i < textQuestion.length; i++) {
    textQuestion[i].addEventListener('click', function () {
        questionIcon[i].classList.toggle('hide')
        answerIcon[i].classList.toggle('hide')
    })
}








