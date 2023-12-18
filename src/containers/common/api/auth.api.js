import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase";

export const signupAPI = (data) => {
    console.log(data);
    try {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ message: "Email Verification Sent.", user: user })
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            reject({ message: errorMessage })
                        })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage, errorCode);

                    if (errorCode.localeCompare('auth/email-already-in-use') === 0) {
                        reject({ message: 'Email already use' })

                    } else if (errorCode.localeCompare('auth/weak-password') === 0) {
                        reject({ message: 'Password must be 6 charcters long' })

                    } else {
                        reject({ errorMessage })
                    }
                });
        })
    } catch (error) {
        const errorMessage = error.message;
        return errorMessage
    }
}

export const siginAPI = (data) => {
    console.log(data);

    try {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    if(user.emailVerified){
                        resolve({ message: "Login sucessfully.", user: user })
                    } else {
                        reject({ message: 'Please Verify Email' })
                    }

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    if (errorCode.localeCompare('auth/invalid-login-credentials') === 0) {
                        reject({ message: 'Please enter valid login credentials' })

                    } else {
                        reject({ message: errorMessage })
                    }
                });
        })
    } catch (error) {
        const errorMessage = error.message;
        return errorMessage
    }
}

export const forgotAPI = (data) => {
    console.log(data);
    try {
        return new Promise((resolve, reject) => {
            sendPasswordResetEmail(auth, data.email)
                .then(() => {
                    resolve({ message: "Forgot password email sent successfully." });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode,errorMessage);

                    if (errorCode.localeCompare('auth/user-not-found') === 0) {
                        reject({ message: 'User not found' });
                    } else {
                        reject({ message: errorMessage });
                    }

                    // reject({ message: errorMessage });
                });

        })
    } catch (error) {
        const errorMessage = error.message;
        return errorMessage
    }

}


export const logoutAPI = () => {
    try {
        return new Promise((resolve, reject) => {
            signOut(auth).then(() => {
                resolve({message: 'Logout Successfully'})
              }).catch((error) => {
                const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode,errorMessage);
                reject({ message: errorMessage });
            });

        })
    } catch (error) {
        const errorMessage = error.message;
        return errorMessage
    }
}




// export const signupAPI = (data) => {
//     console.log(data);

//     try {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
//                 const user = userCredential.user;

//                 await sendEmailVerification(user);

//                 resolve({ message: "Email Verification Sent.", user: user });
//             } catch (error) {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorMessage, errorCode);

//                 if (errorCode === 'auth/email-already-in-use') {
//                     reject({ message: 'Email already in use' });
//                 } else if (errorCode === 'auth/weak-password') {
//                     reject({ message: 'Password must be 6 characters long' });
//                 } else {
//                     reject({ message: errorMessage });
//                 }
//             }
//         });
//     } catch (error) {
//         const errorMessage = error.message;
//         return errorMessage;
//     }
// };

// export const forgotAPI = (data) => {
//     console.log(data);

//     try {
//         return new Promise(async (resolve, reject) => {
//             try {
//                 // Check if the user with the provided email exists
//                 const signInMethods = await fetchSignInMethodsForEmail(auth, data.email);

//                 if (signInMethods.length === 0) {
//                     // User not found
//                     reject({ message: 'User not found' });
//                     return;
//                 }

//                 // User found, send password reset email
//                 await sendPasswordResetEmail(auth, data.email);
//                 resolve({ message: "Forgot password email sent successfully." });
//             } catch (error) {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode, errorMessage);

//                 if (errorCode === 'auth/user-not-found') {
//                     // User not found
//                     reject({ message: 'User not found' });
//                 } else {
//                     // Other errors
//                     reject({ message: errorMessage });
//                 }
//             }
//         });
//     } catch (error) {
//         const errorMessage = error.message;
//         return errorMessage;
//     }
// };
