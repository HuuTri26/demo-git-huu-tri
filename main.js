
var total;
var courses =[
     {
        id:1,
        name: "Javascript",
        coin:300,
     },
     {
        id:2,
        name: "Javascript",
        coin:300,
     },
     {
        id:3,
        name: "Javascript",
        coin:300,
     },
     {
        id:4,
        name: "Javascript",
        coin:300,
     },
     {
        id:5,
        name: "Javascript",
        coin:300,
     },
];

var totalCoin= courses.reduce(function (total,course){
    return total + course.coin;
},0 )
console.log(2);

//Toán tử: 
//     === : là so sánh giá trị và cả dữ liệu của biến
//     !==: là so sánh khác về cả giá trị và kiểu dữ liệu.

// Các kiểu dữ liệu:
//   Kiểu dữ liệu nguyên thủy(Primary Data):
//         Number, String,Boolean, Undefined, Null, Symbol

//  Kiểu dữ liệu phức tạp(complicated data):
//         Object, function.

// Object:
//   var object ={
// [     key]: [value],

//   }

//Array là 1 phần Object:
// cách khai báo: 
// var arr =[
   // Element,

// ]

// typeof  biến --> kiểu dữ liệu của biến.

//Các  kiểu dữ liệu là false:
//     Nah, undefined , "" , '', 0, false,null...


//argument: giúp truyền nhiều phần tử mà không cần tham số ( chỉ dùng trong function);

// Nối chuỗi :
//   `${biến}  `;


/*Expresstion function:

 var expresstionFucntion = function(){

  }

  var object ={
      function(){

      }
  }*/

/*Declare function:
 function expresstionFunction (){

 }*/


 /* khởi tạo String:
   C1: var string='master26';
   C2  var string = new String('master26 la \'sieu nhan\'')


*/
                                     //CHUOI
// Length: chieu dai chuoi

//            string.length;

// Find index: tim vi tri cua xau
//          string.indexOf('JS...',6);
//          string.lastIndexOf('JS...');

// Cut string: cat chuoi

//           string.slice(vi tri bat dau,vi tri ket huc);

// Replace: thay thế chuỗi
//           string.replace(/JS/g,'Javascript');

// Convert to uppercase: Chu In
//           string.toUpperCase();

// Trim: Laoi bo khoang Trang::
//             string.trim();
// split: Cat chuoi thanh array:
//              var players='Ronaldo, RashFord, Lewandoski';
//              console.log(players.split(','));

// get a chacracter by index:
//                     string.charAt(Vi tri can tim)

                                     //SO

// Number.isFinite(): 	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean

// Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean

// Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động

// Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên

// Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân

// Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi

                                        // ARRAY
// vd: language=["Java","PHP","HTML"];

//toString(): language.toString

//join: Biến array thành chuỗi. (language.join(', '))

//pop: Xoa element cuối mang (language.pop())

//push:Them 1 hay nhieu phan tu vao cuoi mang (language.push('Dart','Java'))

//shift: Xoa phan tu o dau mang (language.shift());

//unshift: Them 1 hoac nhieu phan tu vao dau mang (language.unshift('Dart','Java'))

//splice:Xoa hay chen phan tu theo vi tri (language.slice(1,2,'Dart')) <-> Xoa 2 phan tu o vi tri thu 1 tro di , chen 'Dart' vao vi tri thu 1.

//concat: Noi mang (language.concat(language2))

//slice: Cắt 1 hay 1 so element (language.slice(-2,-1))

//            OBJECT 
// [agekey]='age';
// var inFor={
//    name: 'TRí',
//    MSSV: 'N21DCAT058',
//    age:18;
     
// };

// inFor['e-mail']='n21dcat058@gmail.com';

//console.log(inFor[agekey]);


//                      object constructor

// funtion User(firstName,lastName,Avavtar){
//    this.firstName=firstName;
//    this.lastName=lastName;
//    this.Avatar=Avatar;
//    this.getName=fuction(){
//       return `${this.firstName} ${this.lastName}`;
//    }
// }

// var user=new User('Vu','Nguyen','Avatar');
// var author= new User('Ti','Bui','Avatar');

// author.title='Chia se dao tren F8';
// user.comment='djhckds';

// console.log(user);
// console.log(author);

// User.prototype.className='F8';
// User.prototype.getClass= function(){
//    return this.className;
// }

// prototype:them thuoc tin ben ngoai object

//                                          DATE
var date= new Date();
let year= date.getFullYear();//Năm
let month=date.getMonth()+1;//tháng
let day=date.getDate();//Ngày
console.log(`${day}/${month}/${year}`);

