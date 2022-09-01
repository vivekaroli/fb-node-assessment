
function User(firstName,lastName,email,contactNo){
    let user = {}
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.contactNo = contactNo
    return user;
}

module.exports =User