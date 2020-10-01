        $("#cal-btn").click(function calculate(input) {
                input = $("#input-num").val()
             
                    if(input === "" || input < 0){
                            alert("VALUE CANNOT BE EMPTY OR NEGATIVE")
                    }else{
                       // const calculate = $(input).val()
                            $("#budget").text(input)
                            $("#balance").text(input)              
                    }
            $("#input-num").val("")
        })
        
        function div(item1, item2) {
         $("#divider1").append("<p> - <span id='expense-title' class='title'>"  + item1 +  "</span></br> </p>")
          $("#divider2").append("<p> £ <span id='expense-value' class='value'>" + item2 + "</span></br> </p>")   
        }

$("#expenses-btn").click(function(){
    div(input1 = $("#input-text").val(),
        input2 = $("#input-num2").val())
        
  
            if(input1 === ""  || input1 < 0 || input2 === "" || input2 < 0){
                    alert("VALUE CANNOT BE EMPTY OR NEGATIVE")
                }


$("#input-num2").val("")
$("#input-text").val("")

                /**balance
                 * subtract value from budget and append the result to balance
                 */
/*
                calculate(value = input)
               let budget = input2
                 value = input
                let balance = budget - value
                console.log($("#balance").append(balance))*/



                /**expenses
                 * everytime we add expense amount, + the input with the existing value  and append it to expense
                 */
                /*let total = input2 + input2 - $(#.budget)
                 total.append("#expenses")*/

                     
        })

        $("#trash").click(function(event){
                event.preventDefault()
                console.log($(this).parent().remove())
        })

                