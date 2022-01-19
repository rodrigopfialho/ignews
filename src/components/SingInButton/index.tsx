import { FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss' 

import {signIn, useSession, signOut} from "next-auth/react"

export function SingInButton() {

    const { data: session} = useSession() //saber se o usuario esta logado ou não
 
    return session ? (
        <button 
        type="button"
        className={styles.singInButton}
        onClick={() => signOut()} // sair da aplicação
        >
            <FaGithub color="#04d361"/>
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
        type="button"
        className={styles.singInButton}
        onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417"/>
            Sing in With Github
        </button>
    )
}    