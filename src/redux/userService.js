import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";



const storeData = async (data) => {
    try {
    await AsyncStorage.setItem('token', data)
    } catch (e) {
    console.log(e);
    }
}



const removeItem = async() => {
    try {
        await AsyncStorage.removeItem('token');
        console.log('logout');
    }
    catch(exception) {
        console.log(exception)
    }

}


const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
            return value;
        }else{
            return null;
        }
    } catch (e) {
        alert('Failed to fetch the input from storage');
    }
};


// Login user
const login = async (userData) => {

    const response = await axios.post('https://hidden-sierra-54522.herokuapp.com/users/login', userData);

    if (response.data) {
        storeData(response.data);
    }

    return response.data
}


// Logout user
const logout = async() => {
    removeItem();
}


  // Logout user
const checkHasToken = async() => {
    return getToken();    
}



const authService = {
    login,
    logout,
    checkHasToken,
}

export default authService
