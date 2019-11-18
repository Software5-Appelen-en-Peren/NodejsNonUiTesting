const users = []; 
let id = -1;

module.exports = {
    createUser : (email,password) => {
        id++;
        users.push({id : id, email : email, password : password});
        return id;
    }, 
    userExists : (id) => {
         const user = users.find((user) => { return user.id === id; })
         return user === undefined ? false : true;

    }, 
    login : (email,password) => {
        const user = users.find((user) => { return user.email === email && user.password === password});
        return users === undefined ? null : { loggedIn : true, id : users.id};
    }

}