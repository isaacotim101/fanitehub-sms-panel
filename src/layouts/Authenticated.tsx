import React, { ReactNode, useEffect } from 'react'
import { useState } from 'react'
import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js'
import menuAside from '../menuAside'
import menuNavBar from '../menuNavBar'
import Icon from '../components/Icon'
import NavBar from '../components/NavBar'
import NavBarItemPlain from '../components/NavBar/Item/Plain'
import AsideMenu from '../components/AsideMenu'
import FooterBar from '../components/FooterBar'
import { setUser } from '../stores/mainSlice'
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import FormField from '../components/Form/Field'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'

type Props = {
  children: ReactNode
}

export default function LayoutAuthenticated({ children }: Props) {
  const dispatch = useAppDispatch()

  const darkMode = useAppSelector((state) => state.style.darkMode)

  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false)
  const [isAsideLgActive, setIsAsideLgActive] = useState(false)

  const router = useRouter()
  const [isToken, setToken] = useState('');

  const [fullnames, setFullnames] = useState('');
  const [mail, setMail] = useState('');
  const [marchantId, setMarchantId] = useState('');

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (!storedUserData || !storedUserData.user) {
      router.push('/login');
      return;
    }
    if (storedUserData && storedUserData.user) {
      const storedName = storedUserData.user.displayName;
      const storedEmail = storedUserData.user.email;
      const storedMarchant = storedUserData.user.marchantId;
  
      setToken(storedUserData.token);
      setFullnames(storedName);
      setMail(storedEmail);
      setMarchantId(storedMarchant);
  
      //console.log("isToken", isToken);
      //console.log("fullnames", storedName, "email", storedEmail, "MarchantId", storedMarchant);
  
      const handleRouteChangeStart = () => {
        setIsAsideMobileExpanded(false);
        setIsAsideLgActive(false);
      };
  
      dispatch(
        setUser({
          name: storedName,
          email: storedEmail,
          avatar:
            'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93',
        })
      );
  
      router.events.on('routeChangeStart', handleRouteChangeStart);
  
      // If the component is unmounted, unsubscribe
      // from the event with the `off` method:
      return () => {
        router.events.off('routeChangeStart', handleRouteChangeStart);
      };
    }
  }, [router.events, dispatch, isToken, setToken, setFullnames, setMail]);
  


  const layoutAsidePadding = 'xl:pl-60'

  return (
    <div className={`${darkMode ? 'dark' : ''} overflow-hidden lg:overflow-visible`}>
      <div
        className={`${layoutAsidePadding} ${
          isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
        } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <NavBar
          menu={menuNavBar}
          className={`${layoutAsidePadding} ${isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''}`}
        >
          <NavBarItemPlain
            display="flex lg:hidden"
            onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
          >
            <Icon path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger} size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain
            display="hidden lg:flex xl:hidden"
            onClick={() => setIsAsideLgActive(true)}
          >
            <Icon path={mdiMenu} size="24" />
          </NavBarItemPlain>
          
        </NavBar>
        <AsideMenu
          isAsideMobileExpanded={isAsideMobileExpanded}
          isAsideLgActive={isAsideLgActive}
          menu={menuAside}
          onAsideLgClose={() => setIsAsideLgActive(false)}
        />
        {children}
      </div>
    </div>
  )
}