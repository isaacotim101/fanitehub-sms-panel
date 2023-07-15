import {
  mdiMessageTextOutline,
  mdiChartTimelineVariant,
  mdiWalletOutline,  mdiAccountPlus,
} from '@mdi/js'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import type { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import CardBoxWidget from '../components/CardBox/Widget'
import { useSampleClients, useSampleTransactions } from '../hooks/sampleData'
import CardBoxTransaction from '../components/CardBox/Transaction'
import { Client, Transaction } from '../interfaces'
import CardBoxClient from '../components/CardBox/Client'
import { getPageTitle } from '../config'
import axios from 'axios'
import CardBoxModal from '../components/CardBox/Modal'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import { Formik, Form, Field } from 'formik'
import Divider from '../components/Divider'
import FormField from '../components/Form/Field'

const Dashboard = () => {
  const [msg, setMsg] = useState('')

  axios.get('https://api.fanitehub.com/api/v1/sms', {
  })
  .then(function (response) {
    //console.log(response.data);
    setMsg(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })

  //console.log("setdata", msg)
  const { clients } = useSampleClients()
  const { transactions } = useSampleTransactions()
  const [creditAmount, setCreditAmount] = useState('')
  const [textBal, setTextBal] = useState(0)

  const clientsListed = clients.slice(0, 4)
  const [isModalInfoActive, setIsModalInfoActive] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem("userData"));
        const marchantId = storedUserData.user.marchantId;
        const response = await axios.get(`https://api.fanitehub.com/api/v1/bals/${marchantId}`)
        const totalspent = await axios.get(`https://api.fanitehub.com/api/v1/sms/${marchantId}`)
        console.log('totalspent', totalspent)
        const gotData = response.data.amount;
        const sms = gotData / 45;
        const smsBal = Math.round(sms);
        setTextBal(smsBal)
        setCreditAmount(gotData)
        //console.log("setCreditAmount", gotData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const handleModalAction = () => {
    setIsModalInfoActive(false)
  }
  const handleSubmit = async (values) => {
    try {
      // Send a POST request to the login endpoint
      const response = await axios.post('https://cloud.fanitehub.com/deposit.php', values);
  
      // Save the response data to localStorage
      localStorage.setItem('userData', JSON.stringify(response.data));
  
      // Redirect to the "/" page
      router.push('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error appropriately
    }
  };
  return (
    <>
      <CardBoxModal
        title="TopUp Balance"
        buttonColor="success"
        buttonLabel="Topup Bal"
        isActive={isModalInfoActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <Formik
        initialValues={{ amount: '', phone: '' }}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <FormField label="Amount" help="Enter Amount (Min 10000/= Ugx)">
            <Field name="amount" type="number" id="amount" />
          </FormField>

          <FormField label="Mobile Number" help="Enter Mobile Money Number(25678/25675...)">
            <Field type="number" id="phone" name="phone" />
          </FormField>
          <Divider />

          <Buttons>
            <Button type="submit" label="Login" color="success" />
          </Buttons>
        </Form>
      </Formik>
      </CardBoxModal>

      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title="Overview"
          main
        >
          <Button
              target="_blank"
              icon={mdiAccountPlus}
              label="Click to Topup"
              color="success"
              roundedFull
              small
              onClick={() => setIsModalInfoActive(true)}
            />
          </SectionTitleLineWithButton>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            trendColor="success"
            icon={mdiWalletOutline}
            iconColor="success"
            number={creditAmount}
            numberPrefix="Ugx "
            label="Available Credit"
          />
          <CardBoxWidget
            icon={mdiMessageTextOutline}
            iconColor="danger"
            number={textBal}
            label="Available Sms Balance"
          />
          
          <CardBoxWidget
            icon={mdiMessageTextOutline}
            iconColor="danger"
            number={textBal}
            label="Available Sms Balance"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
         <div className="flex flex-col justify-between">
        {msg && Array.isArray(msg) && msg.length > 0 ? (
            msg.map((transaction: Transaction) => (
              <CardBoxTransaction key={transaction._id} transaction={transaction} />
            ))):(
              <p>No messages available</p>
            )}
          </div>
          <div className="flex flex-col justify-between">
            {clientsListed.map((client: Client) => (
              <CardBoxClient key={client.id} client={client} />
            ))}
          </div>
        </div>
      </SectionMain>
    </>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Dashboard
