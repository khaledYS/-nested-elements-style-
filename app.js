const pa = document.querySelectorAll('.ammar.nested-div')
const chl = document.querySelectorAll('.ammar.nested-div > .ammar.nested-el')



pa.forEach(element => {
    const ammarPaDataColor = element.getAttribute('ammar-pa-data-color')
    const ammarPaDataSize = element.getAttribute('ammar-pa-data-size')
    const ammarPaDataShape = element.getAttribute('ammar-pa-data-shape')
    ammarPaDataSize ? element.style.borderLeftWidth = ammarPaDataSize :''
    ammarPaDataColor ? element.style.borderLeftColor = ammarPaDataColor :''
    ammarPaDataShape ? element.style.borderLeftStyle = ammarPaDataShape :''
});



















































function addNestedElement(v){
    const newNestedEl = document.createElement('span')
    newNestedEl.innerHTML= '<span> '+ v + '</span>'
    newNestedEl.className = 'ammar nested-el'
    pa[0].append(newNestedEl);
}