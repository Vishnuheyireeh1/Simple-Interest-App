import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInerest] = useState(0)

  const [isPrincipleInvalid,setIsPrincipleInvalid] = useState(false)
  const [isRateInvalid,setIsRateInvalid] = useState(false)
  const [isYearInvalid,setIsYearInvalid] = useState(false)

  const validateInput = (inputTag)=> {
    const {name,value} = inputTag
    console.log(!!value.match(/^[0,9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleInvalid(false) : setIsPrincipleInvalid(true)
    }else if(name=="rate"){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false) : setIsRateInvalid(true)
    }else if(name=="year"){
      setYear(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false) : setIsYearInvalid(true)
    }

  }

  const handleCalculate =(e)=>{
    e.preventDefault()
    console.log("Inside handleCalculate Function");
    if(principle && rate && year) {
      setInerest(principle*rate*year/100)
    }else{
      alert('please fill the form completely!!')
    }
    
  }

  const handleReset =()=>{
    setInerest(0)
    setIsPrincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
    setPrinciple(0)
    setRate(0)
    setYear(0)
  }
 

  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark'>
<div style={{width:'600px'}} className='bg-light rounded p-5'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your Simple Interest Easily</p>
        <div className='d-flex flex-column text-light justify-content-center align-items-center bg-warning shadow p-3 rounded'>
          <h1>$ {interest} </h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className="mt-5">
          <div className='mt-3'>
          <TextField value={principle || ""} name='principle' onChange={e=>validateInput(e.target)} id="outlined-basic" className='w-100' label="$ Principle Amount" variant="outlined" />
          </div>
          {
           isPrincipleInvalid &&
          <div className='mb-3 text-danger fw-bolder'>Invalid Principle Amount</div>
          }
          <div className='mt-3'>
          <TextField value={rate || ""} onChange={e=>validateInput(e.target)} name='rate' id="outlined-basic" className='w-100' label="Rate Of Interest(p.a)%" variant="outlined" />
          </div>
          {
           isRateInvalid &&
          <div className='mb-3 text-danger fw-bolder'>Invalid Rate</div>
          }
          <div className='mt-3'>
          <TextField value={year || ""} onChange={e=>validateInput(e.target)} name='year' id="outlined-basic" className='w-100' label="Time Period(yr)" variant="outlined" />
          </div>
          {
           isYearInvalid &&
          <div className='mb-3 text-danger fw-bolder'>Invalid Year</div>
          }
          <br/>
          <Stack direction="row" spacing={2}>
        <Button disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} type='submit' onClick={handleCalculate} style={{width:'50%', height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
    <Button onClick={handleReset} style={{width:'50%', height:'70px'}}  variant="outlined">Reset</Button>
    </Stack>
        </form>
</div>  
  </div>
  )
}

export default App
