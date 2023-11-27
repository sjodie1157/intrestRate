function calc(){
    let inputAmount = document.querySelector('[data-amount]').value
    let inputInterest = document.querySelector('[data-interest]').value
    let output = document.querySelector('[data-output]')
    output.textContent = `R ${inputAmount * (inputInterest/100)}`
    if (inputAmount, inputInterest < 0 ){
        return output.textContent = `Cannot have negative money or interest`
    }
    else{
        return output.textContent = `R ${inputAmount * (inputInterest/100)}`
    }
}

let btn = document.querySelector('[data-button]')
btn.addEventListener('click',calc)