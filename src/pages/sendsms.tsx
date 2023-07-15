import { mdiAccount, mdiBallotOutline, mdiMail } from '@mdi/js'
import { Field, Form, Formik } from 'formik'
import Head from 'next/head'
import { ReactElement } from 'react'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import Divider from '../components/Divider'
import CardBox from '../components/CardBox'
import FormField from '../components/Form/Field'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import axios from 'axios'

const FormsPage = () => {
  const handleSubmit = async (values: { smsid: string; phone: string; message: string }) => {
    try {
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      };

      const response = await axios.post('https://cloud.fanitehub.com/sms.php', values, { headers });

      console.log('sent sms', response.data);
  
      // Redirect to the "/" page or handle success
      // router.push('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error appropriately
    }
  };
  
  return (
    <>
      <Head>
        <title>{getPageTitle('Send Bulk Sms')}</title>
      </Head>

      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiBallotOutline}
          title="Send Bulk Sms"
          main
        ></SectionTitleLineWithButton>

        <CardBox>
          <Formik
            initialValues={{ smsid: '', phone: '', message: '' }}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormField label="SmsId" icons={[mdiAccount, mdiMail]}>
                <Field name="smsid" placeholder="smsid" />
              </FormField>
              <FormField label="Number(s)" hasTextareaHeight>
                <Field as="textarea" name="phone" placeholder="Phone" id="phone" />
              </FormField>

              <Divider />

              <FormField label="Message" hasTextareaHeight>
                <Field name="message" as="textarea" placeholder="Your message here" />
              </FormField>

              <Divider />

              <Buttons>
                <Button type="submit" color="info" label="Submit" />
                <Button type="reset" color="info" outline label="Reset" />
              </Buttons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  )
}

FormsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default FormsPage
