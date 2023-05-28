// import { auth } from "@/firebase";
// import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup} from "firebase/auth";
import axios from "axios";

    export async function registerUser(data){
        const response = await axios
               .post(
                  "https://us-central1-dulcet-order-370109.cloudfunctions.net/user/register",
                  data
               )
               return response
               
    }

   export async function authRegisterUser(data){
        const response = await axios
        .post(
              "https://us-central1-dulcet-order-370109.cloudfunctions.net/user/AuthSignUp",
              data
        )
        return response
        
    }

    