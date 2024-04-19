const select = document.querySelector("select");
const inputAll = document.querySelectorAll("input");
let myImg = document.querySelector("img");
let textarea = document.querySelector("textarea");
// 1:

let urlObj = {};

const removeHashTag = (str) => {
    return str.replace("#","")
}

const addPlus = (str) => {
   return str.split(" ").join("+");
}

const createImagePath = () =>{

urlObj.size = select.value;
urlObj.text = addPlus(inputAll[0].value);
urlObj.bgClr = removeHashTag(inputAll[1].value);
urlObj.txtClr = removeHashTag(inputAll[2].value);


   let urlPath = `https://via.placeholder.com/${urlObj.size}/${urlObj.bgClr}/${urlObj.txtClr}?text=${urlObj.text}`;
   myImg.src = urlPath;
   textarea.value = urlPath;

   textarea.focus();
   textarea.select();
   // copy the selected text to the clipboard
   navigator.clipboard.writeText(textarea.value)
   .then(() => {
    console.log("Text copied to Clipboard");
   })
   .catch(error => {
    console.log("Error Copying text: ", error);
   });

}


inputAll.forEach((curElem) => curElem.addEventListener('change', createImagePath));
select.addEventListener('change', createImagePath);