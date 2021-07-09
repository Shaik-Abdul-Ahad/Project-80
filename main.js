names_of_people = [];
function submit() {
   var GuestName = document.getElementById("name1").value;
   names_of_people.push(GuestName);
   document.getElementById("guestList").innerHTML=names_of_people;
}


   function sorting() {
      names_of_people.sort();
      document.getElementById("display_name").innerHTML=names_of_people;
  }

function searching() {
   
   var s = document.getElementById("s1").value;
   var found=0;
   var j;
   for(j=0; j<names_of_people.length; j++) {
      if(s==names_of_people[j]){
         found=found+1;
      }
   }

   document.getElementById("p2").innerHTML = " Name Found "+found+" time/s";
   console.log(" found name "+found+" time/s");

}
   
