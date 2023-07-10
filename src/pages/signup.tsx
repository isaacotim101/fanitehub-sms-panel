import React from 'react'
import type { ReactElement } from 'react'
import Head from 'next/head'
import Button from '../components/Button'
import CardBox from '../components/CardBox'
import SectionFullScreen from '../components/Section/FullScreen'
import LayoutGuest from '../layouts/Guest'
import { Field, Form, Formik } from 'formik'
import FormField from '../components/Form/Field'
import Divider from '../components/Divider'
import Buttons from '../components/Buttons'
import { useRouter } from 'next/router'
import { getPageTitle } from '../config'
import axios from 'axios'

export default function Error() {
  const router = useRouter();

  const handleSubmit = async (values) => {
    try {
      const headers = {
        'Content-Type': 'application/json'
      };
      // Send a POST request to the signup endpoint
      await axios.post('https://api.fanitehub.com/api/v1/users', values, { headers });

      // Redirect to the "/" page
      router.push('/login');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error appropriately
    }
  };


  return (
    <>
      <Head>
        <title>{getPageTitle('Signup')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
          <Formik
            initialValues={{ displayName: '', username: '', email: '', password: '' }}
            onSubmit={(values) => handleSubmit(values)}
          >
          <Form>
            <FormField label="Full Names" help="Please enter your fullnames">
              <Field name="displayName" />
            </FormField>
              <FormField label="Username" help="Please enter your username">
                <Field name="username" />
              </FormField>
              <FormField label="Email" help="Please enter your email">
                <Field name="email" />
              </FormField>
              
              <FormField label="Password" help="Please enter your password">
                <Field name="password" type="password" />
              </FormField>

              <Divider />

              <Buttons>
                <Button type="submit" label="Register" color="success" />
                <Button href="/login" label="Login" color="warning" outline />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionFullScreen>
    </>
  )
}

Error.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}
