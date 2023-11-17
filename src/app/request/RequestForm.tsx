"use client"

import RequestFormType from '@/types/RequestFormType';
import React, { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import RequestSectionTitle from './RequestSectionTitle';
import Creatable from "react-select/creatable"
import HallDetailsConstant from '@/constants/HallDetailConstant';
import HallDetails from '../service/HallDetails';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./page.module.scss"

type SelectOption = {
  value: string;
  label: string;
}

const RequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestFormType>({ mode: 'onSubmit' });
  const { executeRecaptcha } = useGoogleReCaptcha();


  const [targetTel, setTargetTel] = useState('');
  const [targetAddress, setTargetAddress] = useState('');


  const onSubmit = handleSubmit(async (data) => {
    if (!executeRecaptcha) return
    const token = await executeRecaptcha('submit')
    data.googleReCaptchaToken = token


    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    });


    const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
  })

  const options: SelectOption[] = [];

  HallDetailsConstant.map(item => {
    options.push({
      value: item.name,
      label: item.name
    });
  })

  const onTargetHallChange = (v: any) => {
    const target = HallDetailsConstant.find(item => item.name === v?.value);

    target && (() => {
      setTargetAddress(target.address)
      setTargetTel(target.tel)
    })()
  }


  const today = new Date;
  const [selectWakeDate, setSelectWakeDate] = useState(today)
  const [selectFuneralDate, setSelectFuneralDate] = useState(today)
  const CustomInput = React.forwardRef((props: any, ref) => {
    return <input {...props} forwardRef={ref} readOnly />;
  });
  return (
    <form id='request-form' className="my-8 mx-auto max-w-7xl text-sm lg:text-base" onSubmit={onSubmit}>

      <section className='w-11/12 lg:w-full mx-auto'>
        <RequestSectionTitle title='お届け先情報' />

        <div className="grid grid-cols-12 gap-2">
          <div className='col-span-5 lg:col-span-2'>
            <label htmlFor="ownerName">
              施主様名
            </label>
          </div>

          <div className='col-span-7 lg:col-span-4'>
            <input type="text" name='ownerName' id='ownerName' className='w-full text-base p-1 border' />
          </div>


          <div className='col-span-5 lg:col-span-2'>
            <label htmlFor="ownerTel">
              施主様お電話番号
            </label>
          </div>

          <div className='col-span-7 lg:col-span-4'>
            <input type="text" name='ownerTel' id='ownerTel' className='w-full text-base p-1 border' />
          </div>


          <div className="col-span-5 lg:col-span-2">
            <label htmlFor="targetHall">
              お届け先会場
            </label>
          </div>

          <div className="col-span-7 lg:col-span-4">
            <Creatable name='targetHall' id='targetHall' isClearable onChange={onTargetHallChange} options={options} className='w-full text-base' />
          </div>

          <div className="hidden lg:block lg:col-span-6"></div>

          <div className="col-span-5 lg:col-span-2">
            <label htmlFor="targetHallTel">
              お届け先電話番号
            </label>
          </div>

          <div className='col-span-7 lg:col-span-4'>
            <input type="tel" name='targetHallTel' id='targetHallTel' className='w-full text-base p-1 border' value={targetTel} />
          </div>


          <div className="col-span-5 lg:col-span-2">
            <label htmlFor="targetHallAddress">
              お届け先住所
            </label>
          </div>

          <div className='col-span-7 lg:col-span-4'>
            <input type="text" name='targetHallAddress' id='targetHallAddress' className='w-full text-base p-1 border' value={targetAddress} />
          </div>


          <div className="col-span-5 lg:col-span-2">
            <label htmlFor="wakeDate">
              通夜
            </label>
          </div>

          <div className='col-span-7 lg:col-span-4'>
            <DatePicker
              name='wakeDate'
              id='wakeDate'
              dateFormat='yyyy/MM/dd'
              locale='ja'
              minDate={today}
              className='w-full text-base p-1 border'
              selected={selectWakeDate}
              onChange={selectedDate => setSelectWakeDate(selectedDate || today)}
              customInput={<CustomInput />}
            />
          </div>


          <div className="col-span-5 lg:col-span-2">
            <label htmlFor="funeralDate">
              告別式
            </label>
          </div>

          <div className='col-span-7 lg:col-span-4'>
            <DatePicker
              name='funeralDate'
              id='funeralDate'
              dateFormat='yyyy/MM/dd'
              locale='ja'
              minDate={today}
              className='w-full text-base p-1 border'
              selected={selectFuneralDate}
              onChange={selectedDate => setSelectFuneralDate(selectedDate || today)}
              customInput={<CustomInput />}
            />
          </div>


        </div>
      </section>


    </form>
  )
}

export default RequestForm