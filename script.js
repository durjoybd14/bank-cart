document.getElementById("checkOutBtn").addEventListener("click", function(){
    document.getElementById("hiddenSuccess").style.display="block";
    document.getElementById("mainPart").style.display="none";
});


// reset button
document.getElementById("phoneResetBtn").addEventListener("click", function(){
    document.getElementById("phoneTotal").innerText = "1000";
    document.getElementById("phoneInput").value = "1";
   
});

document.getElementById("caseResetBtn").addEventListener("click", function(){
    document.getElementById("caseTotal").innerText = "50";
    document.getElementById("caseInput").value = "1";
});

// phone increasing part
document.getElementById("increaseBtn").addEventListener("click", function () {
    const phoneInput = document.getElementById("phoneInput").value;
    const phoneCount = parseInt(phoneInput);
    let phoneNewCount = phoneCount + 1;
    document.getElementById("phoneInput").value = phoneNewCount;

    const phoneTotal = 1000 * phoneNewCount;
    document.getElementById("phoneTotal").innerText = phoneTotal;

    // subtotal
    totalCalculate();
});


// phone decreasing part
document.getElementById("decreaseBtn").addEventListener("click", function () {
    const phoneInput = document.getElementById("phoneInput").value;

    const phoneCount = parseInt(phoneInput);
    let phoneNewCount = phoneCount;
    if(phoneNewCount>0){
      phoneNewCount = phoneCount - 1;
    }   

    document.getElementById("phoneInput").value = phoneNewCount;

    const phoneTotal = 1000 * phoneNewCount;
    document.getElementById("phoneTotal").innerText = phoneTotal;
    // subtotal
    totalCalculate();
   
});


// case increasing part
document.getElementById("caseIncreaseBtn").addEventListener("click", function(){
    const caseInput = document.getElementById("caseInput").value;
    const caseCount = parseInt(caseInput);
    let caseNewCount = caseCount + 1;
    document.getElementById("caseInput").value = caseNewCount;

    const caseTotal = 50 * caseNewCount;
    document.getElementById("caseTotal").innerText = caseTotal;

   // subtotal
   totalCalculate();

});


// case decreasing part
document.getElementById("caseDecreaseBtn").addEventListener("click", function () {
    const caseInput = document.getElementById("caseInput").value;

    const caseCount = parseInt(caseInput);
    let caseNewCount = caseCount;
    if(caseNewCount>0){
        caseNewCount = caseCount - 1;
    }   

    document.getElementById("caseInput").value = caseNewCount;

    const caseTotal = 50 * caseNewCount;
    document.getElementById("caseTotal").innerText = caseTotal;

    // subtotal
    totalCalculate();

});

//totalCalculate
function totalCalculate(){
    const phoneInput = document.getElementById("phoneInput").value ;
    let phoneCount  = parseInt(phoneInput);

    const caseInput = document.getElementById("caseInput").value ;
    let caseCount  = parseInt(caseInput);

    const total = phoneCount * 1000 + caseCount * 50 ;
    document.getElementById("subtotal").innerText = total;

    const tax = Math.round(total * .1);
    document.getElementById("tax").innerText = tax;

    const finalAmount = total + tax ;
    document.getElementById("total").innerText = finalAmount;

}





