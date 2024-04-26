import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser} = useAuthContext()

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        const succes = handleInputErrors({fullName, username, password, confirmPassword, gender})
        if (!succes) return;

        setLoading(true)
        try {
            const res = await fetch('/api/auth/signup', {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            })

            const data = await res.json()
            if (data.error) {
                alert(data.error)
            }

            localStorage.setItem('chat-user',JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, signup }
}

export default useSignup;

function handleInputErrors({fullName, username, password, confirmPassword, gender}) {
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        alert('One of inputs are empty');
        return false;
    }

    if(password !== confirmPassword){
        alert('Passwords are not the same')
        return false;
    }
    
    if(password.length < 6){
        alert('Your password must be at least 6 characters')
        return false;
    }
    
    return true
}