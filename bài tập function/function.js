// Bài 1: Viết chương trình cộng hai số
// Ý tưởng cho bài này như sau: trước tiên cần viết một hàm công hai số và nó có
// có hai tham số truyền vào, lúc này hai tham số đó chúng ta sẽ sử dụng hàm
// prompt() để lấy. Lưu ý khi lấy dữ liệu từ người dùng thì bạn nên sử dụng hàm
// parseInt() or ép kiểu Number để chuyển sang kiểu number nhé, nếu không nó sẽ
// hiểu là cộng hai chuỗi nên dẫn đến kết quả sai.
// Sử dụng Return

// function hello(){
//     let a = parseInt(prompt("mời bạn nhập số a"))
//     let b = parseInt(prompt("mời bạn nhập số b"))
//     let tổng = a+b;
//      console.log(tổng);
//      return;
// }
// hello();


// bài 2: Tính tổng các số lẻ trong mảng. Sử dụng Return


// function hello(){
//         let array = [1,2,3,4,5,6]
//         let a = 0;
//          for(let i = 0; i< array.length;i = i + 1){
//         if(array[i] %2 !== 0){
//             a = a + array[i];
//          }
//     }console.log(a);
//     return;
//     }
//     hello()

// bài 2.1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.

//  function hello(){
//         let a = Number(prompt("nhập số bất kì"));
//         let b = a*a;
//         console.log(b);
//         return;
//     }
//     hello()

// bài 2.2: 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
// function hello(){
//         let check = Number(prompt("nhập số bất kì"))
//         let S = (check*check)*Math.PI
//         let C = 2*check * Math.PI
//     alert(`diện tích của hình tròn là ${S}`)
//     alert(`chu vi của hình tròn là ${C}`)
//     return;
//     }
//     hello()

// bài 2.3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xâydựng được.
 

// function factorial(x){
 
//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// console.log(factorial(5));

// bài 2.4 : 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. 
//Nếu là ký tự số hàm trả về true, ngược lại trả về false.
// function factorial(){
//     let inPut = Number(prompt("mời b nhập"));
    
//     if(inPut ===Number(inPut)){
//         console.log(`${inPut} là kí tự số : true`)
//     }else{
//        console.log(`${inPut} không phải là kí tự số : flase`)
//     }return;
// }
//     factorial()

//bài 2.5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.

// function SoNguyenCoGiaTriNhoNhat(){

//      let a = Number(prompt("mời bạn nhập số a"));
//     let b = Number(prompt("mời bạn nhập b"));
//     let c = Number(prompt("mời bạn nhập số c"));
    
//     d = Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c);
//     if(a<b && a<c && d){
//         alert(`${a} là số nhỏ nhất`);
//     }else if (b<a&&b<c && d){
//         alert(`${b} là số nhỏ nhất`);
//     }else {
//         alert(`${c} là số nhỏ nhất`)
//     }
//     }SoNguyenCoGiaTriNhoNhat();

// bài 2.6 Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dươngkhông. 
//Nếu là nguyên dương trả về true, ngược lại trả về false.
 
// function hello(){
//         let a = Number(prompt("mời b nhập số"))
//         let b = Number.isInteger(a)&&a>0
//         if(b===true){
//             alert(`${a} là số nguyên: true`)
    
//         }else{
//            alert(`${a} không phải là số nguyên: flase`)
//         }return;
//     }hello()

// bài 2.7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.

// function hello(){
//         let a = Number(prompt("nhập vào số bất kì"))
//         let b = Number(prompt("nhập vào số bất kì"))
//         let temp = a;
//         a = b;
//         b= temp;
//     console.log("a",a);
//     console.log("b",b);
//     return;
//     }
//     hello();

//bài 2.9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ
//đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về - 1.

//  function hh (){
//         let kiTu = prompt("hãy nhập những gì bạn thích").split(""); 
//         let inPut = prompt("nhập một kí tự bất kì") ;
//         let bienAo = 0;
//         for(i = 0; i < kiTu.length; i++){
//             if (kiTu[i] === inPut){
//                 bienAo = bienAo + 1;
//             }
//         }if(bienAo > 0){
//             alert(`kí tự xuất hiện ${bienAo} lần trong các kí tự`);
//         }else{
//             alert("kí tự không có trong những thứ kia")
//         }return;
    
//     }hh()










































































































