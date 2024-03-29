"use client"

import React, { useEffect } from 'react'
import useLogicHooks from '@/hooks/useLogicHooks'
import InputWithLabel from '@/components/input/InputWithLabel'
import Branding from '@/components/core/Branding'
import SelectWithLabel from '@/components/input/SelectWithLabel'


const formInput = [
    { isReadOnly: true, type: 'text', info: 'Aesencrypted', id: 'Customer_Name', label: 'Account Holder Name', name: 'Customer_Name' },
    { isReadOnly: true, type: 'text', info: 'Aesencrypted', id: 'Customer_EmailId', label: 'Email', name: 'Customer_EmailId' },
    { isReadOnly: true, type: 'text', info: 'Aesencrypted', id: 'Customer_Mobile', label: 'Mobile No.', name: 'Customer_Mobile' },
]

const formInput2 = [
    { isRequired: true, type: 'text', info: 'Aesencrypted', id: 'Customer_AccountNo', label: 'Bank Account No', name: 'Customer_AccountNo' },
    { isRequired: true, type: 'text', info: 'plain text', id: 'Customer_InstructedMemberId', label: 'IFSC Code', name: 'Customer_InstructedMemberId' },
    { isReadOnly: true, type: 'date', info: 'yyyy-MM-dd', id: 'Customer_StartDate', label: 'Start Date', name: 'Customer_StartDate' },
    { isReadOnly: true, type: 'date', info: 'yyyy-MM-dd', id: 'Customer_ExpiryDate', label: 'Expiry Date', name: 'Customer_ExpiryDate' },
    { isReadOnly: true, type: 'number', info: 'decimal', id: 'Customer_DebitAmount', label: 'EMI Amount (Double Amount)', name: 'Customer_DebitAmount' },
]

const selectInput = [
    {
        options: [
            { name: "Saving Account", value: "S" },
            { name: "Current Account", value: "C" }
        ], isRequired: true, info: 'plaintext', id: 'Filler5', label: 'Account Type', name: 'Filler5'
    },
]



const EnachClient = () => {

    const { enachState, retrieveData, enachChangeHandler, enachSubmitHandler } = useLogicHooks()

    useEffect(() => {
        retrieveData()
    }, [])

    return (
        <div className='container'>
            <Branding />
            <form className="row" onSubmit={enachSubmitHandler}>
                {formInput.map((d) => {
                    return (
                        <InputWithLabel
                            key={`form_input__${d.name}`}
                            feild={d}
                            state={enachState}
                            onChangeHandler={enachChangeHandler}
                        />
                    )
                })}

                {selectInput.map((d) => {
                    return (
                        <SelectWithLabel
                            key={`form_input__${d.name}`}
                            feild={d}
                            state={enachState}
                            onChangeHandler={enachChangeHandler}
                        />
                    )
                })}

                {formInput2.map((d) => {
                    return (
                        <InputWithLabel
                            key={`form_input__${d.name}`}
                            feild={d}
                            state={enachState}
                            onChangeHandler={enachChangeHandler}
                        />
                    )
                })}

                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 col-12">
                        <button className='btn btn-primary mt-3 mb-3' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
            {/* <Link href="/client/success">
            </Link> */}
        </div>
    )
}

export default EnachClient
