const section = document.querySelectorAll('.section')
const li = document.querySelectorAll('li')
li.forEach(e => {
    let liData = e.dataset.section
    e.addEventListener('click', e => {
        section.forEach(e => {
            // removeActive()
            let section = e.dataset.section
            if(section == liData){
                e.classList.add('active')
            }else{
                e.classList.remove('active')
            }
        })
    })
})

function removeActive(){
    section.forEach(e => {
        e.classList.remove('active')
    })
}