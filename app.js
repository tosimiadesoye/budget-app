$("#cal-btn").click(function calculate(input) {
        input = $("#input-num").val()
     
            if(input === "" || input < 0){
                    alert("VALUE CANNOT BE EMPTY OR NEGATIVE")
            }else{
               // const calculate = $(input).val()
                    $("#budget").text(input)
                    $("#balance").text(input)              
            }
     $("#input-num").focus()
    $("#input-num").val("")
})

function div(item) {
 $("#divider1").append("<span id='expense-title'>" + item + "</span>")
    $("#divider2").append("<span id='expense-value'>" + item + "</span>")   
}
    
$("#expenses-btn").click(function(input1, input2){
    div(input1 = $("#input-text").val(), input2 = $("#input-num2").val()) 
  
            if(input1 === "" || input1 < 0 || input2 === "" || input2 < 0){
                    alert("VALUE CANNOT BE EMPTY OR NEGATIVE")
                }else{
                  //  let addExpenses = $(input1).val()
                            $("#expense-title").text("-" + input1)
                            $("#input-text").focus()
                            $("#input-text").val("") 

                    //let addValue = $(input2).val()
                            $("#expense-value").text(input2)
                            $("#input-num2").focus()
                            $("#input-num2").val("")
 
                }

                
/**balance
 * subtract value from budget and append the result to balance
 */
                calculate(input)
                 let budget = input2
                 let value = input
                 let balance = budget - value
                 $("#balance").append(balance)
                 
                     
        })
  



 /**expenses
  * everytime we add expense amount, + the input with the existing value  and append it to expense
  */
 