// import React, { useState, useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getDatabase, ref, set, onValue } from 'firebase/database';
// import { getStorage, uploadBytes, getDownloadURL, ref as storageRef } from 'firebase/storage';
// import { Link } from 'react-router-dom';

// const ProfilePage = () => {
//     const [user, setUser] = useState(null);
//     const [profilePic, setProfilePic] = useState(null);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [age, setAge] = useState("");
//     const [gender, setGender] = useState("");
//     const [loading, setLoading] = useState(true);
//     const [uploading, setUploading] = useState(false);

//     const auth = getAuth();
//     const db = getDatabase();
//     const storage = getStorage();

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             if (currentUser) {
//                 setUser(currentUser);
//                 const userRef = ref(db, 'patients/' + currentUser.uid);
//                 onValue(userRef, (snapshot) => {
//                     const data = snapshot.val();
//                     if (data) {
//                         setName(data.name || "");
//                         setEmail(data.email || "");
//                         setAge(data.age || "");
//                         setGender(data.gender || "");
//                         if (data.profilePicUrl) {
//                             setProfilePic(data.profilePicUrl);
//                         }
//                     }
//                 });
//             } else {
//                 window.location.href = '/login';
//             }
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, [auth, db]);

//     const handleUpdateProfile = () => {
//         if (user) {
//             const userRef = ref(db, 'patients/' + user.uid);
//             set(userRef, {
//                 name,
//                 email,
//                 age,
//                 gender
//             }).then(() => {
//                 console.log("Profile updated successfully");
//             }).catch((error) => {
//                 console.log("Error updating profile:", error.message);
//             });
//         }
//     };

//     const handleProfilePicUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setUploading(true);
//             const profilePicRef = storageRef(storage, 'profile-pics/' + user.uid);
//             uploadBytes(profilePicRef, file).then(() => {
//                 getDownloadURL(profilePicRef).then((url) => {
//                     const userRef = ref(db, 'patients/' + user.uid);
//                     onValue(userRef, (snapshot) => {
//                         const data = snapshot.val();
//                         set(userRef, { ...data, profilePicUrl: url }).then(() => {
//                             console.log("Profile picture uploaded and URL updated");
//                             setProfilePic(url);
//                             setUploading(false);
//                         }).catch((error) => {
//                             console.log("Error updating profile picture URL:", error.message);
//                             setUploading(false);
//                         });
//                     });
//                 });
//             }).catch((error) => {
//                 console.log("Error uploading profile picture:", error.message);
//                 setUploading(false);
//             });
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>Patient Profile</h1>
//             {user && (
//                 <div>
//                     <label>Profile Picture:</label>
//                     <br />
//                     {profilePic && <img src={profilePic} alt="Profile" style={{ width: 100, height: 100 }} />}
//                     <br />
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleProfilePicUpload}
//                         disabled={uploading}
//                     />
//                     {uploading && <p>Uploading...</p>}
//                     <br /><br />
//                     <label>Name:</label>
//                     <br />
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                     <br /><br />
//                     <label>Email:</label>
//                     <br />
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <br /><br />
//                     <label>Age:</label>
//                     <br />
//                     <input
//                         type="number"
//                         value={age}
//                         onChange={(e) => setAge(e.target.value)}
//                     />
//                     <br /><br />
//                     <label>Gender:</label>
//                     <br />
//                     <select
//                         value={gender}
//                         onChange={(e) => setGender(e.target.value)}
//                     >
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Other">Other</option>
//                     </select>
//                     <br /><br />
//                     <button onClick={handleUpdateProfile}>Update Profile</button>
//                     <br /><br />
//                     <Link to="/logout">Logout</Link>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProfilePage;
