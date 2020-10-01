$("#cal-btn").click(function () { //calculate is here
    let  input = $("#input-num").val() //this is input
   
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

function div(item1, item2) {
$("#divider1").append("<p> - <span id='expense-title' class='title'>"  + item1 +  "</span></br> </p>")
$("#divider2").append("<p> £ <span id='expense-value' class='value'>" + item2 + "</span> <span id='trash'><i class='fa fa-trash' aria-hidden='true'></i></span></br> </p>")   
}

$("#expenses-btn").click(function(){
div(input1 = $("#input-text").val(), // what is this??? - new to me // it worked though, my function wasn,t working so tried that and it did!!, new to me too
input2 = $("#input-num2").val())


  if(input1 === ""  || input1 < 0 || input2 === "" || input2 < 0){
          alert("VALUE CANNOT BE EMPTY OR NEGATIVE")
      }

$("#input-num2").focus() // I really don't think you need this
$("#input-num2").val("")
$("#input-text").focus() // I don't think you need it either..
$("#input-text").val("")

      /**balance
       * subtract value from budget and append the result to balance
       */
     
     /*
      calculate(value = input) // what is this??? where is calculate??? // idk this declaration
    
    
     let budget = input2
       value = input // where is the variable value??... input is undefined //it worked for the function above so I expected it to do the same here
       // well... it will work. //okay
      let balance = budget - value // this should work
      console.log($("#balance").append(balance))*/


      /**expenses
       * everytime we add expense amount, + the input with the existing value  and append it to expense
       */
      /*let total = input2 + input2 - $(#.budget) // this is absolutely not right
       total.append("#expenses")*/

           
})

$("#trash").click(function(event){
      event.preventDefault()
      console.log($(this).parent().remove())
})

      