<template>
<div>
    <!-- <h2>Name Generator</h2>
    <div class="bg-green-400">
        <h2>choose a gender</h2>
        <button>Male</button><button>Female</button><button>Unisex</button>
    </div>
    <div>



    </div> -->




    <div class="flex justify-center ">
        <form class=" ">
            <p class="text-2xl text-center font-bold text-red-500 mb-6 mt-2">CRUD Assignment</p>
            <table class="">
                <!-- <tr>
                    <td></td>
                    <td> <input type="radio" name="gender">Mr. <input type="radio" name="gender">Mrs. <input type="radio" name="gender">Ms. </td>
                <tr> -->
                <tr>
                    <td><label for="" >First Name</label></td>
                    <td> <input type="text" placeholder="Full Name" id="first" class="border border-gray-300" required><br> </td>
                </tr>
                <tr>
                     <td><label for="" >Last Name</label></td> 
                    <td><input type="text" placeholder="Last Name" id="last" class="border border-gray-300 " required><br> </td>
                </tr>
            
                
                <tr>
                    <td><label for="">Address</label></td>
                    <td><input type="text" id="address" class="border border-gray-300"><br> </td>
                </tr>


               
                <tr>
                    <td><label for="">E-Mail</label></td>
                    <td><input type="text" id="mail" class="border  border-gray-300"><br> </td>
                </tr>
                <tr>
                    <td><label for="">Mobile No.</label></td>
                    <td><input type="number" placeholder="+91" id="mobile" class="border border-gray-300"><br> </td>
                </tr>



            </table>
        </form>
        
    </div>
   
    <div class="flex justify-center">
        <button id="add" class="bg-sky-600 hover:bg-sky-700 ... m-4 p-2 rounded-md ">
            Save Changes
          </button>
          <button onclick="cleared()" class="bg-sky-600 hover:bg-sky-700 ... m-4 p-2 rounded-md w-24">
            All Delete
          </button>
    </div>
    <div class="bg-slate-200 flex justify-between">
         <table class="table-auto">     <!--id="table" -->
            <thead>
                <tr class="">
                    <th scope="col" class="border border-red-800 ">S No.</th>
                    <!-- <th scope="col">item</th> -->
                    <th scope="col" class="border border-red-800 ">FirtName</th>
                    <th scope="col" class="border border-red-800 ">LastName</th>
                    <th scope="col" class="border border-red-800 ">Address</th>
                    <th scope="col" class="border border-red-800 ">Mobile</th>
                    <th scope="col" class="border border-red-800 ">E-mail</th>
                </tr>
            </thead>
            <tbody id="table">
                <tr>
                    <th scope="row">1</th>
                    <!-- <td>first</td>
                        <td>Last</td>
                        <td>Address</td>
                        <td>Mobile</td> -->
                        <!-- <td>second</td> -->
                        <!-- <td class="bg-slate-50 flex justify-end mx-96"><button>delete</button></td> -->
                        
                    <!-- <button class="bg-sky-600 hover:bg-sky-700 ...m-4 rounded-md w-24 justify-right">
                        Delete
                      </button> -->
                </tr>
            </tbody>
        </table>
    </div>
</div>




</template>


<!-- <script>
        function getAndUpdate(){
            console.log("amit")
            first=document.getElementById("first").value;
            last=document.getElementById("last").value;
            address=document.getElementById("address").value;
            mobile=document.getElementById("mobile").value;
            mail=document.getElementById("mail").value;
            if(localStorage.getItem("itemJson")==null){
                itemJsonArray=[]
                itemJsonArray.push([first,last,address,mobile,mail])
                localStorage.setItem("itemJson",JSON.stringify(itemJsonArray))
            }
            else{
                itemJsonArraystr=localStorage.getItem("itemJson")
                itemJsonArray=JSON.parse(itemJsonArraystr)
                itemJsonArray.push([first,last,address,mobile,mail])
                localStorage.setItem("itemJson",JSON.stringify(itemJsonArray))


            }
            update()
        }
        function update(){
            if(localStorage.getItem("itemJson")==null){
                itemJsonArray=[]
                // itemJsonArray.push([first,last,address,mobile])
                localStorage.setItem("itemJson",JSON.stringify(itemJsonArray))
            } else{
                itemJsonArraystr=localStorage.getItem("itemJson")
                itemJsonArray=JSON.parse(itemJsonArraystr)
                


            }
           
            
            table=document.getElementById("table")
            let str=""
            itemJsonArray.forEach((element ,index)=> {
                str+=`
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element [0]}</td>
                    <td>${element [1]}</td>
                    <td>${element [2]}</td>
                    <td>${element [3]}</td>
                    <td class="mx-10">${element [4]}</td>
                    <td class="bg-slate-50 flex justify-end mx-96 "><button onclick="deleted(${index})">Delete</button></td>
                    
                </tr>`
                
            });
            table.innerHTML=str;

        }
        add=document.getElementById("add");
        add.addEventListener("click",getAndUpdate)
        update()



        function deleted(itemindex){
            console.log("Delete",itemindex)
            itemJsonArraystr=localStorage.getItem("itemJson")
                itemJsonArray=JSON.parse(itemJsonArraystr)

                itemJsonArray.splice(itemindex,1)
                localStorage.setItem("itemJson",JSON.stringify(itemJsonArray));
                update()

        }
        function cleared(){
            localStorage.clear()
            update()
        }
    
</script> -->