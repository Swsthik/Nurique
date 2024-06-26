import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {app} from '../firebase/config'
// import { googleProvider } from '../firebase/config'
import google from '../assets/google.png'
import {
    getDocs,
    collection,
    addDoc,
    query,
    where,
  } from "firebase/firestore";
  import { db } from "../firebase/config";
import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Contact us', href: '#' },
  { name: 'FAQ', href: '#' },
]

export default function Nav() {
   
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [name, setName] = useState("");
    const usersCollectionRef = collection(db, "users");
    const auth = getAuth(app);
    const navigate = useNavigate();




  const handleSignin =()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setName(auth.currentUser.displayName)
        // console.log(name)
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        onSubmituser()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  }

  const onSubmituser = async () => {
    try {

        const userEmail = auth.currentUser.email;

        // Check if a user with the provided email already exists
        const querySnapshot = await getDocs(
          query(usersCollectionRef, where("email", "==", userEmail))

        );
    
        if (!querySnapshot.empty) {
          // User with the provided email already exists
          // You can handle this case (e.g., show an error message)
          console.log("User already exists");
          navigate("/dashboard/profile")
          return;
        }

      await addDoc(usersCollectionRef, {
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        userId: auth.currentUser.uid,
        quiz:false,
      });
    //   getuserList();
      navigate("/dashboard/profile")
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        <div class="w-56 h-14 flex-shrink-0 text-blue-700 font-inter text-2xl font-normal pt-2">
  NeuriQue
</div>

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href className="text-sm font-semibold leading-6 text-gray-900"> */}
            <img src={google} className='w-44 cursor-pointer' onClick={handleSignin}/> 
          {/* </a> */}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
