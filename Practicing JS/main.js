// implementing object array
const allUsers =[{
    firstName: "Anish",
    gender: "male"
},
{
    firstName: "harkirat",
    gender: "male"
},
{
    firstName: "Ananya",
    gender: "female"
},
{
    firstName: "kashish",
    gender: "female"
}]

for(let i =0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"])
    }
}
