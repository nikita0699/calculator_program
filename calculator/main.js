const numbutton = document.querySelectorAll(".data-number");
const operationbut = document.querySelectorAll(".data-operation");
const equalbuttton = document.querySelector(".data-equal");
const deletebutton = document.querySelector(".data-delete");
const allcleanbut = document.querySelector(".data-all-clear");
const preoperatele = document.querySelector(".pre-aperand");
const curoperatele = document.querySelector(".cur-operand");
class Calculator{
    constructor(preoperatele,curoperatele){
        this.preoperatele = preoperatele;
        this.curoperatele = curoperatele;
        this.clear();
    }
    clear(){
        this.currentoperand = "";
        this.preoperand = "";
        this.operation = undefined;
    }
    appendnumber(number){
        if(number==="." && this.currentoperand.includes(".")) return;
            this.currentoperand = this.currentoperand.toString() + number.toString();
    }
    delete(){
           this.currentoperand = this.currentoperand.toString().slice(0, -1);
      }
    chooseoperation(operation) {
              if (this.currentoperand === "") return;
              if (this.preoperand !== "") {
                this.cal();
              }
              this.operation = operation;
              this.preoperand = this.currentoperand;
              this.currentoperand = "";
            }
            cal() {
              let result;
              const prev = parseFloat(this.preoperand);
              const curr = parseFloat(this.currentoperand);
              if (isNaN(prev) || isNaN(curr)) return;
              switch (this.operation) {
                case "+":
                  result = prev + curr;
                  break;
                case "-":
                  result = prev - curr;
                  break;
                case "*":
                  result = prev * curr;
                  break;
                case "/":
                  result = prev / curr;
                  break;
                default:
                  break;
              }
              this.currentoperand = result;
              this.operation = undefined;
              this.preoperand = "";
            }
    updatedisplay(){
          this.curoperatele.innerText = this.currentoperand;
          if (this.operation != null) {
            this.preoperatele.innerText = `${this.preoperand} ${this.operation}`;
          } else {
            this.preoperatele.innerText = this.preoperand;
          }
        }
    }
document.addEventListener("DOMContentLoaded",()=>{
    const calc = new Calculator(preoperatele,curoperatele);
    numbutton.forEach((button)=>{
        button.addEventListener("click",()=>{
            calc.appendnumber(button.innerText);
            calc.updatedisplay();
        });
    });
    operationbut.forEach((button) => {
        button.addEventListener("click",()=>{
            calc.chooseoperation(button.innerText);
            calc.updatedisplay();
        });
    });
    equalbuttton.addEventListener("click", () => {
              calc.cal();
              calc.updatedisplay();
            });
    deletebutton.addEventListener("click", () => {
        calc.delete();
        calc.updatedisplay();
     });
     allcleanbut.addEventListener("click", () => {
             calc.clear();
           calc.updatedisplay();
         });
});