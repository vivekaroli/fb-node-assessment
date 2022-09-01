let data = [];

function add(user) {
    user["id"] = data.length + 1;
    data.push(user)
}
function update(user, id) {
    let index = data.findIndex(d => d.id == id);
    if (index > -1) {
        if (user.firstName) {
            data[index].firstName = user.firstName
        }
        if (user.lastName) {
            data[index].lastName = user.lastName
        }
        if (user.email) {
            data[index].email = user.email
        }
        if (user.contactNo) {
            data[index].contactNo = user.contactNo
        }
        return true
    }
    else {
        return false;
    }
}

function deleteUser(id) {
    let index = data.findIndex(d => d.id == id);
    if (index > -1) {
        data.splice(index,1)
        return true
    }
    else {
        return false;
    }
}
module.exports.add = add;
module.exports.update = update;
module.exports.deleteUser = deleteUser;
module.exports.dataObj = data;