//                                    math object

Math.PI//   Số Pi

Math.round()// làm tròn số;

Math.abs() // giá trị tuyệt đối

Math.ceil()//làm tròn trên

Math.floor()// làm tròn dưới;

Math.random()// chon 1 so ngaaux nhiên

Math.min()// trả về số bé nhất

Math.max()// trả về số lớn nhất

// switch(){
//    case 1:
//    case 2:
//       console.log(123);
//       break;
//    default:
//       break;
      
// }


//              TOAN TU 3 NGOI
var course={
   name: 'Javascript',
   coin:250,
}
// if(course.coin>0){
//    console.log(`${course.coin} coins`);
// }
// else{
//    console.log("Mien phi");
// }

// var res= course.coin>0 ? `${course.coin} coin`:"Mien phi";


//                    LOOP

// for/in: vong lặp qua key;
// for/of: vòng lập qua value;
// do/while:chạy ít nhất 1 lần;

for(var key in course){
   console.log(`Thuộc tin ${key} : ${course.key} `);
}

for(var value of Object.key(course)){
   console.log(course[value]);
}

for(var value of Object.value(course)){
   console.log(value);
}
var i=0;
var myArr=[
      'js',
      'html and css',
      'dart',
]
while(i<myArr.length){
   cpnsole.log(myArr[i]);
}
var isSuccess=false;

do {
   i++;
   console.log('Nạp thẻ lần '+i);
   if(false){
      isSuccess=true;
   }
}while(!isSuccess &&i<=3);

var courses =[
   {
      id:1,
      name: "Javascript",
      coin:300,
   },
   {
      id:2,
      name: "Javascript",
      coin:300,
   },
   {
      id:3,
      name: "Javascript",
      coin:300,
   },
   {
      id:4,
      name: "Javascript",
      coin:300,
   },
   {
      id:5,
      name: "Javascript",
      coin:300,
   },
];
                       //Mảng 2:

//forEach(): duyệt qua các phần tu của mảng.

course.forEach(function(courses,inde){
       console.log(inde,course);
})



//every(): kiểm tra ĐK tất cả các phần tử của mảng. Trả về true /false

var isFree= courses.every(function(course,index){
   return course.coin===0;
})
console.log(isFree);

//some(): kiểm tra chỉ 1 phần tử thỏa đk.Trả về true /false
var isFree= courses.some(function(course,index){
   return course.coin===0;
})
console.log(isFree);

//find(): kiểm tra đk và trả về 1 phần tử.Dừng lại khi true
 
var course= courses.find(function(course,index){
   return course.name==='Javascript';
});
console.log(course);

//filter(): trả về danh sách tất cả phần tử thỏa đk;

var course= courses.filter(function(course,index){
   return course.name==='Javascript';
})
console.log(course);

//map: trả về mảng ban đầu có thể thêm nhiều element;

var newCourse=courses.map(function(course){
      return {
         id:course.id,
         name:course.name,
         coin:course.coin,
         coinText:`Gia: ${course.coin}`,
      };
})
console.log(newCourse);

//reduce:
var i=0;
function coinHandle(accumulater,curentValue,curentIndex,originArray){
      i++;
      console.table({
         'lượt chạy':i,
         'Biến tích trữ':accumulater,
      });
      console.log(currentValue);
      return accumulater+ curentValue.coin;

}
var totalCoin=courses.reduce(coinHandle,0);

console.log(totalCoin);
var totalCoin= courses.reduce(function (total,course){
   return total + course.coin;
},0 );

//khi không có giá trị khởi tạo thì lấy giá trị phần từ đầu tiên

//flat:"Làm phảng " mảng ;
var deptArray=[1,2,[3,4],5,6,[7,8,9]];

var flatArray=deptArray.reduce(function(flatOutput,deptItem){
   return flatOutput.concat(deptItem);

},[]);
console.log(flatArray);
Array.prototype.reduce2=function(callback,result){
   let i=0;
   if(arguments.length<2){
      i=1;
      result=this[0];
   }
   for(;i<=this.length;i++){
      result=callback(result,this[i],i,this);
   }
   return result;
}
const numbers=[1,2,3,4,5];
const result=numbers.reduce2((total,initialValue) =>{
   return total+initialValue;
},0);
console.log(`Tong la `+ result);

//include method:tìm phần tử có chứa trong  chuỗi.Trả về true/false;

var title="Responsive for beginer";
// title.length+(-1)// bắt đầu tìm
coconsole.log(title.includes("beginer",-1));

