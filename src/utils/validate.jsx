export const checkValidData = (email,password,name) => {

 
    const IsEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const IsPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password);
    const IsNameValid = !name || /^[A-Za-z]+(?:[ .'-][A-Za-z]+)*$/.test(name);

    if(!IsEmailValid) return "Email is not Valid";
    if(!IsPasswordValid) return "Password is not valid";
    if(!IsNameValid) return "Name is not Valid";
    
    return null;
}